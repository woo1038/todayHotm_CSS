(function() {
  const body = document.body;
  const header = document.querySelector('header');
  const trigger = document.querySelector('.trigger');
  const open_menu = document.querySelector('.open-menu');
  const menu_layout = document.querySelector('.menu__layout');
  const main_menu = document.querySelector('.main-nav');
  const sub_menu = document.querySelector('.sub-nav');

  
  trigger.addEventListener('mouseup', () => {
    open_menu.classList.add('active');
  });
  open_menu.addEventListener('click', () => {
    open_menu.classList.remove('active');
  })
  menu_layout.addEventListener('click', (e) => {
    e.stopPropagation();
  })


  /* Media Size Scroll header bar Event */
  function pc_scrollevent() {
    window.__scrollPosition = document.documentElement.scrollTop || 0;

    document.addEventListener('scroll', function() {
      let _documentY = document.documentElement.scrollTop;
      let _direction =   _documentY - window.__scrollPosition
      if(_direction >= 0) {
        sub_menu.style.transform = 'translateY(-50px)'
      } else {
        sub_menu.style.transform = 'translateY(0px)';
      }
  
      window.__scrollPosition = _documentY;
    });
  }

  function phone_scrollevent() {
    window.__scrollPosition = document.documentElement.scrollTop || 0;

    document.addEventListener('scroll', function() {
      let _documentY = document.documentElement.scrollTop;
      let _direction =   _documentY - window.__scrollPosition
      if(window.pageYOffset > 80) {
        if(_direction >= 0) {
          main_menu.style.transform = 'translateY(-50px)';
          sub_menu.style.transform = 'translateY(-90px)';
        } else {
          main_menu.style.transform = 'translateY(0px)';
          sub_menu.style.transform = 'translateY(0px)';
        }
      }
  
      window.__scrollPosition = _documentY;
    });
  }

  if(window.innerWidth > 798) {
    pc_scrollevent();

    main_menu.addEventListener('mouseover', function() {
      sub_menu.style.transform = 'translateY(0px)';
    })
    sub_menu.addEventListener('mouseover', function() {
      sub_menu.style.transform = 'translateY(0px)';
    })
    main_menu.addEventListener('mouseleave', function() {
        sub_menu.style.transform = 'translateY(-50px)'
    })
    sub_menu.addEventListener('mouseleave', function() {
      sub_menu.style.transform = 'translateY(-50px)'
    })
  }
  if(window.innerWidth <= 798) {
    {
      phone_scrollevent();
    }
  }

  window.addEventListener('resize', function() {

    if(window.innerWidth > 750 || window.innerWidth < 800 || window.innerWidth > 1000 || window.innerWidth < 1050 ) {
      location.reload();
    }
    if(window.innerWidth > 798) {
      pc_scrollevent();
    } else if (window.innerWidth <= 798) {
      phone_scrollevent();
    }
  })

})();