package telran.net.protocol;

import java.io.Serial;
import java.io.Serializable;

public class ResponseJava implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    public TCPResponseCode code;
    public Serializable responseData;

    public ResponseJava(TCPResponseCode code, Serializable responseData) {
        this.code = code;
        this.responseData = responseData;
    }

    @Override
    public String toString() {
        return "ResponseJava{" +
                "code=" + code +
                ", responseData=" + responseData +
                '}';
    }
}
