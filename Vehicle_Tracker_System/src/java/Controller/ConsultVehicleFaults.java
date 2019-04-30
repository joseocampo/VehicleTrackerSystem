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
 * @author Meli
 */
public class ConsultVehicleFaults extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        String driver = "com.mysql.jdbc.Driver";
        String conectionString = "jdbc:mysql://localhost/tracker_system_db";
        String user = (String) request.getSession().getAttribute("user");
        String password = (String) request.getSession().getAttribute("password");
        String userB = "root";
        String passwordB = "";

        String pk_plate_current = request.getParameter("pk_plate");

        try {
            Connection conn;
            Class.forName(driver);
            conn = DriverManager.getConnection(conectionString, userB, passwordB);
            PreparedStatement stm = conn.prepareCall(
                    String.format("select user from t_users where t_users.user = '%s' and t_users.password = '%s'",
                            user, password));
            ResultSet rs1 = stm.executeQuery();
            if (rs1.next()) {
                stm = conn.prepareCall("SELECT PK_Date,Damage_Details,FK_User,FK_Vehicle,Damage_type,Incident_details FROM t_incidents WHERE FK_Vehicle = ?;");
                stm.clearParameters();
                stm.setString(1, pk_plate_current);

                try (ResultSet rs = stm.executeQuery()) {
                    try (PrintWriter out = response.getWriter()) {

                        JSONObject obj = new JSONObject();
                        JSONArray vehiclesJ = new JSONArray();

                        while (rs.next()) {
                            JSONObject opc = new JSONObject();
                            opc.put("0", rs.getString("PK_Date"));
                            opc.put("1", rs.getString("Damage_Details"));
                            opc.put("2", rs.getString("FK_User"));
                            opc.put("3", rs.getString("FK_Vehicle"));
                            opc.put("4", rs.getString("Damage_type"));
                            opc.put("5", rs.getString("Incident_details"));
                            vehiclesJ.put(opc);
                        }
                        obj.put("vehiclesJ", vehiclesJ);
                        out.println(obj);
                    }	
                }

            } else {

            }

        } catch (ClassNotFoundException | SQLException | JSONException e) {
            System.out.println("Error en Consult_Vehicles servlet: " + e.getMessage());
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
