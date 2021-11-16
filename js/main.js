  $('.slider').slick({
    cssEase: 'linear',
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 8000,
  });
  $('.sale-slider').slick({
    cssEase: 'linear',
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  });
$(".star").rateYo({
    rating: 4.6,
    spacing: "4px",
    readOnly: true,
    starWidth: "16px",
    normalFill: "#001",
    ratedFill: "#E5E5E5"
  });