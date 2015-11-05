/**
 * Created by Niels on 28-10-2015.
 */
var main = function() {
    /* Push the body and the nav over by 285px over */
    $('.icon-menu').click(function() {
        $('.menu').animate({
            left: "0px"
        }, 200);

        $('body').animate({
            left: "280px"
        }, 200);
    });

    /* Then push them back */
    $('.icon-close').click(function() {
        $('.menu').animate({
            left: "-280px"
        }, 200);

        $('body').animate({
            left: "0px"
        }, 200);
    });
};


$(document).ready(main);