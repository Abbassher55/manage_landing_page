//******************  Navbar ******************/
const menuBtn1 = document.getElementById("hamburger");
const menuBtn2 = document.getElementById("close-btn");
const mobileNav = document.getElementById("mobile-nav");
const backdrop = document.getElementById("backdrop");

function menuList() {
  mobileNav.classList.toggle("hidden");
  menuBtn1.classList.toggle("hidden");
  menuBtn2.classList.toggle("hidden");
  backdrop.classList.toggle("hidden");
}

menuBtn1.addEventListener("click", menuList);
menuBtn2.addEventListener("click", menuList);
backdrop.addEventListener("click", menuList);

//******************  Testimonials slider ******************/
const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

//******************  Footer Email Validation ******************/
document.getElementById("emailForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting

  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex pattern

  if (emailPattern.test(emailInput.value)) {
    emailError.classList.add("hidden"); // Hide error message
  } else {
    emailError.classList.remove("hidden");
    emailInput.classList.remove("text-secondary");
    emailInput.classList.add("border-2", "border-primary", "text-primary");
  }
});

document.getElementById("email").addEventListener("focus", function () {
  emailError.classList.add("hidden");
  const emailInput = document.getElementById("email");
  emailInput.classList.remove("border-2", "border-primary", "text-primary");
  emailInput.classList.add("text-secondary");
});
