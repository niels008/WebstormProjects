$(document).ready( function() {

    // wanneer je op open klinkt word de popup geopend
    $('#openpopup').click( function() {
        loadPopupBox();
        $("#rotatelalalala").css('-webkit-transform', 'rotateY(-190deg)')
    });

    $('#closepopup').click( function() {
        unloadPopupBox();
    });

    $('#mainpage').click( function() {
        unloadPopupBox();
    });

    function unloadPopupBox() {    // TO Unload the Popupbox
        $('#popup_box').fadeOut("slow");
        $("#mainpage").css({ // this is just for style
            "opacity": "1"
        });
    }

    function loadPopupBox() {    // To Load the Popupbox
        $('#popup_box').fadeIn("slow");
        $("#mainpage").css({ // this is just for style
            "opacity": "0.3"
        });
    }
    $(document).ready(function(){
        // set up hover panels
        // although this can be done without JavaScript, we've attached these events
        // because it causes the hover to be triggered when the element is tapped on a touch device
        $('.hover').hover(function(){
            $(this).addClass('flip');
        },function(){
            $(this).removeClass('flip');
        });
    });



});/**
 * Created by Niels on 5-11-2015.
 */
