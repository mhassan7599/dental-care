const accordions = document.querySelectorAll(".faq-accordion");

function toggleAccordion() {
  const parentItem = this.closest(".accordion-item");
  const content = parentItem.querySelector(".content");

  // Toggle the 'active' class on the accordion item
  parentItem.classList.toggle("active");

  // Toggle the 'active' class on the content to show/hide it
  content.classList.toggle("active");

  // Toggle the plus and minus icons inside the clicked accordion item
  const plusIcon = parentItem.querySelector(".plus-icon");
  const minusIcon = parentItem.querySelector(".minus-icon");
  plusIcon.classList.toggle("active");
  minusIcon.classList.toggle("active");
}

accordions.forEach(accordion => accordion.addEventListener("click", toggleAccordion));

// slider
$(document).ready(function() {
  $(".testimonial_slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    // Add more settings as needed
  });
});


// Get the elements needed
const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-list');

// Toggle the mobile menu on button click
menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('show');
});

