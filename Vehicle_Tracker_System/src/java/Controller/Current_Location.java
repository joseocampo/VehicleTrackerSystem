package Controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.JOptionPane;
import modeloServidor.Client;
import modeloServidor.Server;

/**
 *
 * @author Jose Ocampo
 */
public class Current_Location extends HttpServlet {

    static Socket s = null;
    static ServerSocket ss = null;
    static InputStreamReader ipr;
    static BufferedReader br;
    static String message;

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

        String vehicle = request.getParameter("vehicle");
        //SE INICIA LA COMUNICACION CON EL CLIENTE
        System.out.println("Antes de crear el socket");

        try {
            ss = new ServerSocket(6000);

            ss.setSoTimeout(7000);

            s = ss.accept();

            System.out.println("luego de crear el socket\n------------------------------------------------------------");

            System.out.println("despues de aceptar el cliente");
            ipr = new InputStreamReader(s.getInputStream());
            br = new BufferedReader(ipr);
            message = br.readLine();

            System.out.println(message);

            try (PrintWriter out = response.getWriter()) {
                ArrayList<String> data = plate(message);
                String plate = data.get(0);
                String lat_long = data.get(1);

                System.out.println("plate: " + plate + " tam: " + plate.length());
                System.out.println("lat: " + lat_long);
                System.out.println("vehicle: " + vehicle + " tam: " + vehicle.length());
                if (plate.equals(vehicle)) {
                    System.out.println("plate dntro del if: " + plate);
                    out.println(lat_long);
                } else {
                    System.out.println("placa que llega  es distinta a la buscada: " + plate);
                    //out.println("error");
                }

                ipr.close();
                br.close();
                s.close();
                ss.close();
            }
            ipr.close();
            br.close();
            s.close();
            ss.close();
        } catch (Exception ex) {
            try (PrintWriter out = response.getWriter()) {
                System.out.println("ESTADO DEL SOCKET ANTES DE CERRARLO EN EL CATCH " + ss.isClosed());
                ss.close();
                System.out.println("ESTADO DEL SOCKET DESPUES DE CERRARLO EN EL CATCH " + ss.isClosed());
                out.println("ERROR");
            }
        }

    }

    public ArrayList<String> plate(String string) {
        char[] aux = string.toCharArray();

        String plate = "";
        String lat_long = "";
        for (int i = 0; i < aux.length; i++) {
            if (aux[i] != ';') {
                plate += aux[i];
            } else {
                for (int j = (i + 1); j < aux.length; j++) {
                    lat_long += aux[j];
                }
                i = aux.length;
            }
        }
        ArrayList<String> data = new ArrayList<>();
        data.add(plate);
        data.add(lat_long);
        return data;
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
