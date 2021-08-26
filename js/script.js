$(document).ready(function() {
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
      // animateOut: 'slideOutDown',
      // animateIn: 'pulse'
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