var dropdownButtons = [];

var elNavList = document.querySelector('.nav');

var addNewNavEl = (data) => {
  elNavList.innerHTML = '';

  for (var element of data) {
    var newLi = document.createElement('LI');
    var newLink = document.createElement('A');
    var newDiv = document.createElement('DIV');
    var newButton = document.createElement('BUTTON');

    newLi.classList.add('js-el-new-li');

    newLink.textContent = element;
    newLink.href = '#';

    newButton.classList.add('menu-trigger', 'js-drop-down-btn');
    newButton.textContent = 'Add';
    dropdownButtons.push(newButton);

    newDiv.appendChild(newButton);

    newLi.appendChild(newLink);
    newLi.appendChild(newDiv);

    elNavList.appendChild(newLi);
  }
}

addNewNavEl(navElements);


for (let dropdownButton of dropdownButtons) {
  dropdownButton.addEventListener('click', (evt) => {
    console.log(evt.target.parentElement.children[0]);
    onButtonClick();
  });
}
