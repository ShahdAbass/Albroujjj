jQuery(document).ready(function() {
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 220) {
            jQuery('.site-header').addClass('top-sticky-header');
            jQuery('.elementor-location-header').addClass('top-sticky-header');
        } else {
            jQuery('.site-header').removeClass('top-sticky-header');
            jQuery('.elementor-location-header').removeClass('top-sticky-header');
        }
    });
});