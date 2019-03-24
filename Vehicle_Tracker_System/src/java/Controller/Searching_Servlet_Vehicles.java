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
 * @author MelissaUR
 */
public class Searching_Servlet_Vehicles extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String vehicle_search = request.getParameter("plaque");

        response.setContentType("text/html;charset=UTF-8");
        String driver = "com.mysql.jdbc.Driver";
        String conectionString = "jdbc:mysql://localhost/tracker_system_db";
        String user = (String) request.getSession().getAttribute("user");
        String password = (String) request.getSession().getAttribute("password");
        String userB = "root";
        String passwordB = "";

        //JOptionPane.showMessageDialog(null, request.getParameter("plaque"));
        try {
            Connection conn;
            Class.forName(driver);
            conn = DriverManager.getConnection(conectionString, userB, passwordB);

            PreparedStatement stm = conn.prepareCall(
                    String.format("select user from t_users where t_users.user = '%s' and t_users.password = '%s'",
                            user, password));

            ResultSet rs1 = stm.executeQuery();
            if (rs1.next()) {

                stm = conn.prepareCall("select PK_License_plate, model, brand, year_purchase from t_vehicle where PK_License_plate=?;");
                stm.clearParameters();
                stm.setString(1, vehicle_search);

                try (ResultSet rs = stm.executeQuery()) {
                    if (rs.next()) {
                        try (PrintWriter out = response.getWriter()) {

                            JSONObject obj = new JSONObject();
                            JSONArray vehiculos = new JSONArray();

                            JSONObject opc = new JSONObject();
                            opc.put("plaque", rs.getString("PK_License_plate"));
                            opc.put("model", rs.getString("model"));
                            opc.put("brand", rs.getString("brand"));
                            opc.put("year", rs.getString("year_purchase"));
                            vehiculos.put(opc);
                            obj.put("vehiculos", vehiculos);
                            out.println(obj);
                        }
                    } else {
                        try (PrintWriter out = response.getWriter()) {
                            JSONObject obj = new JSONObject();
                            JSONArray vehiculos = new JSONArray();
                            obj.put("vehiculos", vehiculos);
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
