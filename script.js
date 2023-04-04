
const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');
const display = calculator.querySelector('.calculator-screen');


keys.addEventListener('click', event => {
  if (!event.target.matches('button')) return;

  const key = event.target;
  const keyValue = key.value;
  const displayValue = display.value;


  if (key.classList.contains('number')) {
    if (displayValue === '0') {
      display.value = keyValue;
    } else {
      display.value = displayValue + keyValue;
    }
  }
  if (key.classList.contains('zero-btn')) {
    if (displayValue === '0') {
      display.value = keyValue;
    } else {
      display.value = displayValue + keyValue;
    }
  }

 
  if (key.classList.contains('operator')) {
    calculator.dataset.operator = key.value;
    calculator.dataset.previousValue = displayValue;
    display.value = '0';
  }


  if (key.classList.contains('decimal')) {
    if (!displayValue.includes('.')) {
      display.value = displayValue + keyValue;
    }
  }


  if (key.classList.contains('all-clear')) {
    display.value = '0';
  }

  
  if (key.classList.contains('percentage')) {
    display.value = displayValue / 100;
  }

  // Handle equal key
  if (key.classList.contains('equal-sign')) {
    const previousValue = calculator.dataset.previousValue;
    const operator = calculator.dataset.operator;
    const currentValue = displayValue;

    if (!previousValue || !operator) return;

    display.value = calculate(previousValue, operator, currentValue);
    calculator.removeAttribute('data-previous-value');
    calculator.removeAttribute('data-operator');
  }
});

// Define the calculate function
const calculate = (n1, operator, n2) => {
  let result = '';

  if (operator === '+') {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === '-') {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === '*') {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === '/') {
    result = parseFloat(n1) / parseFloat(n2);
  }

  return result;
};
