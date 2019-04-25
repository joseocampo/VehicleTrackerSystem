/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modeloServidor;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;

/**
 *
 * @author Jose Ocampo
 */
public class Server implements Runnable {

    private ServerSocket serverSocket;
    private Socket socket;
    private Thread atentionThread;
    private Thread clientThread;
    private ArrayList<Client> clients;
    private final int PORT_NUMBER = 4000;
    private  int CLIENTS_TOTAL = 5;
    private  int clientNumber = 0;

    private static final int MAX_CLIENTS = 8;

    public Server() {
        clients = new ArrayList<>();

    }

    public void initServer() {
        System.out.println("Iniciando aplicación..");
        atentionThread = new Thread(this);
        atentionThread.start();
    }
    public Client client(int clientNumber){
       return  clients.get(clientNumber);
        
    }

    private void attendClients() {
        try {
            serverSocket = new ServerSocket(PORT_NUMBER);
            
            while(atentionThread == Thread.currentThread() && clientNumber < CLIENTS_TOTAL){
                
                socket = serverSocket.accept();
                clientNumber++;
                Client client = new Client(socket, clientNumber);
                clients.add(client);
//                initComunication(client);
                
            }
            
            
            
        } catch (IOException ex) {
            JOptionPane.showMessageDialog(null, "error en attendClients: "+ex.getMessage());
        }

    }

    public void initComunication(Client newClient) {

        clientThread = new Thread(newClient);
        if (clientThread != null) {
            clientThread.start();
            
        }

    }

    @Override
    public void run() {
        attendClients();
    }

}
