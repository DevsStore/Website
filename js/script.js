$(document).ready(()=>{
  var nav=$('.navbar');
  $(window).scroll(()=>{
    var scroll=$(window).scrollTop();
    if(scroll>=300){
      nav.addClass('change-color-nav');
    }else{
      nav.removeClass('change-color-nav');
    }
  });
  var $btnTop = $(".btn-top")
  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 20) {
      $btnTop.fadeIn();
    } else {
      $btnTop.fadeOut();
    }
  });

  $btnTop.on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 300);
  });

});
