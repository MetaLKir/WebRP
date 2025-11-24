enum Direction {
    Up,
    Down,
    Left,
    Right,
}

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = 1,
    Right = "Right",
}

let move: Direction = Direction.Down;
console.log(move);
console.log(Direction[2]);

enum HttpStatus {
    OK = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
}

function handleResponse(status: HttpStatus) {
    switch (status) {
        case HttpStatus.OK:
            console.log("Request successful");
            break;
        case HttpStatus.UNAUTHORIZED:
            console.log("Unauthorized successful");
            break;
        case HttpStatus.BAD_REQUEST:
            console.log("Bad request");
            break;
        case HttpStatus.NOT_FOUND:
            console.log("Not found");
            break;
        default:
            console.log("Unknown status");
    }
}