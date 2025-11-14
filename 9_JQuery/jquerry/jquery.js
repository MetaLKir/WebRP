// entrance point, like main function
$(document).ready(function () {
    $('.skillset').hide();
    // $('.skillset').show(2000);
    $('.skillset').fadeIn(2000);

    $('.projects').hide();
    $('.project-button').click(function () {
        // $('.projects').show();
        // $(this).next().toggle();
        $(this).next().slideToggle(500);
        $(this).text("Project viewed");
    });

    $('.skillset').on('mouseenter', function () {
        $('h2').css({"color": "white", "backgroundColor": "red"});
    })

    $('.skillset').append('<button>Remove all</button>');
    $('button').click(function () {
        $('.skillset').empty();
    })
})
// text()
// html()
// val()

