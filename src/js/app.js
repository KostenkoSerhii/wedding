import sayHello from './lib/sayHello.js';

import fullpageInit from './components/fullpage.js';
import initSliders from './components/sliders.js';
import timezz from './lib/jquery.timezz-es2015.js';
import formSubmit from './components/form.js';
import popup from './components/popup.js';
import gmap from './components/gmap.js';

sayHello();

$(document).ready(function() {
  let windowWidth = $(window).width();
  if(windowWidth > 1200) {
    fullpageInit();
  }
  initSliders(windowWidth);


  if(windowWidth < 768) {
    $('.js-timer').timezz({
      'date' : 'July 21, 2018 13:30:00',
      'days' : 'дн.',
      'hours' : 'год.',
      'minutes' : 'хв.',
      'seconds' : 'сек.',
      'tagNumber' : 'span',
      'tagLetter' : 'i',
      'stop' : false
    });
  }else{
    $('.js-timer').timezz({
      'date' : 'July 21, 2018 13:30:00',
      'days' : 'днів',
      'hours' : 'годин',
      'minutes' : 'хвилин',
      'seconds' : 'секунд',
      'tagNumber' : 'span',
      'tagLetter' : 'i',
      'stop' : false
    });
  };
  formSubmit();
  popup();
  gmap();


});
