$(document).ready(function () {
  $('.button').on('click', function () {
    $('.content').toggleClass('isOpen');
    $('.projectText').toggleClass('isOpen');
    $('.title').toggleClass('isOpen');
  });
});