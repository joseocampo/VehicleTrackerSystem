package Controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.JOptionPane;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Consult_Users extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

        response.setContentType("text/html;charset=UTF-8");
        String driver = "com.mysql.jdbc.Driver";
       String conectionString = "jdbc:mysql://localhost/tracker_system_db";
        String user = (String) request.getSession().getAttribute("user");
        String password = (String) request.getSession().getAttribute("password");
        String userB = "root";
        String passwordB = "";
        String user_search = request.getParameter("usuario");

        try {
            Connection conn;
            Class.forName(driver);
            conn = DriverManager.getConnection(conectionString, userB, passwordB);

            PreparedStatement stm = conn.prepareCall(
                    String.format("select user from t_users where t_users.user = '%s' and t_users.password = '%s'",
                            user, password));

            ResultSet rs1 = stm.executeQuery();
            if (rs1.next()) {
                stm = conn.prepareCall(
                        "select PK_Id, Name, Surname, Second_surname, Area,Email,Phone_number, Address,vehicle from "
                        + "(select user u from t_users where user=?) us, t_user_information usua where us.u ="
                        + " usua.PK_Id;");
                stm.clearParameters();
                stm.setString(1, user_search);

                try (ResultSet rs = stm.executeQuery()) {
                    if (rs.next()) {
                        try (PrintWriter out = response.getWriter()) {

                            JSONObject obj = new JSONObject();
                            JSONArray usersJ = new JSONArray();

                            JSONObject opc = new JSONObject();
                            opc.put("id", rs.getString("PK_Id"));
                            opc.put("nombre", rs.getString("Name"));
                            opc.put("surname", rs.getString("Surname"));
                            opc.put("second_surname", rs.getString("Second_surname"));
                            opc.put("area", rs.getString("Area"));
                            opc.put("telefono", rs.getString("Phone_number"));
                            opc.put("email", rs.getString("Email"));
                            opc.put("direccion", rs.getString("Address"));
                            opc.put("vehicle", rs.getString("vehicle"));
                            usersJ.put(opc);
                            obj.put("usersJ", usersJ);
                            out.println(obj);
                        }
                    } else {
                        try (PrintWriter out = response.getWriter()) {
                            JSONObject obj = new JSONObject();
                            JSONArray usersJ = new JSONArray();
                            obj.put("usersJ", usersJ);
                            out.println(obj);
                        }
                    }
                }

                //stm.close();
               
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

}
