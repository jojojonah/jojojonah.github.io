// CHECK IMAGE SIZE
function checkImageSize() {
  var content_image = $('body > .content img'),
      content_image_width = content_image.width(),
      content_image_height = content_image.height();
  
  content_image.each(function() {
    if ($(this).width() > $(this).height()) {
      $(this).parent().removeClass('portrait');
      $(this).parent().addClass('landscape');
    }

    if ($(this).height() > $(this).width()) {
      $(this).parent().removeClass('landscape');
      $(this).parent().addClass('portrait');
    }
  });
}




// HIDE SECTION CONTAINER
function hideSectionContainers() {
  $('body > .content .section-container').removeClass('show');
  $('body > .content .section-container.home').addClass('show');
}




// TOGGLE MENU
function toggleMenu() {
  var menu_button = $('.header > .menu > button.menu'),
      dropdown = $('.header > .menu > .dropdown'),
      dropdown_buttons = $('.header > .menu > .dropdown button'),
      dropdown_buttons_text = dropdown_buttons.text(),
      home_button = $('.header > .menu .dropdown .home'),
      home_section_container = $('body > .content .section-container.home'),
      tableaux_button = $('.header > .menu .dropdown .tableaux'),
      tableaux_section_container = $('body > .content .section-container.tableaux'),
      photo_series_button = $('.header > .menu .dropdown .photo-series'), 
      photo_series_section_container = $('body > .content .section-container.photo-series'),
      editorial_button = $('.header > .menu .dropdown .editorial'),
      editorial_section_container = $('body > .content .section-container.editorial'),
      snapshots_button = $('.header > .menu .dropdown .snapshots'),
      snapshots_section_container = $('body > .content .section-container.snapshots'),
      paintings_button = $('.header > .menu .dropdown .paintings'),
      paintings_section_container = $('body > .content .section-container.paintings'),
      design_button = $('.header > .menu .dropdown .design'),
      design_section_container = $('body > .content .section-container.design'),
      info_button = $('.header > .menu .dropdown .info'),
      info_section_container = $('body > .content .section-container.info'),
      header_title = $('.header > .title'),
      header_title_text = header_title.text(),
      content_container = $('body > .content'),
      content_sections = $('body > .content .section-container'),
      mail_button = $('body > .content .section-container.info a.mail');
  
  
  menu_button.on('click', function() {
    menu_button.toggleClass('rotate');
    dropdown.toggleClass('show');
    dropdown_buttons.on('click', function() {
      menu_button.removeClass('rotate');
      dropdown.removeClass('show');
      content_sections.removeClass('show');
      header_title.text($(this).text());
      content_container.scroll();
      
      
      if (header_title.hasClass('short')) {
        header_title.removeClass('short');
      }
      
      if ($(this).hasClass('home')) {
        $('body > .content .section-container.home').addClass('show');
      }
      
      if ($(this).hasClass('tableaux')) {
        $('body > .content .section-container.tableaux').addClass('show');
        header_title.addClass('short');
      }
      
      if ($(this).hasClass('photo-series')) {
        $('body > .content .section-container.photo-series').addClass('show');
      }
      
      if ($(this).hasClass('editorial')) {
        $('body > .content .section-container.editorial').addClass('show');
      }
      
      if ($(this).hasClass('snapshots')) {
        $('body > .content .section-container.snapshots').addClass('show');
      }
      
      if ($(this).hasClass('paintings')) {
        $('body > .content .section-container.paintings').addClass('show');
      }
      
      if ($(this).hasClass('design')) {
        header_title.text("Home");
        $('body > .content .section-container.home').addClass('show');
      }
      
      if ($(this).hasClass('info')) {
        $('body > .content .section-container.info').addClass('show');
      }
      
      checkImageSize();
    })
    
    content_container.on('click', function() {
      menu_button.removeClass('rotate');
      dropdown.removeClass('show');
    })
  })
  
  
  mail_button.on('click', function() {
     $('body > .content .section-container.info .menu').toggleClass('show');
  })
}




// WINDOW ON LOAD
window.onload = function() {
  monotoneBreather('.loader', 2000);
  removeLoader('.loader', 'no-opacity', 9000, 9400);
    // setTimeout(hideSectionContainers, 8900);
  checkImageSize();
  toggleMenu();
}
