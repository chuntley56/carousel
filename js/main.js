var $carousel = $('.carousel');
var $slidesNumber = $carousel.children('li').length;
var $btn = $('.btn');

$(document).ready(function () {
  $carousel.width(300 * $slidesNumber);

  $btn.click(function (e) {
    var target = $(event.target);
    target.is('.btn-prev') ? console.log('prev') : console.log('next');
    e.preventDefault();
  })


});
// $carousel.addClass('prev')
