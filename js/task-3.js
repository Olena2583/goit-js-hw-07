const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  const trimmedInput = event.target.value.trim();

  if (trimmedInput === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = trimmedInput;
  }
});
