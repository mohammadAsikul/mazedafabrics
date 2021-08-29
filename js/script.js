$(document).ready(function() {
  // navigation scroll effect
  $(window).scroll(function() {
    if(scrollY > 95) {
      $(".menu").addClass("menu__scroll--gt");
    }else{
      $(".menu").removeClass("menu__scroll--gt");
    }
  });
  // home scroll effect
  $("#home_link").click(function () {
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  // about us scroll 
  $("#about_us_link").click(function () {
    $('html, body').animate({scrollTop : 575},800);
    return false;
  });
  // machine_link scroll 
  $("#machine_link").click(function () {
    $('html, body').animate({scrollTop : 1140},800);
    return false;
  });
  // products scroll 
  $("#products_link").click(function () {
    $('html, body').animate({scrollTop : 1500},800);
    return false;
  });
  // service scroll 
  $("#services_link").click(function () {
    $('html, body').animate({scrollTop : 1915},800);
    return false;
  });
  // gallary scroll 
  $("#gallary_link").click(function () {
    $('html, body').animate({scrollTop : 2400},800);
    return false;
  });
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
  // slider for banner section
  $(".owl-one").owlCarousel({
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
  // slider for machinaries and utilites
  $(".owl-two").owlCarousel({
    items:4,
    loop:true,
    nav:true,
    dots:true,
    autoplay:true,
    autoplaySpeed:1000,
    smartSpeed:1500,
    autoplayHoverPause:true,
    margin: 10
  });
  // slider for products
  $(".owl-three").owlCarousel({
    items:4,
    loop:true,
    nav:true,
    dots:true,
    autoplay:true,
    autoplaySpeed:1000,
    smartSpeed:1500,
    autoplayHoverPause:true,
    margin: 10
  });
  // slider for services
  $(".owl-four").owlCarousel({
    items:4,
    loop:true,
    nav:true,
    dots:true,
    autoplay:true,
    autoplaySpeed:1000,
    smartSpeed:1500,
    autoplayHoverPause:true,
    margin: 10
  });
  // slider for gallary
  $(".owl-five").owlCarousel({
    items:4,
    loop:true,
    nav:true,
    dots:true,
    autoplay:true,
    autoplaySpeed:1000,
    smartSpeed:1500,
    autoplayHoverPause:true,
    margin: 10
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