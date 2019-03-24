package Controller;

import Managers.DataManager;
import java.awt.HeadlessException;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.JOptionPane;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Changing_Roles_Servlet extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String user = (String) request.getSession().getAttribute("user");
        String password = (String) request.getSession().getAttribute("password");

        try {
            String id = request.getParameter("usuario");
            String role_type = request.getParameter("role_type");
            //JOptionPane.showMessageDialog(null, id + "-" + role_type);
            if ("Administrador".equals(role_type)) {
                boolean cambio = DataManager.instance(user, password).userPrivilges(id);

                try (PrintWriter out = response.getWriter()) {
                    JSONObject obj = new JSONObject();
                    JSONObject opc = new JSONObject();
                    JSONArray datos = new JSONArray();
                    if (cambio) {
                        opc.put("type", 1);
                    } else {
                        opc.put("type", 0);
                    }

                    datos.put(opc);

                    obj.put("datos", datos);

                    out.println(obj);
                }
            } else if ("Usuario".equals(role_type)) {
                boolean cambio = DataManager.instance(user, password).adminPrivileges(id);

                try (PrintWriter out = response.getWriter()) {
                    JSONObject obj = new JSONObject();
                    JSONObject opc = new JSONObject();
                    JSONArray datos = new JSONArray();
                    if (cambio) {
                        opc.put("type", 2);
                    } else {
                        opc.put("type", 0);
                    }
                    datos.put(opc);

                    obj.put("datos", datos);

                    out.println(obj);
                }
            }

        } catch (HeadlessException | SQLException | JSONException e) {
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
