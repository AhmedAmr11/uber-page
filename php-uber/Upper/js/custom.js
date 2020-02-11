/* global  $, window */

$(function () {
     
    'use strict';
    // SLIDER HEIGHT

    var winH    = $(window).height(),
        upperH  = $('.upper-bar').innerHeight(),
        navH    = $('.navbar').innerHeight();
    
    $('.slider, .carousel-inner').height(winH - (upperH + navH));
});