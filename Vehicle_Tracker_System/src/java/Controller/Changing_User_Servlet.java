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

/**
 *
 * @author Jose Ocampo
 */
public class Changing_User_Servlet extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        String driver = "com.mysql.jdbc.Driver";
       String conectionString = "jdbc:mysql://localhost/tracker_system_db";
        String user = (String) request.getSession().getAttribute("user");
        String password = (String) request.getSession().getAttribute("password");
        String userB = "root";
        String passwordB = "";

        try {

            String id = request.getParameter("id");
            String area = request.getParameter("area");
            String phone = request.getParameter("phone");
            String email = request.getParameter("email");
            String address = request.getParameter("address");

            Connection conn;
            Class.forName(driver);
            conn = DriverManager.getConnection(conectionString, userB, passwordB);

            PreparedStatement stm = conn.prepareCall(
                    String.format("select user from t_users where t_users.user = '%s' and t_users.password = '%s'",
                            user, password));

            ResultSet rs = stm.executeQuery();
            if (rs.next()) {
                stm = conn.prepareCall("update t_user_information set area = ?, phone_number = ?, email = ?, address = ? where PK_Id = ?;");
                stm.clearParameters();
                stm.setString(1, area);
                stm.setString(2, phone);
                stm.setString(3, email);
                stm.setString(4, address);
                stm.setString(5, id);

                int resultado = stm.executeUpdate();
                //TUserInformation tui = new TUserInformation(identification, area, phone, email, address, null);
//            JOptionPane.showMessageDialog(null, resultado);
//            DataManager.instance(user, password).changeUser(id);
                try (PrintWriter out = response.getWriter()) {
                    out.print(resultado);
//                 JOptionPane.showMessageDialog(null, resultado);
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            System.out.print(e.getMessage());
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
