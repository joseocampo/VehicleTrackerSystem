/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;

import DB_model.TVehicle;
import Managers.DataManager;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 *
 * @author Moises
 */
public class Add_New_Vehicle_Servlet extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        String user = (String) request.getSession().getAttribute("user");
        String password = (String) request.getSession().getAttribute("password");

        try {
            String licensePlate = request.getParameter("licensePlate");
            String model = request.getParameter("model");
            String brand = request.getParameter("brand");
            String year = request.getParameter("year");

            TVehicle tv = new TVehicle(licensePlate, model, brand, year);

            int verifica = DataManager.instance(user, password).addVehicle(tv);

            try (PrintWriter out = response.getWriter()) {
                JSONObject obj = new JSONObject();
                JSONObject opc = new JSONObject();
                JSONArray datos = new JSONArray();
                opc.put("verifica", verifica);
                datos.put(opc);

                obj.put("datos", datos);

                out.println(obj);
            }

        } catch (Exception e) {
            try (PrintWriter out = response.getWriter()) {
                JSONObject obj = new JSONObject();
                JSONObject opc = new JSONObject();
                JSONArray datos = new JSONArray();
                opc.put("verifica", 0);
                datos.put(opc);

                obj.put("datos", datos);

                out.println(obj);
            }
            System.out.println("Erroor" + e.getMessage());
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
