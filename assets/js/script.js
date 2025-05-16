'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

/**
 * WhatsApp API integration for Book Now buttons
 */
document.addEventListener('DOMContentLoaded', function() {
  // For package Book Now buttons
  const bookNowButtons = document.querySelectorAll('.btn.btn-secondary');
  
  bookNowButtons.forEach(button => {
    if (button.textContent.trim() === 'Book Now') {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get package information from the parent card
        const packageCard = this.closest('.package-card');
        let packageName = '';
        let packagePrice = '';
        
        if (packageCard) {
          packageName = packageCard.querySelector('.card-title')?.textContent || 'Package';
          packagePrice = packageCard.querySelector('.price')?.textContent.trim() || '';
        }
        
        // Create WhatsApp message
        const message = `Hello, I would like to book the "${packageName}" package ${packagePrice}`;
        
        // Replace with your actual WhatsApp number
        const phoneNumber = '6281234567890'; // Change this to your WhatsApp number
        
        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        // Redirect to WhatsApp
        window.open(whatsappURL, '_blank');
      });
    }
  });
  
  // For navbar Book Now button
  const navbarBookNowBtn = document.querySelector('.header-bottom .btn.btn-primary');
  if (navbarBookNowBtn) {
    navbarBookNowBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Create WhatsApp message for general booking
      const message = 'Hello, I would like to book a tour package';
      
      // Replace with your actual WhatsApp number
      const phoneNumber = '6281234567890'; // Change this to your WhatsApp number
      
      // Create WhatsApp URL
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
      // Redirect to WhatsApp
      window.open(whatsappURL, '_blank');
    });
  }
});