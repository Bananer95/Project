//  Reviews  https://kenwheeler.github.io/slick/

$(document).ready(function () {
  let slider = $('#reviewsSlider');

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrow: false,
    dots: true,
    adaptiveHeight: false,
  });

  //  Header fixed

  let header = $('#header');
  let firstscreen = $('#firstscreen');
  let firstscreenH = firstscreen.innerHeight();
  let scrollPos = $(window).scrollTop();

  checkScroll(scrollPos, firstscreenH);

  $(window).on('scroll resize', function () {
    firstscreenH = firstscreen.innerHeight();
    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, firstscreenH);
  });

  function checkScroll(scrollPos, firstscreenH) {
    if (scrollPos > firstscreenH) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  }

  // Navigation scroll

  $('[data-scroll]').on('click', function (event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    nav.removeClass('show');

    $('html, body').animate(
      {
        scrollTop: elementOffset - 73,
      },
      700
    );
  });

  //  Burger Button
  let nav = $('#nav');
  let navToggle = $('#navToggle');
  let first = $('#first');

  navToggle.on('click', function (event) {
    event.preventDefault();

    nav.toggleClass('show');
  });
});
