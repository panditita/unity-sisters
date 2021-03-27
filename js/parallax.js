/**
 * This script adds the parallax effects to the Parallax Pro theme.
 *
 * @package Parallax\JS
 * @author StudioPress
 * @license GPL-2.0+
 */

jQuery(function ($) {
  // Enable parallax and fade effects on homepage sections.
  $(window).scroll(function () {
    scrolltop = $(window).scrollTop();
    scrollwindow = scrolltop + $(window).height();

   

$(window).scroll( function() {
    if( $(this).scrollTop() > 0 ) {
        show_logo();
        console.log('whats happening')
    }
    else {
		hide_logo();

    }
});

function show_logo() {
	$('.site-title a').addClass('logo-bg');
	$('.site-title a').removeClass('remove-logo');
	$('.site-title a').css('cssText', 'color: transparent !important');

    if ( $('.site-title a.logo-bg').offset().top < 10 ) {
		$('body').animate({ marginTop: 180 }, 400);
		$('.site-title a.logo-bg').animate({ marginTop: 0 }, 400);

    }
}

function hide_logo() {
	$('.site-title a').removeClass('logo-bg');
	$('.site-title a').addClass('remove-logo');
	$('.site-title a').css('cssText', 'color: #7f3e98 !important');

    if ( $('.site-title a.remove-logo').offset().top < 10 ) {
		$('body').animate({ marginTop: 100 }, 400);
        $('.site-title a.remove-logo').animate({ marginTop: -90 }, 400 );
    }

}


    if ($(".home-section-2").length) {
  
      sectiontwooffset = $(".home-section-2").offset().top;

      if (scrollwindow > sectiontwooffset) {
        // Enable parallax effect.
        backgroundscroll = scrollwindow - sectiontwooffset;
        $(".home-section-2").css(
          "backgroundPosition",
          "50% " + -(backgroundscroll / 6) + "px"
        );
      }
    }
    if ($(".home-section-3").length) {
      sectionthreeoffset = $(".home-section-3").offset().top;

      if (scrollwindow > sectionthreeoffset) {
        // Enable parallax effect.
        backgroundscroll = scrollwindow - sectionthreeoffset;
        $(".home-section-3").css(
          "backgroundPosition",
          "50% " + -(backgroundscroll / 6) + "px"
        );
      }
    }
    if ($(".home-section-4").length) {
      sectionfouroffset = $(".home-section-4").offset().top;

      if (scrollwindow > sectionfouroffset) {
        // Enable parallax effect.
        backgroundscroll = scrollwindow - sectionfouroffset;
        $(".home-section-4").css(
          "backgroundPosition",
          "50% " + -(backgroundscroll / 6) + "px"
        );
      }
    }

    if ($(".home-section-5").length) {
      sectionfiveoffset = $(".home-section-5").offset().top;

      if (scrollwindow > sectionfiveoffset) {
        // Enable parallax effect.
        backgroundscroll = scrollwindow - sectionfiveoffset;
        $(".home-section-5").css(
          "backgroundPosition",
          "50% " + -(backgroundscroll / 6) + "px"
        );
      }
    }
    if ($(".home-section-6").length) {
      sectionsixoffset = $(".home-section-6").offset().top;

      if (scrollwindow > sectionsixoffset) {
        // Enable parallax effect.
        backgroundscroll = scrollwindow - sectionsixoffset;
        $(".home-section-6").css(
          "backgroundPosition",
          "50% " + -(backgroundscroll / 6) + "px"
        );
      }
    }
  });
});
