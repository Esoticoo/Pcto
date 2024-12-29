/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 
window.addEventListener('scroll', function() {
    const webchat = document.querySelector('.webchat');
    const scrollPosition = window.scrollY;
    
    // Show chat when user has scrolled 300px
    if (scrollPosition > 300) {
        webchat.classList.add('visible');
    } else {
        webchat.classList.remove('visible');
    }
});
window.addEventListener('load', function() {
    const webchat = document.querySelector('.webchat');
    
    // Funzione per controllare se è un dispositivo mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      
      // Modifica la soglia di scroll per mobile
      const scrollThreshold = isMobile ? 100 : 300;
      
      if (scrollPosition > scrollThreshold) {
        webchat.classList.add('visible');
      } else {
        webchat.classList.remove('visible');
      }
    });
  });
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


window.addEventListener('scroll', function() {
    var navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-shrink');
    } else {
        navbar.classList.remove('navbar-shrink');
    }
});

let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");
window.addEventListener('scroll',function(){
    var value = window.scrollY;
    bg.style.top = value * 0.5 + 'px' ;
    moon.style.left = -value * 0.5 + 'px' ;
    mountain.style.top = -value * 0.15 + 'px' ;
    road.style.top = value * 0.15 + 'px' ;
    text.style.top = value * 1 + 'px' ;
} )