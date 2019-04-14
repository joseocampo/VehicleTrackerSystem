/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.JOptionPane;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 *
 * @author Jose Ocampo
 */
public class Consult_Routes extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

        response.setContentType("text/html;charset=UTF-8");
        String driver = "com.mysql.jdbc.Driver";
        String conectionString = "jdbc:mysql://127.0.0.1/tracker_system_db";
        String user = (String) request.getSession().getAttribute("user");
        String password = (String) request.getSession().getAttribute("password");

        //String user_search = "504260844";
        //String plate = (String) request.getParameter("plate");
        String date = (String) request.getParameter("date");
        String plate = (String) request.getParameter("plate");
        //String date = "2019-01-30";

        try {
            Connection conn;
            Class.forName(driver);
            conn = DriverManager.getConnection(conectionString, "root", "");

            PreparedStatement stm = conn.prepareCall(
                    String.format("select user from t_users where t_users.user = '%s' and t_users.password = '%s'",
                            user, password));

            ResultSet rs1 = stm.executeQuery();
            if (rs1.next()) {

                stm = conn.prepareCall("select consecutivo.PK_Date,consecutivo.endDate,consecutivo.beginHour,consecutivo.endHour ,consecutivo, streets, hora from"
                        + " (select PK_Date,consecutivo,endDate,beginHour,endHour from t_routes where FK_User=? and FK_Vehicle=? and  PK_Date=?) as consecutivo,"
                        + " t_streets where consecutivo.consecutivo = FK_routes    order by hora asc;");
                stm.clearParameters();
                stm.setString(1, user);
                stm.setString(2, plate);
                stm.setString(3, date);

                try (ResultSet rs = stm.executeQuery()) {
                    JSONObject routes_json_object = new JSONObject();
                    JSONArray json_routes = new JSONArray();
                    if (rs != null) {
                        ArrayList<Route> allRoutes = new ArrayList<>();
                        Route route = null;
                        boolean first_time = true;
                        route = new Route();

                        while (rs.next()) {

                            do {
                                if (!first_time) {//solo si no es la primera vez que leemos una fila del resulset.
                                    //preguntamos si el consecutivo que ya leimos es igual al que estamos leyendo,
                                    if (route.getConsecutive() == rs.getInt("consecutivo")) {
                                        route.setConsecutive(rs.getInt("consecutivo"));
                                        route.addStreet(rs.getString("streets"));
                                        route.setDate(rs.getString("PK_Date"));
                                        route.setEndDate(rs.getString("endDate"));
                                        route.setBeginHour(rs.getString("beginHour"));
                                        route.setEndhour(rs.getString("endHour"));

                                        first_time = false;
                                    } else {
                                        //si el proximo consecutivo es de otro prestamo entonces se agrega
                                        //la ruta a la lista y se crea una nueva la cual va a ser del
                                        //otro tipo de consecutivo.
                                        allRoutes.add(route);
                                        route = new Route();
                                        route.setConsecutive(rs.getInt("consecutivo"));
                                        route.addStreet(rs.getString("streets"));
                                        route.setDate(rs.getString("PK_Date"));
                                        route.setEndDate(rs.getString("endDate"));
                                        route.setBeginHour(rs.getString("beginHour"));
                                        route.setEndhour(rs.getString("endHour"));
                                        first_time = false;
                                    }

                                } else {
                                    //esto lo hacemos solo para cuando leemos la primera fila del resulset.
                                    route.setConsecutive(rs.getInt("consecutivo"));
                                    route.addStreet(rs.getString("streets"));
                                    route.setDate(rs.getString("PK_Date"));
                                    route.setEndDate(rs.getString("endDate"));
                                    route.setBeginHour(rs.getString("beginHour"));
                                    route.setEndhour(rs.getString("endHour"));
                                    first_time = false;
                                }
                                //la condicion
                            } while (!first_time && rs.next());
                            allRoutes.add(route);

                        }

                        for (int i = 0; i < allRoutes.size(); i++) {
                            JSONObject opc = new JSONObject();
                            opc.put("consecutivo", allRoutes.get(i).getConsecutive());
                            opc.put("streets", allRoutes.get(i).getStreets());
                            opc.put("date", allRoutes.get(i).getDate());
                            opc.put("endDate", allRoutes.get(i).getEndDate());
                            opc.put("beginHour", allRoutes.get(i).getBeginHour());
                            opc.put("endHour", allRoutes.get(i).getEndhour());

                            json_routes.put(opc);

                        }

                        try (PrintWriter out = response.getWriter()) {

                            routes_json_object.put("routes", json_routes);
//                            JOptionPane.showMessageDialog(null, "RUTAS:  " + allRoutes.toString());
//                            JOptionPane.showMessageDialog(null, "RUTAS JOSN:  " + allRoutes.toString());

                            out.println(routes_json_object);

                        }

                    } else {
                        try (PrintWriter out = response.getWriter()) {
                            routes_json_object = new JSONObject();
                            json_routes = new JSONArray();
                            routes_json_object.put("points", json_routes);
                            out.println(routes_json_object);
                        }
                    }
                }

                stm.close();
            }
            conn.close();
        } catch (ClassNotFoundException | SQLException | JSONException e) {
            JOptionPane.showMessageDialog(null, e.getMessage());
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

    //clase para agregar las rutas con sus respectivas calles.
    public class Route {

        private int consecutive;
        private String date, beginHour, endhour;
        private String endDate;
        private final ArrayList<String> streets;

        public Route(int consecutive, ArrayList<String> streets, String date, String endDate) {
            this.consecutive = consecutive;
            this.streets = streets;
            this.date = date;
            this.endDate = endDate;
        }

        public Route() {
            this.consecutive = 0;
            this.streets = new ArrayList<String>();
            this.date = "";
            this.endDate = "";
            this.beginHour = "";
            this.endhour = "";
        }

        public void addStreet(String street) {
            streets.add(street);
        }

        public void setConsecutive(int consecutive) {
            this.consecutive = consecutive;
        }

        public int getConsecutive() {
            return this.consecutive;
        }

        public ArrayList<String> getStreets() {
            return this.streets;
        }

        public String getDate() {
            return date;
        }

        public void setDate(String date) {
            this.date = date;
        }

        public String getEndDate() {
            return endDate;
        }

        public void setEndDate(String endDate) {
            this.endDate = endDate;
        }

        public String getBeginHour() {
            return beginHour;
        }

        public void setBeginHour(String beginHour) {
            this.beginHour = beginHour;
        }

        public String getEndhour() {
            return endhour;
        }

        public void setEndhour(String endhour) {
            this.endhour = endhour;
        }

        @Override
        public String toString() {
            StringBuilder r = new StringBuilder();
            r.append("\n Comsecutivo:  ").append(consecutive);
            r.append("\n");
            r.append(" Calles:  ").append(streets.toString()).append("\n");
            return r.toString();
        }
    }
}
