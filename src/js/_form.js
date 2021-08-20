const formSelectors = document.querySelectorAll('.form__selector');

if (formSelectors) {
  formSelectors.forEach(formSelector => {
    const inputSelector = formSelector.querySelector('.form__input--selector');
    const formDrop = formSelector.querySelector('.form__drop');
    const formSelects = formDrop.querySelectorAll('.form__select');
    const inputHidden = formSelector.querySelector('input');

    inputSelector.addEventListener('click', (evt) => {
      evt.preventDefault();
      inputSelector.blur();


      if (!(formDrop.classList.contains('form__drop--active'))) {
        formDrop.classList.add('form__drop--active');
        inputSelector.classList.add('form__input--active');

        document.addEventListener('click', function (e) {
          const target = e.target;
          const its_inputSelector = target == inputSelector || inputSelector.contains(target);
          const its_formDrop = target == formDrop;

          if (!its_inputSelector && !its_formDrop) {
            formDrop.classList.remove('form__drop--active');
            inputSelector.classList.remove('form__input--active');
          }
        });

        formSelects.forEach(formSelect => {
          formSelect.addEventListener('click', () => {
            let formSelectResult = formSelect.dataset.set;
            inputSelector.textContent = formSelectResult;
            inputHidden.value = formSelectResult;
            formDrop.classList.remove('form__drop--active');
            inputSelector.classList.remove('form__input--active');
          })
        });
      } else {
        formDrop.classList.remove('form__drop--active');
        inputSelector.classList.remove('form__input--active');
      }
    });
  });
}
