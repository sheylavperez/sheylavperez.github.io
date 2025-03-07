// (function () {
//   "use strict";

//   /** Easy selector helper function */
//   const select = (el, all = false) => {
//     el = el.trim();
//     return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
//   };

//   /** Typing Effect */
//   const roleElement = document.getElementById("role-text");
//   const roles = ["Product Designer", "Graphic Designer", "Web Developer", "Entrepreneur"];
//   let roleIndex = 0;
//   let charIndex = 0;
//   let isDeleting = false;
//   let typingSpeed = 100;
//   let deletingSpeed = 50;
//   let delayBeforeDelete = 1000; // Pause before deleting

//   function typeEffect() {
//     const currentRole = roles[roleIndex];

//     if (!isDeleting) {
//       // Typing logic
//       roleElement.textContent = currentRole.substring(0, charIndex + 1);
//       charIndex++;

//       if (charIndex === currentRole.length) {
//         isDeleting = true;
//         setTimeout(typeEffect, delayBeforeDelete);
//       } else {
//         setTimeout(typeEffect, typingSpeed);
//       }
//     } else {
//       // Deleting logic
//       roleElement.textContent = currentRole.substring(0, charIndex - 1);
//       charIndex--;

//       if (charIndex === 0) {
//         isDeleting = false;
//         roleIndex = (roleIndex + 1) % roles.length; // Move to next role
//         setTimeout(typeEffect, 500); // Short pause before typing next role
//       } else {
//         setTimeout(typeEffect, deletingSpeed);
//       }
//     }
//   }

  typeEffect(); // Start the animation

  /** Other UI functionalities (Navbar, Scrolling, etc.) */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      navbarlink.classList.toggle(
        "active",
        position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight
      );
    });
  };

  window.addEventListener("load", navbarlinksActive);
  document.addEventListener("scroll", navbarlinksActive);

  /** Mobile nav toggle */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  on("click", ".mobile-nav-toggle", function () {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

})();
