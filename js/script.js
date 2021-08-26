$(document).ready(function() {
  // navigation scroll effect
  $(window).scroll(function() {
    if(scrollY > 95) {
      $(".menu").addClass("menu__scroll--gt");
    }else{
      $(".menu").removeClass("menu__scroll--gt");
    }
  })
  // scroll top button effect -- check to see if the window is top if not then display button
  $(window).scroll(function () {
    if($(this).scrollTop() > 100) {
      $("#scroll_top_btn").fadeIn("slow");
    }else {
      $("#scroll_top_btn").fadeOut("slow");
    }
  });
  // Click event to scroll to top
  $("#scroll_top_btn").click(function () {
    $('html, body').animate({scrollTop : 0},800);
    return false;
  })
  // slider
  $(".owl-carousel").owlCarousel({
      items:1,
      loop:true,
      nav:true,
      dots:true,
      autoplay:true,
      autoplaySpeed:1000,
      smartSpeed:1500,
      autoplayHoverPause:true,
      animateOut: 'slideOutDown',
      animateIn: 'pulse'
  });
  // typing animation
  var typed = new Typed(".typing", {
    strings: ["Mazeda Fabrics Ltd", "100% Export Orianted", "Your Trasted Partner"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  var typed = new Typed(".typing2", {
    strings: ["Contact Us" , "Have any questions?"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  })
})