package telran.net.server;

import telran.net.protocol.ProtocolJava;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class ServerJava implements Runnable {
    ServerSocket serverSocket;
    ProtocolJava protocol;
    int port;

    public ServerJava(ProtocolJava protocol, int port) throws IOException {
        this.protocol = protocol;
        this.port = port;
        serverSocket = new ServerSocket(port);
    }

    @Override
    public void run() {
        System.out.println("listen on port " + port);

        try {
            while (!serverSocket.isClosed()) {
                try {
                    Socket socket = serverSocket.accept();
                    new ServerClientJava(socket, protocol).run();
                } catch (Exception clientError) {
                    System.out.println("Client error " + clientError.getMessage());
                }
            }
        } catch (Exception e) {
            if (!serverSocket.isClosed()) {
                System.out.println("server error " + e.getMessage());
            }
        }
    }

    public void stop() {
        try {
            serverSocket.close();
        } catch (Exception ignored) {
        }
    }
}
