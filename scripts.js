$(function() {
    $("#hidden").on('click', function() {
        $("#hidden").removeClass("hide");
        $("#user").fadeIn("slow");
    });
    $("#gabinety > i").on('click', function() {
        $("#gabinety-list").toggle("slow");
        $("#gabinety > i").toggleClass("fa-angle-up");
    });
    $("#lekarze > i").on('click', function() {
        $("#lekarze-list").toggle("slow");
        $("#lekarze > i").toggleClass("fa-angle-up");
    });
    $("#grafiki > i").on('click', function() {
        $("#grafiki-list").toggle("slow");
        $("#grafiki > i").toggleClass("fa-angle-up");
    });
});


