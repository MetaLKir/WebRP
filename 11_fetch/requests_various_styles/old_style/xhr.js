function testXhrGet() {
    const url = `https://jsonplaceholder.typicode.com/users`;

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open('GET', url, true);
    xhr.onload = function () {
        console.log("=====XHR GET=====");
        if (xhr.status >= 200 && xhr.status < 300) {
            printOut("XNLHttpRequest GET" + url,
                "HTTP " + xhr.status,
                xhr.response);
        } else {
            printOut("XNLHttpRequest GET Network Error",
                "",
                "Network error");
        }
    }
    xhr.send();
}

