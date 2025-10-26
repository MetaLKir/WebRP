import telran.net.server.ServerJava;

import java.io.IOException;

public class TestServerAppl {

    public static void main(String[] args) throws IOException {
        ServerJava server = new ServerJava(new ProtocolTest(), 4000);
        server.run();
    }


}
