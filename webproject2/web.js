$(document).ready(function() {
    $("#b1").click(function() {
        $("#j24").slideToggle(500);
    });

    $("#b2").click(function() {
        $("#j29").slideToggle(500);
    });

    $("#b3").click(function() {
        $("#j30").slideToggle(500);
    });

    $("#b4").click(function() {
        $("#j31").slideToggle(500);
    });
    
    $("#b5").click(function() {
        $("#j32").slideToggle(500);
    });
    $("#animation").click(function() {
        $(this).animate({left:"250px", opacity:"1"}, 1000);
    });
    $("#animation2").click(function() {
        $(this).animate({right:"250px", opacity:"1"}, 1000);
    });
    $("#animation3").click(function() {
        $(this).animate({opacity:"1"}, 3000);
    });
    $("#j8").click(function() {
        $("#j47").fadeToggle(1000);
    });
    // $("#m2").click(function() {
    //     $("#j16").slideToggle(500);
    // });
});
