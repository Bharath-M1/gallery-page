$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoWidth: true,
  autoHeight: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true
});
$('.play').on('click', function () {
  owl.trigger('stop.owl.autoplay')
})
$('.stop').on('click', function () {
  owl.trigger('play.owl.autoplay', [1000])
})