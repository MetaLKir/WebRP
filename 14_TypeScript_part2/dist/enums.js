"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2[Direction2["Left"] = 1] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
let move = Direction.Down;
console.log(move);
console.log(Direction[2]);
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
})(HttpStatus || (HttpStatus = {}));
function handleResponse(status) {
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
