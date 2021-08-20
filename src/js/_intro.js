const intro = document.querySelector('.intro');

intro.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    link.blur();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = pageHeader.offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});
