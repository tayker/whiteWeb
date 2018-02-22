$(document).ready(function () {
    $('#mainSlider').slick({
        prevArrow: false,
        nextArrow: false,
        swipe: false,
    });
    
    $('.main .menu a[data-slide]').click(function(e) {
        e.preventDefault();
        $('.main .menu a').removeClass('active');
        let slideNum = $(this).data('slide');
        
        $('#mainSlider').slick('slickGoTo', slideNum - 1);
        
        $('.main .menu a[data-slide="' + slideNum + '"]').addClass('active');
    });
    
    $('#navBtn').click(function () {
        $('#nav').toggleClass('active');
    })
});