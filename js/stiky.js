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

$(document).ready(function(){ irArriba(); }); //Hacia arriba

function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },20); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(20); }else{ $('.ir-arriba').slideUp(1); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },20); });
}