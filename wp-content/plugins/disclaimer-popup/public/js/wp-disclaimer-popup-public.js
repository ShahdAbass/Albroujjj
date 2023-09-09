jQuery(document).ready(function($) {

    if (document.getElementById("wp-disclaimer-popup") !== null) {
        var visited = Cookies.get('wp-disclamer-popup')

        if (visited == null) {
            setTimeout(function() {
                $('body').addClass('modal-wpdp');
                //console.log('clclcl');
                $.magnificPopup.open({
                    //closeOnBgClick: false,
                    // showCloseBtn: false,
                    //enableEscapeKey: false,

                    modal: true,
                    items: {
                        src: '#wp-disclaimer-popup',
                        type: 'inline'
                    },

                    alignTop: true,
                    overflowY: 'scroll',
                    fixedContentPos: true,

                });
            }, 400);
        }

    }



    // fare cose jQuery quando DOM è pronto
    $('#wpdp-close').click(function() {
        $('#wp-disclaimer-popup').magnificPopup('close');
        $('body').removeClass('modal-wpdp');
    });
});