$(document).ready(()=>{
  var nav=$('.navbar');
  $(window).scroll(()=>{
    var scroll=$(window).scrollTop();
    if(scroll>=300){
      nav.addClass('change-color-nav');
    }else{
      nav.removeClass('change-color-nav');
    }
  })
});
