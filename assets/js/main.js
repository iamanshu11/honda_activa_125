
const stateCityMap = {
  maharashtra: ["Mumbai", "Pune", "Nagpur"],
  karnataka: ["Bengaluru", "Mysuru", "Hubli"],
  tamilnadu: ["Chennai", "Coimbatore", "Madurai"]
};

const stateSelect = document.getElementById('state');
const cityInput = document.getElementById('city');

stateSelect.addEventListener('change', function () {
  const selectedState = this.value;
  const cities = stateCityMap[selectedState] || [];

  // Create datalist for auto suggestions
  let dataListId = 'city-suggestions';
  let dataList = document.getElementById(dataListId);
  if (!dataList) {
    dataList = document.createElement('datalist');
    dataList.id = dataListId;
    document.body.appendChild(dataList);
  }

  // Clear previous options
  dataList.innerHTML = '';

  // Add new city options
  cities.forEach(city => {
    const option = document.createElement('option');
    option.value = city;
    dataList.appendChild(option);
  });

  cityInput.setAttribute('list', dataListId);
  cityInput.value = '';
});

 // Generate random alphanumeric captcha
 function generateCaptcha(length = 6) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let captcha = "";
  for (let i = 0; i < length; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
}

const captchaField = document.getElementById('generated-captcha');
const captchaInput = document.getElementById('captcha-input');
const captchaMessage = document.getElementById('captcha-message');

// Load captcha on page load
const newCaptcha = generateCaptcha();
captchaField.value = newCaptcha;

// Optional: Validate CAPTCHA on form submission
document.querySelector('form').addEventListener('submit', function (e) {
  if (captchaInput.value.trim().toUpperCase() !== captchaField.value.trim().toUpperCase()) {
    e.preventDefault();
    captchaMessage.textContent = "Incorrect captcha. Please try again.";
    captchaInput.classList.add("is-invalid");
  } else {
    captchaMessage.textContent = "";
    captchaInput.classList.remove("is-invalid");
  }
});

function hideMissedCallPopup() {
  document.getElementById('missed-call-popup').style.display = 'none';
}

function updateButtonTextForMobile() {
  if (window.innerWidth <= 767) {
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
      submitBtn.textContent = 'Submit';
    }
  }
}

window.addEventListener('load', updateButtonTextForMobile);
window.addEventListener('resize', updateButtonTextForMobile);
(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });





})();

