var navElements = ['home', 'about', 'work process'];
var elAddBtn = document.querySelector('.menu-trigger');
var elModalTemplate = document.querySelector('#modal-template').content;

var onButtonClick = () => {
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
    navElements.push(inputText);

    addNewNavEl(navElements);

    modalBg.classList.remove('bg-active');
    modalInput.value = '';
  });

  document.body.appendChild(modalBg);
}

elAddBtn.addEventListener('click', onButtonClick);
