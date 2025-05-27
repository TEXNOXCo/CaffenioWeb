const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");


menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click ());

// Cierra el menu cuando se precione un navlink
navLinks.forEach(link => {
   link.addEventListener("click", () => menuOpenButton.click() )
});

// Poder hacer el swipe
const swiper = new Swiper('.slider-wrapper', { 
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  pagination: {
    el: '.swiper-pagination',
    clickable: true, 
    dynamicBullets:true,

  }, 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Hacerlo Responsivo
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }
});
 window.onload = function() {
    const logueado = localStorage.getItem('logueado') === 'true';
    const loginBtn = document.getElementById('login-button');
    const userIcon = document.getElementById('user-icon');

    if (logueado) {
      loginBtn.style.display = 'none';
      userIcon.style.display = 'block';
    } else {
      loginBtn.style.display = 'block';
      userIcon.style.display = 'none';
    }
  }; 

  window.onload = function () {
  const logueado = localStorage.getItem('logueado') === 'true';
  const loginItem = document.getElementById('menu-login');
  const userItem = document.getElementById('menu-user');

  if (logueado) {
    loginItem.style.display = 'none';
    userItem.style.display = 'inline-block';
  } else {
    loginItem.style.display = 'inline-block';
    userItem.style.display = 'none';
  }
};

function cerrarSesion() {
  localStorage.removeItem('logueado');
  localStorage.removeItem('usuario');
  window.location.reload();
}

