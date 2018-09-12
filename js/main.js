var $carousel = $('.carousel');
var $slidesNumber = $carousel.children('li').length;
var $btn = $('.btn');

$(document).ready(function () {
  $carousel.width(300 * $slidesNumber);

  $btn.click(function (e) {
    var target = $(event.target);
    target.is('.btn-prev') ? $carousel.addClass('prev') : $carousel.addClass('next');
    target.is('.btn-prev') ? $carousel.children('li:last').prependTo($carousel) : $carousel.children('li:first').appendTo($carousel);
    e.preventDefault();
  })


});
// $carousel.addClass('prev')
