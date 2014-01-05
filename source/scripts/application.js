//= require_tree ./plugins
//= require_self

$(function () {
    $(".rslides").responsiveSlides();

    jQuery("a[rel^='lightBox']").prettyPhoto({
        slideshow: 3000,
        show_title: false,
        overlay_gallery: false,
        social_tools: ''
    });
});
