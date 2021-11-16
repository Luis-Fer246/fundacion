$(document).ready(function() {
    var altura = $('nav').offset().top;
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {   
            $('nav').removeClass('navv');      
            $('nav').addClass('stiky');
        }else{
            $('nav').removeClass('stiky');       
            $('nav').addClass('navv');
        }

    })
});