import slick from 'slick-carousel';
export default function initSliders() {
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

};
