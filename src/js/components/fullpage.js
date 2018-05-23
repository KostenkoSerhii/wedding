import fullpage from 'fullpage.js';
export default function fullpageInit() {
  $('.js-section-wrapper').fullpage({
  	// menu: '.js-nav',
  	navigation: true,
  	anchors: ['page1', 'page2'],
  	// lockAnchors: true
  });
  console.log(1);
};
