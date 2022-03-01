$(function() {
  /* Menu Open title click animation Event */
  $('.title').click(function() {
    $(this).addClass('active');
    $(this).siblings('.title').removeClass('active');

    $(this).siblings('.title').children('.desc').stop().slideUp();
    $(this).children('.desc').stop().slideDown();
  })



  /* Slick */
  $('.slider__ratio, .slider__ratio-small').slick({
    arrows: true, //화살표
    dots: true, //인디케이트 해제
    fade: false, //페이드효과
    autoplay: true, //자동재생
    autoplaySpeed: 2000, //재생시간
    pauseOnHover: false,
    pauseOnFocus: false,
    infinite: true
  });

  function category(){
    $('.category__slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 10,
      slidesToScroll: 5,
      prevArrow: '<button class="slide-arrow prev-arrow">' + 
      '<svg width="32" height="32" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"><g fill="none" fill-rule="evenodd"><rect width="32" height="32" fill="#000" fill-opacity=".26" rx="16"></rect><path fill="#FFF" fill-rule="nonzero" d="M20 10.87l-1.5-1.54L12 16l6.5 6.67 1.5-1.54L15 16z"></path></g></svg>' +
      '</button>',
      nextArrow: '<button class="slide-arrow next-arrow">' + 
      '<svg width="32" height="32" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"><g fill="none" fill-rule="evenodd"><rect width="32" height="32" fill="#000" fill-opacity=".26" rx="16"></rect><path fill="#FFF" fill-rule="nonzero" d="M12 21.13l1.5 1.54L20 16l-6.5-6.67-1.5 1.54L17 16z"></path></g></svg>' +
      '</button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: "unslick"
            }
        ]
    });
  }

  $('.deal-items').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button class="slide-arrow prev-arrow">' + 
    '<svg class="inactive" width="40" height="40" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet"><g fill="none"><circle cx="20" cy="20" r="20" fill="#FFF" class="circle"></circle><path fill="#424242" d="M17 20l7.5 7.5-1.4 1.4-8.4-8.4-.5-.5.5-.5 8.4-8.4 1.4 1.4-7.5 7.5z" class="arrow"></path></g></svg>' +
    '</button>',
    nextArrow: '<button class="slide-arrow next-arrow">' + 
    '<svg class="inactive" width="40" height="40" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet"><g fill="none" transform="matrix(-1 0 0 1 40 0)"><circle cx="20" cy="20" r="20" fill="#FFF" class="circle"></circle><path fill="#424242" d="M17 20l7.5 7.5-1.4 1.4-8.4-8.4-.5-.5.5-.5 8.4-8.4 1.4 1.4-7.5 7.5z" class="arrow"></path></g></svg>' +
    '</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  });
  
  function today() {
    $('.today-items').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: '<button class="slide-arrow prev-arrow">' + 
      '<svg class="inactive" width="40" height="40" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet"><g fill="none"><circle cx="20" cy="20" r="20" fill="#FFF" class="circle"></circle><path fill="#424242" d="M17 20l7.5 7.5-1.4 1.4-8.4-8.4-.5-.5.5-.5 8.4-8.4 1.4 1.4-7.5 7.5z" class="arrow"></path></g></svg>' +
      '</button>',
      nextArrow: '<button class="slide-arrow next-arrow">' + 
      '<svg class="inactive" width="40" height="40" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet"><g fill="none" transform="matrix(-1 0 0 1 40 0)"><circle cx="20" cy="20" r="20" fill="#FFF" class="circle"></circle><path fill="#424242" d="M17 20l7.5 7.5-1.4 1.4-8.4-8.4-.5-.5.5-.5 8.4-8.4 1.4 1.4-7.5 7.5z" class="arrow"></path></g></svg>' +
      '</button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 798,
          settings: "unslick"
        }
      ]
    });
  }

  function honeymoon() {
    $('.honeymoon-items').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 2,
      prevArrow: '<button class="slide-arrow prev-arrow">' + 
      '<svg class="inactive" width="40" height="40" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet"><g fill="none"><circle cx="20" cy="20" r="20" fill="#FFF" class="circle"></circle><path fill="#424242" d="M17 20l7.5 7.5-1.4 1.4-8.4-8.4-.5-.5.5-.5 8.4-8.4 1.4 1.4-7.5 7.5z" class="arrow"></path></g></svg>' +
      '</button>',
      nextArrow: '<button class="slide-arrow next-arrow">' + 
      '<svg class="inactive" width="40" height="40" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet"><g fill="none" transform="matrix(-1 0 0 1 40 0)"><circle cx="20" cy="20" r="20" fill="#FFF" class="circle"></circle><path fill="#424242" d="M17 20l7.5 7.5-1.4 1.4-8.4-8.4-.5-.5.5-.5 8.4-8.4 1.4 1.4-7.5 7.5z" class="arrow"></path></g></svg>' +
      '</button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 798,
          settings: "unslick"
        }
      ]
    });
  }

  today();
  category();
  honeymoon();
  $(window).resize(function(){
      var $windowWidth = $(window).width();
      if ($windowWidth > 1024) {
        category();
      } else if ($windowWidth === 798) {
        today();
        honeymoon();
      }
  });

});