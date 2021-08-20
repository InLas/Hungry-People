const menuBtns = document.querySelectorAll('.controls-menu__button');

if (menuBtns) {
  const menuItems = document.querySelectorAll('.dish-menu__item');

  menuBtns.forEach(menuBtn => {
    menuBtn.addEventListener('click', () => {

      menuBtns.forEach(menuBtn => {
        menuBtn.classList.remove('controls-menu__button--active');
      });

      menuBtn.classList.add('controls-menu__button--active');
      menuBtn.blur();

      let menuBtnCurrent = menuBtn.dataset.menu;

      menuItems.forEach(menuItem => {
        menuItem.classList.remove('dish-menu__item--active')

        if (menuBtnCurrent === menuItem.dataset.menu_select) {
          menuItem.classList.add('dish-menu__item--active')
        }
      });
    });
  });
}