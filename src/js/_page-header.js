const mainNav = document.querySelector('.main-nav');
const navToogle = document.querySelector('.controls__toogle');
const mainNavLinks = document.querySelectorAll('.main-nav__link');
const pageHeader = document.querySelector('.page-header');
const logo = document.querySelector('.controls__logo');
const controls = document.querySelector('.controls');

if (mainNav) {
  mainNav.classList.remove('main-nav--no-js');
  navToogle.classList.remove('controls__toogle--no-js');

  navToogle.addEventListener('click', () => {
    navToogle.classList.toggle('controls__toogle--closed');
    navToogle.classList.toggle('controls__toogle--open');
    mainNav.classList.toggle('main-nav--closed');
  });

  mainNavLinks.forEach(mainNavLink => {
    mainNavLink.addEventListener('click', (evt) => {
      evt.preventDefault();

      let href = mainNavLink.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      let topOffset = '';

      if (pageHeader.offsetHeight < 100) {
        topOffset = controls.offsetHeight;
      } else {
        topOffset = pageHeader.offsetHeight;
      }

      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      mainNavLink.blur();

      navToogle.classList.remove('controls__toogle--open');
      mainNav.classList.add('main-nav--closed');

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });

  window.addEventListener('scroll', function () {
    if (this.pageYOffset > 0) {
      pageHeader.classList.add('page-header--scroll');
      mainNav.classList.add('main-nav--scroll');
      logo.classList.add('controls__logo--scroll');
    } else {
      pageHeader.classList.remove('page-header--scroll');
      mainNav.classList.remove('main-nav--scroll');
      logo.classList.remove('controls__logo--scroll');
    }
  });
}