$(document).ready(function() {
$('.fade').slick({
  slidesToShow: 3,
  slidesToScroll: 3
});

$('.js-add-slide').on('click', function() {
  slideIndex++;
  $('.fade').slick('slickAdd','' + slideIndex + '');
});

$('.js-remove-slide').on('click', function() {
  $('.fade').slick('slickRemove',slideIndex - 1);
  if (slideIndex !== 0){
    slideIndex--;
  }
});

});