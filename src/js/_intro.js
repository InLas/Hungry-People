const intro = document.querySelector('.intro');

if (intro) {
  intro.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      link.blur();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);
      let topOffset = '';

      if (pageHeader.offsetHeight < 100) {
        topOffset = controls.offsetHeight;
      } else {
        topOffset = pageHeader.offsetHeight;
      }

      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
}