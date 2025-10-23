package telran.net.client;

import telran.net.protocol.RequestJava;
import telran.net.protocol.ResponseJava;
import telran.net.protocol.TCPResponseCode;

import java.io.*;
import java.net.Socket;

public class TCPClientJava implements Closeable {
    protected ObjectOutputStream output;
    protected ObjectInputStream input;
    protected Socket socket;

    public TCPClientJava(String hostName, int port) throws Exception {
        this.socket = new Socket(hostName, port);
        output = new ObjectOutputStream(socket.getOutputStream());
        this.output.flush();
        input = new ObjectInputStream(socket.getInputStream());
    }

    @Override
    public void close() throws IOException {
        socket.close();
    }

    @SuppressWarnings("unchecked")
    protected <T> T sendRequest(String requestType, Serializable requestData) {
        try {
            RequestJava request = new RequestJava(requestType, requestData);
            output.writeObject(request);
            ResponseJava response = (ResponseJava) input.readObject();
            if (response.code != TCPResponseCode.OK)
                throw new Exception(response.code.toString());
            return (T) response.responseData;
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}
