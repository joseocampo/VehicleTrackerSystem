/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modeloServidor;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.OutputStream;
import java.net.Socket;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;

/**
 *
 * @author Jose Ocampo
 */
public class Client implements Runnable {

    private final Socket clientSocket;
    private final int clientNumber;
    private final OutputStream outputs;
    private final InputStream entries;
    private String vehiclePlate;

    public Client(Socket clientSocket, int clientNumber) throws IOException {
        this.clientSocket = clientSocket;
        this.clientNumber = clientNumber;
        vehiclePlate = "";

        this.outputs = this.clientSocket.getOutputStream();
        this.entries = this.clientSocket.getInputStream();

    }

    @Override
    public void run() {
        int x =0;
        while (x<5) {
            try {
//               InputStream is = socket.getInputStream();
                InputStreamReader isr = new InputStreamReader(entries);
                BufferedReader br = new BufferedReader(isr);
                String number = br.readLine();
                System.out.println("Message received from client is "+number);
                JOptionPane.showMessageDialog(null, "hola :> "+number);
            x++;
            } catch (IOException ex) {
                JOptionPane.showMessageDialog(null, "error en run Clients: "+ex.getMessage());
            }
            
x++;
        }

    }

}
