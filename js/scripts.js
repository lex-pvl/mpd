 window.onscroll = function() {
    myFunction();
};

var sticky = document.getElementById("topSearch").offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        $("#stickyMenu").show();
    } else {
        $("#stickyMenu").hide();
    }
}

$(".menuOpen").on("click", function(event){
    event.preventDefault();
    $(".mobileMenu").show();
    $('body').css('overflow', 'hidden');
});
$("#menuClose").on("click", function(event){
    event.preventDefault();
    $(".mobileMenu").hide();
    ('body').css('overflow', 'auto');
});

$(".searchCat").on("click", function(){
    var cat = $(this).attr("data");
    $(document).find('.searchCat').removeClass("active");
    if (cat == 'buy'){
     $("#searchType").val(0);
 }
 else if (cat == 'rent'){
     $("#searchType").val(1);
 }
 else if (cat == 'offplan'){
     $("#searchType").val(2);
 }
 else {
     $("#searchType").val(0);
 }
 $(this).addClass("active");
});



$(document).ready(function() {
    $('.search-select').select2({
        minimumResultsForSearch: Infinity
    });
    $('.currencySelect').select2({
        minimumResultsForSearch: Infinity
    });
    $('.location-select').select2({

    });

    $('.recomended').select2({
        minimumResultsForSearch: Infinity
    });

    $('.langContainer .langItem').each(function(){
        $(this).on('click', function(){
            $('.langContainer .langItem').removeClass('active');
            $(this).addClass('active');
        });
    });

    var overlay = $('.overlay'),
    popup = $('.popup'),
    close = $('#close-popup');
    $('.show-popup').on('click', function(e){
        e.preventDefault();
        overlay.show();
        popup.toggleClass('popup-active');
        $('body').css('overflow', 'hidden');
    });

    overlay.on('click', function(){
        $(this).hide();
        popup.removeClass('popup-active');
        $('body').css('overflow', 'auto');
    });

    close.on('click', function(){
        overlay.hide();
        popup.removeClass('popup-active');
        $('body').css('overflow', 'auto');
    });

    if (popup.hasClass('popup-active')) {
        $('body').css('overflow', 'hidden');
    } else {
        $('body').css('overflow', 'auto');
    }


    $('.projectTopBtn a').each(function(){
        $(this).on('click', function(event){
            event.preventDefault();
            $('.projectTopBtn a').removeClass('active');
            $(this).addClass('active');
        })
    });


    $(".priceRange").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000000,
        from: 200000,
        to: 600000,
        grid: false
    });


});

