package telran.net.server;

import telran.net.protocol.ProtocolJava;
import telran.net.protocol.RequestJava;
import telran.net.protocol.ResponseJava;
import telran.net.protocol.TCPResponseCode;

import java.io.EOFException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;

public class ServerClientJava implements Runnable {
//    private ObjectOutputStream output;
//    private ObjectInputStream input;
    private Socket socket;
    private ProtocolJava protocol;

    public ServerClientJava(Socket socket, ProtocolJava protocol) throws Exception {
        this.socket = socket;
        this.protocol = protocol;
    }

    @Override
    public void run() {
        try (Socket s = this.socket;
             ObjectOutputStream output = new ObjectOutputStream(s.getOutputStream());
             ObjectInputStream input = new ObjectInputStream(s.getInputStream());
        ) {
            output.flush();
            while (true) {
                Object obj = input.readObject();
                ResponseJava response;
                if (!(obj instanceof RequestJava request)) {
                    response = new ResponseJava(TCPResponseCode.WRONG_REQUEST, null);
                } else {
                    try {
                        response = protocol.getResponse(request);
                        if (response == null)
                            response = new ResponseJava(TCPResponseCode.UNKNOWN, null);
                    } catch (Exception e) {
                        response = new ResponseJava(TCPResponseCode.WRONG_REQUEST, null);
                    }
                }
                output.writeObject(response);
                output.flush();
            }
        } catch (EOFException e) {
            System.out.println("client closed connection");
        } catch (Exception e) {
            System.out.println("Error " + e.getMessage());
        }
    }
}
