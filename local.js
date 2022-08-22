// TOGGLE MENU
function toggleMenu() {
  var tableaux = $('.tableaux.section-container '),
      photo_series = $('.photo-series.section-container '),
      editorial = $('.editorial.section-container '),
      snapshots = $('.snapshots.section-container '),
      contact = $('.contact.section-container a.contact');
  
  $('.content .section-container').on('click', function() {
    $(this).toggleClass('show');
  })
  
  
  $('div.content').on('click', function() {
    if ($('.section-container').hasClass('show')) {
      $('.contact.section-container .menu').removeClass('show');
    }
  })
}




// WINDOW ON LOAD
window.onload = function() {
  // monotoneBreather('.loader', 2000);
  // removeLoader('.loader', 'no-opacity', 9000, 9400);
  toggleMenu();
}
