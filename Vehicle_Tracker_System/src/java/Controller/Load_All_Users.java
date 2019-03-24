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
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 *
 * @author Jose Ocampo
 */
public class Load_All_Users extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, SQLException {

        response.setContentType("text/html;charset=UTF-8");
        String driver = "com.mysql.jdbc.Driver";
        String conectionString = "jdbc:mysql://localhost/tracker_system_db";
        String user = (String) request.getSession().getAttribute("user");
        String password = (String) request.getSession().getAttribute("password");
        String userB = "root";
        String passwordB = "";
        //SERVLET PARAECIDO A SERCHAING_SERVLET PER NO ES EL MISMO
        try {
            Connection conn;
            Class.forName(driver);
            conn = DriverManager.getConnection(conectionString, userB, passwordB);

            PreparedStatement stm = conn.prepareCall(
                    String.format("select user from t_users where t_users.user = '%s' and t_users.password = '%s'",
                            user, password));

            ResultSet rs1 = stm.executeQuery();
            if (rs1.next()) {

                stm = conn.prepareCall("select PK_Id, Name, Surname, Second_surname, Area, Email, Phone_number, Address "
                        + "from t_user_information t, t_users u where t.PK_Id = u.user");

                try (ResultSet rs = stm.executeQuery()) {

                    try (PrintWriter out = response.getWriter()) {

                        JSONObject obj = new JSONObject();
                        JSONArray usersJ = new JSONArray();

                        while (rs.next()) {
                            JSONObject opc = new JSONObject();
                            opc.put("0", rs.getString("PK_Id"));
                            opc.put("1", rs.getString("Name"));
                            opc.put("2", rs.getString("Area"));
                            opc.put("3", rs.getString("Phone_number"));
                            opc.put("4", rs.getString("Address"));
                            opc.put("5", rs.getString("email"));
                            opc.put("6", "<i class='fa fa-pencil icon_edit_users' style='aria-hidden:false; color: #0396E3; font-size:16pt;' ></i>");
                            usersJ.put(opc);
                        }
                        obj.put("usersJ", usersJ);
                        out.println(obj);
                    }
                }
                //stm.close();

            }
            conn.close();
        } catch (ClassNotFoundException | SQLException | JSONException e) {
            System.out.println(e.getMessage());
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
        try {
            processRequest(request, response);
        } catch (SQLException ex) {
            Logger.getLogger(Load_All_Users.class.getName()).log(Level.SEVERE, null, ex);
        }
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
        try {
            processRequest(request, response);
        } catch (SQLException ex) {
            Logger.getLogger(Load_All_Users.class.getName()).log(Level.SEVERE, null, ex);
        }
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
