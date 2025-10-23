import telran.net.protocol.ProtocolJava;
import telran.net.protocol.RequestJava;
import telran.net.protocol.ResponseJava;
import telran.net.protocol.TCPResponseCode;

public class ProtocolTest implements ProtocolJava {

    @Override
    public ResponseJava getResponse(RequestJava request) {
        String str = (String) request.requestData;
        switch (request.requestType) {
            case "length" : {
                return getLength(str);
            }
            case "reverse" : {
                return getReverseString(str);
            }
            default:
                return new ResponseJava(TCPResponseCode.UNKNOWN, null);
        }
    }

    private ResponseJava getReverseString(String str) {
        return new ResponseJava(TCPResponseCode.OK, new StringBuilder(str).reverse().toString());
    }

    private ResponseJava getLength(String str) {
        return new ResponseJava(TCPResponseCode.OK, str.length());
    }
}
