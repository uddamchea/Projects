const display = document.querySelector("#display-screen");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
  const button = event.target;
  const buttonText = button.textContent;

  if (buttonText === 'C') {
    display.textContent = '';
  } else if (buttonText === '<') {
    display.textContent = display.textContent.slice(0, -1);
  } else if (buttonText === '=') {
    const expression = display.textContent;
    const result = evaluateExpression(expression);
    display.textContent = result;
  } else if (button.id === 'divide') {
    display.textContent += '/';
  } else if (button.id === 'multiply') {
    display.textContent += '*';
  } else {
    display.textContent += buttonText;
  }
}

function evaluateExpression(expression) {
  let result = '';

  try {
    result = Function(`'use strict'; return (${expression})`)();
  } catch (error) {
    result = 'Error';
  }

  return result;
}
