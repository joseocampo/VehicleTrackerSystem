package Controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.JOptionPane;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 * @author Jose Ocampo
 */
public class Login_Servlet extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        String sign_out = request.getParameter("action");
        if (sign_out != null) {
            request.getSession().invalidate();
        } else {
            String driver = "com.mysql.jdbc.Driver";
            String conectionString = "jdbc:mysql://localhost/tracker_system_db";
            String user = request.getParameter("id_login");
            String password = request.getParameter("pass_login");

            try {
                Connection conn;
                Class.forName(driver);
                conn = DriverManager.getConnection(conectionString, "root", "");

                PreparedStatement stm = conn.prepareCall(
                        String.format("select user from t_users where t_users.user = '%s' and t_users.password = '%s'", 
                                user, password));

                ResultSet rs = stm.executeQuery();
                if (rs.next()) {
                    request.getSession(true).setAttribute("user", user);
                    request.getSession(true).setAttribute("password", password);

                    conn.close();
                    response.getWriter().append("admin");
                }else{
                    try (PrintWriter out = response.getWriter()) {
                    JSONObject obj = new JSONObject();
                    JSONObject opc = new JSONObject();
                    JSONArray datos = new JSONArray();
                    opc.put("error", 1);
                    datos.put(opc);
                    obj.put("datos", datos);
                    out.println(obj);
                }
                }

            } catch (Exception e) {
//                response.sendRedirect("home_page.jsp");
                try (PrintWriter out = response.getWriter()) {
                    JSONObject obj = new JSONObject();
                    JSONObject opc = new JSONObject();
                    JSONArray datos = new JSONArray();
                    opc.put("error", 1);
                    datos.put(opc);
                    obj.put("datos", datos);
                    out.println(obj);
                }
            }
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
