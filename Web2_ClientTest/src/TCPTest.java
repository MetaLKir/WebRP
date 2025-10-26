import org.junit.jupiter.api.Test;
import telran.net.client.TCPClientJava;
import telran.net.protocol.ResponseJava;
import telran.net.protocol.TCPResponseCode;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

public class TCPTest extends TCPClientJava {

    public TCPTest() throws Exception {
        super("localHost", 4000);
    }

    @Test
    void test(){
        String str = "12345";

        int len = sendRequest("length", str);
        assertEquals(5, len);
        System.out.println("Length string is: " + len);

        String rev = sendRequest("reverse", str);
        assertEquals("54321", rev);
        System.out.println("Reversed string is: " + rev);

//        ResponseJava res = sendRequest("aasdg", rev);
//        assertEquals(TCPResponseCode.UNKNOWN, res.code);

        try {
            close();
        } catch (IOException e) {
            // do nothing here because it's just a test
        }
    }
}
