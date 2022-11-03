$(document).ready(function () {
  $('html, body').animate({ scrollTop: '0px' }, 100);


  $(window).scroll(function (event) {
    var height = ($('.wrapper').height() - $(window).height()) / 4;
    var scroll = $(window).scrollTop() / height * 135;
    // console.log(scroll);
    // console.log(height);

    if (scroll >= 0 && scroll <= 180) {
      $(".section--one").css('transform', 'rotate(' + scroll + 'deg)');
      $(".section--two").css('transform', 'rotate(' + (scroll - 180) + 'deg)');
      $(".section--two").removeClass('section--l').addClass('section--r');
    }
    if (scroll > 180) {
      $(".section--one").css('opacity', '0');
    }
    else {
      $(".section--one").css('opacity', '1');
    }
    if (scroll > 180 && scroll <= 360) {
      $(".section--two").removeClass('section--r').addClass('section--l');
      $(".section--three").removeClass('section--r').addClass('section--l');
      $(".section--two").css('transform', 'rotate(-' + (scroll - 180) + 'deg)');
      $(".section--three").css('transform', 'rotate(-' + (scroll) + 'deg)');
    }
    if (scroll > 360) {
      $(".section--two").css('opacity', '0');
    }
    else {
      $(".section--two").css('opacity', '1');
    }
    if (scroll > 360 && scroll <= 540) {
      $(".section--three").removeClass('section--l').addClass('section--r');
      $(".section--three").css('transform', 'rotate(' + (scroll - 360) + 'deg)');
      $(".section--four").css('transform', 'rotate(' + (scroll - 180) + 'deg)');
    }
    if (scroll > 540) {
      $(".section--three").css('opacity', '0');
    }
    else {
      $(".section--three").css('opacity', '1');
    }
  });

});