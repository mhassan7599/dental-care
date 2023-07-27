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
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    // Add more settings as needed
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const menuList = document.querySelector(".menu-list");
  const cancelBtn = document.querySelector(".cancel-btn");

  menuBtn.addEventListener("click", function () {
    menuList.classList.add("show");
  });

  cancelBtn.addEventListener("click", function () {
    menuList.classList.remove("show");
  });
});
