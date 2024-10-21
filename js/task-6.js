function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  boxesContainer.innerHTML = '';

  const elements = [];

  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = '5px';

    size += 10;
    elements.push(div);
  }

  boxesContainer.append(...elements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = parseInt(controls.value.trim());

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert('Please enter a number between 1 and 100');
  }

  controls.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);
