var dropdownButtons = [];

var elNavList = document.querySelector('.nav');

var addNewNavEl = (data) => {
  elNavList.innerHTML = '';

  for (var element of data) {
    var newLi = document.createElement('LI');
    var newLink = document.createElement('A');
    var newDiv = document.createElement('DIV');
    var newList = document.createElement('UL')
    var newButton = document.createElement('BUTTON');

    newLi.classList.add('js-el-new-li');

    newLink.textContent = element;
    newLink.href = '#';

    newButton.classList.add('menu-trigger', 'js-drop-down-btn');
    newButton.textContent = 'Add';
    dropdownButtons.push(newButton);

    newDiv.appendChild(newList);
    newDiv.appendChild(newButton);

    newLi.appendChild(newLink);
    newLi.appendChild(newDiv);

    elNavList.appendChild(newLi);
  }

  addDropdownEl();
}

var addDropdownEl = () => {
  for (let dropdownButton of dropdownButtons) {
    dropdownButton.addEventListener('click', (evt) => {
      var dropdownList = evt.target.parentElement.children[0];
      var elModal = elModalTemplate.cloneNode(true);

      var modalBg = elModal.querySelector('.modal-bg');
      modalBg.classList.add('bg-active');

      var modalClose = elModal.querySelector('.modal-close');
      modalClose.addEventListener('click', function () {
        modalBg.classList.remove('bg-active');
      });

      var modalForm = elModal.querySelector('.add-nav-form');
      modalForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        var modalInput = modalForm.querySelector('.new-nav-text-input');
        var inputText = modalInput.value.trim();

        var dropdownLi = document.createElement('LI');
        var dropdownLink = document.createElement('A');

        dropdownLink.textContent = inputText;
        dropdownLink.href = '#';

        dropdownLi.appendChild(dropdownLink);
        dropdownList.appendChild(dropdownLi);

        modalBg.classList.remove('bg-active');
        modalInput.value = '';
      });

      document.body.appendChild(modalBg);
    });
  }
}

addNewNavEl(navElements);
