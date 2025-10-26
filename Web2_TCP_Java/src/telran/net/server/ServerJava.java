package telran.net.server;

import telran.net.protocol.ProtocolJava;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.SocketTimeoutException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ServerJava implements Runnable {
    ServerSocket serverSocket;
    ProtocolJava protocol;
    int port;
    int timeout;
    ExecutorService executor; // for threads pool

    public ServerJava(ProtocolJava protocol, int port, int timeout, int nThreads) throws IOException {
        this.protocol = protocol;
        this.port = port;
        this.timeout = timeout;
        serverSocket = new ServerSocket(port);
        this.serverSocket.setSoTimeout(timeout);
        this.executor = Executors.newFixedThreadPool(nThreads);
    }

    @Override
    public void run() {
        System.out.println("listen on port " + port);

        try {
            while (!ServerClientJava.shutdown.get()) {
                try {
                    Socket socket = serverSocket.accept();
                    socket.setSoTimeout(timeout);
                    executor.execute(new ServerClientJava(socket, protocol));
                } catch (SocketTimeoutException e) {

                }
            }
        } catch (IOException e) {
            if (!serverSocket.isClosed()) {
                System.out.println("server error " + e.getMessage());
            }
        } finally {
            executor.shutdownNow();
            try {
                serverSocket.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
            System.out.println("server stopped");
        }
    }

//    public void stop() {
//        try {
//            serverSocket.close();
//        } catch (Exception ignored) {
//        }
//    }

    public void shutdown() {
        ServerClientJava.shutdown.set(true);
        try {
            serverSocket.close();
        } catch (IOException e) {
        }
        executor.shutdownNow();
    }
}
