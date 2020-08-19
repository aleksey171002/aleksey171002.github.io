var swiperNews = new Swiper('.swiper-news-container', {
    slidesPerView: 'auto',
    speed: 600,
    scrollbar: {
        el: '.swiper-news-scrollbar',
    },
  });
var swiperProd = new Swiper('.swiper-prod-container', {
    slidesPerView: 1,
    speed: 600,
    navigation: {
        nextEl: '.button-after',
        prevEl: '.button-before',
    },
    on: {
        slideChange: function () {
            let index_currentSlide = swiperProd.realIndex;
            currentSlide = swiperProd.slides[index_currentSlide];
            
            $('.prod-slider-list li').each(function(index, element) {
                $(element).removeClass('active');
                if($(element).attr('data-type') == $(currentSlide).attr('data-type')) {
                    $(element).addClass('active');
                }
            })
            console.log($(currentSlide).attr('data-type'));
        },
    },
  });