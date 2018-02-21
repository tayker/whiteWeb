$(document).ready(function () {
    $('#mainSlider').slick({
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 3000
    });
    $('#navBtn').click(function () {
        $('#nav').toggleClass('active');
    })
});