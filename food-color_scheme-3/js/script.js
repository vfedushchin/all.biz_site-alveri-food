	jQuery(document).ready(function() { 
	(function($){ //create closure so we can safely use $ as alias for jQuery
      $(document).ready(function(){
        var exampleOptions = {
          speed: 'fast'
        }
        // initialise plugin
        
        var example = $('#menu').superfish(exampleOptions);
      });

    })(jQuery);  

$( ".box-language a#hLng " ).click(function() {
  $( ".box-language ul" ).toggle( "slow", function() { 
    // Animation complete.
  });

  return false; 
});


$('.maxheight').matchHeight();


});  

   $(document).ready(function(){
 
        bindGrid();

    });

   function bindGrid()
{
 var view = $.totalStorage('display');
 //alert($.totalStorage());
 display(view);

 $(document).on('click', '#grid', function(e){
  e.preventDefault();
  display('grid');
 });

 $(document).on('click', '#list', function(e){
  e.preventDefault();
  display('list');
 });
}

        function listTabsAnimate(element){
  if(jQuery(element).length) {
    TweenMax.staggerFromTo(element, 0.3, {alpha: 0, rotationY:-90, ease:Power1.easeOut},{alpha: 1, rotationY:0, ease:Power1.easeOut}, 0.1);
  }
}

function display(view)
{
 if (view == 'list')
 {
  $('ul.products-grid').removeClass('grid').addClass('list row');
   
  $('.display').find('li#list').addClass('selected');
  $('.display').find('li#grid').removeAttr('class');
  listTabsAnimate('.products-grid li');
  $.totalStorage('display', 'list');
 }
 else 
 {
  $('ul.products-grid').removeClass('list').addClass('grid row');

  $('.display').find('li#grid').addClass('selected');
  $('.display').find('li#list').removeAttr('class');
  listTabsAnimate('.products-grid li');
  $.totalStorage('display', 'grid');
 } 
}



jQuery(function () {
 jQuery(window).scroll(function () {
  if (jQuery(this).scrollTop() > 100) {
   jQuery('#back-top').fadeIn();
  } else {
   jQuery('#back-top').fadeOut();
  }
 });

 // scroll body to 0px on click
 jQuery('#back-top a').click(function () {
  jQuery('body,html').stop(false, false).animate({
   scrollTop: 0
  }, 800);
  return false;
 });
});


jQuery(function(){

    jQuery('.box-content .b-left-submenu__link').on('click', function () {
       var type = $(this).attr('data-target');
     
      jQuery('.box-content li[data-toggle=' + type +']').toggle( function() {

      
      });

      $(this).find("i").toggleClass("fa-minus");

      return false;
     });



      jQuery('#menu .sf-menu').mobileMenu();

    });


$(document).ready(function(){
    jQuery('.box .box-category').find('li.parent').prepend('<i class="fa fa-angle-down"></i>');
    jQuery('.box .box-category li.parent i').on("click", function(){
    if (jQuery(this).hasClass('fa-angle-up')) { jQuery(this).removeClass('fa-angle-up').parent('li.parent').find('> ul').slideToggle(); } 
      else {
      jQuery(this).addClass('fa-angle-up').parent('li.parent').find('> ul').slideToggle();
      }
    });

    /************bx-slider***************/
   
  
    $('#image-additional').bxSlider({
      mode: 'vertical',
                pager: false,
                controls: true,
                slideMargin: 13,
                minSlides: 4,
                maxSlides: 4,
                slideWidth: 88,
                nextText: '<i class="fa fa-chevron-down"></i>',
                prevText: '<i class="fa fa-chevron-up"></i>',
                infiniteLoop: false,
                adaptiveHeight: true, 
                moveSlides: 1
      });


    $("#zoom_01").elevateZoom({gallery:'image-additional', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: true, zoomLens: false}); 
//pass the images to Fancybox 
$("#zoom_01").bind("click", function(e) {  
  var ez =   $('#zoom_01').data('elevateZoom'); 
  $.fancybox(ez.getGalleryList());
  return false;
});




});
 
/* Google Map
 ========================================================*/
$(document).ready(function () {
    var o = $('#google-map');
    if (o.length > 0){
      // alert(2);
        o.googleMap({
            styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
        });
    } 
});
 



function include(url){
  document.write('<script src="'+url+'"></script>');
  return false ;
}



   
        $(document).ready(function () {
           var o = $('.related-slider');
            if (o.length > 0) {
            o.owlCarousel({
                // Most important owl features
                items: 4,
                itemsCustom: false,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [980, 3],
                itemsTablet: [768, 2],
                itemsTabletSmall: false,
                itemsMobile: [479, 1],

                // Navigation
                pagination: false,
                navigation: true,
                navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']


            });
          }
        });

