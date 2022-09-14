// ------------------ slideshow ------------------
'use strict';

$(function() {
    //settings for slider

    var currentSlide = 1;
    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');

    setInterval(function(){
      console.log('test1')
      $slideContainer.animate({'margin-left': '-=100vw'},1000, function() {
        currentSlide++;
        if (currentSlide === $slides.length) {
            currentSlide = 1;
            $slideContainer.css('margin-left', 0);
        }
      });
    },5000);
  });