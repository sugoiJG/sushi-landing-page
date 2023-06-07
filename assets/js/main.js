/* CREATE DYNAMIC NAVIGATION */
const sections = Array.from(document.getElementsByTagName("section"));
const menu = document.getElementById('nav-menu');

// Create the dynamic navigation menu
sections.forEach((section) => {
  const listItem = document.createElement('li');
  const listItemLink = document.createElement('a');
  const sectionId = section.getAttribute('id');
  const sectionTitle = section.getAttribute('data-nav');

  listItemLink.textContent = sectionTitle;
  listItemLink.setAttribute('href', `#${sectionId}`);
  listItem.appendChild(listItemLink);
  menu.appendChild(listItem);
});

/* SHOW MENU */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* MENU SHOW */
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  });
}

/* MENU HIDDEN */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* REMOVE MENU MOBILE */
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
  navMenu.classList.remove('show-menu');
};
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', linkAction);
});

/* CHANGE BACKGROUND HEADER */
const scrollHeader = () => {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  window.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
};
window.addEventListener('scroll', scrollHeader);

/* SHOW SCROLL UP */
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  window.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/* SCROLL SECTIONS ACTIVE LINK */
const scrollSections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  scrollSections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);

/* DARK LIGHT THEME */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose a theme
if (selectedTheme) {
  // If the validation is fulfilled, we set the theme and the current icon that the user chose
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Toggle the dark / light theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true // Animations repeat
});

sr.reveal(`.home__img, .newsletter__container,
           .footer__logo, .footer__description,
           .footer__content, .footer__info`);
sr.reveal(`.home__data`, { origin: 'bottom' });
sr.reveal(`.about__data, .recently__data`, { origin: 'left' });
sr.reveal(`.about__img, .recently__img`, { origin: 'right' });
sr.reveal(`.popular__card`, { interval: 100 });
