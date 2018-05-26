import fullpage from 'fullpage.js';
export default function fullpageInit() {
  $('.js-section-wrapper').fullpage({
  	// menu: '.js-nav',
  	navigation: true,
  	anchors: [
  	'page1',
  	'page2',
  	'page3',
  	'page4',
  	'page5',
  	'page6',
  	'page7',
  	'page8',
  	'page9',
  	'page10'
  	],
  	// lockAnchors: true
  });
  console.log(1);
};
