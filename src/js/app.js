import sayHello from './lib/sayHello.js';

import fullpageInit from './components/fullpage.js';
import initSliders from './components/sliders.js';

sayHello();

$(document).ready(function() {
  let windowWidth = $(window).width();
  if(windowWidth > 1200) {
    fullpageInit();
  }
  initSliders(windowWidth);

});
