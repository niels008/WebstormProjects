/*jslint browser: true devel: true*/
/*global $, jQuery, alert*/
$(document).ready(function() {
    $(".image-container div.more-views a").click(function() {
        $('.image-container div.more-views a').removeClass('active');
        $(this).addClass('active');
        imagetitle = $(this).attr("title");
        imagesrc = $(this).attr("href");
        $(".image-container .image-title").fadeOut(300, function() {
            $(".image-container .image-title").text(imagetitle);
        }).fadeIn(300);
        $(".image-container .image").fadeOut(300, function() {
            $(".image-container .image").children("img").attr("src", imagesrc);
        }).fadeIn(300);
        return false;
    });
});/**
 * Created by Niels on 26-10-2015.
 */
