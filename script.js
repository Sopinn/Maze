$(".1, .2, .3, .canonend, .end, .wrong, .wrongd").hide();

$(".next").click(function() {
    $(".start").hide();
    $(".1").show();
});

$(".Leave").click(function() {
    $(".1").hide();
    $(".2").show();
});

$(".Stay").click(function() {
    $(".1").hide();
    $(".end").show();
});

$(".Straight").click(function() {
    $(".2").hide();
    $(".wrong").show();
});

$(".Right").click(function() {
    $(".2").hide();
    $(".wrong").show();
});

$(".Left").click(function() {
    $(".2").hide();
    $(".3").show();
});

$(".Door1").click(function() {
    $(".3").hide();
    $(".wrongd").show();
});

$(".Door2").click(function() {
    $(".3").hide();
    $(".canonend").show();
    $(".end").show();
});

$(".Door3").click(function() {
    $(".3").hide();
    $(".wrongd").show();
});

$(".reset").click(function() {
    $(".1, .2, .3, .canonend, .end, .wrong, .wrongd").hide();
    $(".start").show();
});
