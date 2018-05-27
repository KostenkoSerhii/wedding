import slick from 'slick-carousel';
export default function initSliders(windowWidth) {

  let btnNext = `<div class="btn-next"><?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 207 331" enable-background="new 0 0 207 331" xml:space="preserve">
<polygon points="7,24.4 27.7,5 199,165 27.7,325 7,305.7 157.5,165 "/>
</svg></div>`;
  let btnPrev = `<div class="btn-prev"><?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 207 331" enable-background="new 0 0 207 331" xml:space="preserve">
<polygon points="48.5,165 199,305.7 178.3,325 7,165 178.3,5 199,24.4 "/>
</svg></div>`;

  if (windowWidth <= 767) {
    $('.js-main-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      prevArrow: btnPrev,
      nextArrow: btnNext

    });

  }else{
    $('.js-main-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      asNavFor: '.js-nav-slider'
    });

    $('.js-nav-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.js-main-slider',
      dots: false,
      focusOnSelect: true
    });
  }

};
