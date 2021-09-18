$(function() {


    /* Smooth scroll */
    $([data-scroll]).on("click", function(event){
        event.preventDefault();

        var blockID = $(this).data('scroll');
            blockOffset = $(blockID).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        });
    }); 

    /* Menu nav toogle */
    $("#nav_toogle").on("click", function(event) {
        event.preventDefault();

        $("#nav").toggleClass("active");
    });
});