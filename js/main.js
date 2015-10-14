$(function() {
    var pull = $('.nav-action');
    menu = $('.principal');
    menuHeight = menu.height();
    social = $('.social');

   $(pull).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
});

$(window).resize(function(){
        var w = $(window).width();
        if(w > 992 ) {
        menu.removeAttr('style');
        }
    });
});


$(function(){  
  $('.carousel-educacion').bxSlider({
    slideWidth: 400,
    minSlides: 1,
    maxSlides: 3,
    pager: false,
  });
});


$(function() {
    var submenu = $('nav li a');
    $(submenu).on('click', function(e) {
        e.preventDefault();
        $(this).parent().find('.submenu').toggleClass('visible');
    });
});


$(function(){
    $('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
        scrollTop: target.offset().top
        }, 500);
    }

    });
});
   
$(function(){         
  $('#video-gallery').royalSlider({
    arrowsNav: false,
    fadeinLoadedSlide: true,
    controlNavigationSpacing: 0,
    controlNavigation: 'thumbnails',

    thumbs: {
      autoCenter: false,
      fitInViewport: true,
      orientation: 'horizontal',
      spacing: 0,
      paddingBottom: 0
    },
    keyboardNavEnabled: true,
    imageScaleMode: 'fill',
    imageAlignCenter:true,
    slidesSpacing: 0,
    loop: false,
    loopRewind: true,
    numImagesToPreload: 3,
    video: {
      autoHideArrows:true,
      autoHideControlNav:false,
      autoHideBlocks: true
    }, 
    autoScaleSlider: true, 
    autoScaleSliderWidth: 960,     
    autoScaleSliderHeight: 750,

    /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
    imgWidth: 640,
    imgHeight: 360

  });
});