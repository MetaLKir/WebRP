function testJqueryGet() {
    // const url = "https://jsonplaceholder.typicode.com/posts/10";
    const url = "https://jsonplaceholder.typicode.com/users";
    $.ajax({
        url: url,
        type: 'GET',
        success: function (response, status, xhr) {
            console.log("===== JQuery GET=====");
            printOut(
                "jQuery GET " + url,
                "status" + status + ' HTTP ' + xhr.status,
                response
            );
        },
        error: function(xhr, status,error){
            console.log("===== JQuery GET Error ======");
            printOut(
                "jQuery GET Error " + url,
                "status " + status + ' HTTP ' + xhr.status,
                ", error " + error
            );
        }
    })
}