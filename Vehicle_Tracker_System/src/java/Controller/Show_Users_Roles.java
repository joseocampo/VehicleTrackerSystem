package Controller;

import Managers.DataManager;
import java.awt.HeadlessException;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
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
public class Show_Users_Roles extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, Exception {
        response.setContentType("text/html;charset=UTF-8");
        String driver = "com.mysql.jdbc.Driver";
        String conectionString = "jdbc:mysql://localhost/tracker_system_db";
        String user = (String) request.getSession().getAttribute("user");
        String password = (String) request.getSession().getAttribute("password");
        String userB = "root";
        String passwordB = "";
        try {

            String id = request.getParameter("usuario");
            Connection conn;
            Class.forName(driver);
            conn = DriverManager.getConnection(conectionString, userB, passwordB);

            PreparedStatement stm = conn.prepareCall(
                    String.format("select user from t_users where t_users.user = '%s' and t_users.password = '%s'",
                            user, password));

            ResultSet rs1 = stm.executeQuery();
            if (rs1.next()) {
                stm = conn.prepareCall("select PK_Id, Name, Surname, Second_surname, Area, Email, "
                        + "Phone_number, Address from (select user u from t_users where user=?) us, "
                        + "t_user_information where PK_Id=us.u;");
                stm.clearParameters();
                stm.setString(1, id);
                try (ResultSet rs = stm.executeQuery()) {
                    if (rs.next()) {
                        boolean admin = DataManager.instance(user, password).isAdmin(id);
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
                            opc.put("admin", admin);
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

                    //stm.close();
                    
                } catch (SQLException | JSONException e) {
                    if (((SQLException) e).getErrorCode() == 1141) {
                        JOptionPane.showMessageDialog(null, "Usuario sin permisos");
                    }
                }
            }
            conn.close();
        } catch (HeadlessException | ClassNotFoundException | SQLException e) {
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
        } catch (Exception ex) {
            Logger.getLogger(Show_Users_Roles.class.getName()).log(Level.SEVERE, null, ex);
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
        } catch (Exception ex) {
            Logger.getLogger(Show_Users_Roles.class.getName()).log(Level.SEVERE, null, ex);
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
