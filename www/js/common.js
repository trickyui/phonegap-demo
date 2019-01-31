$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  $('#hamburger').on('click', function () {
    $('body').toggleClass('oh');
    $('.left-panel').toggleClass('open');
  });
});
