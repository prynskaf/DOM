// Create a Calculator class
class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear(); // Clear the calculator
  }

  // Clear the calculator values
  clear() {
    this.currentOperand = ''; // Clear the current operand
    this.previousOperand = ''; // Clear the previous operand
    this.operation = undefined; // Clear the operation
  }

  // Delete the last character from the current operand
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  // Append a number or a parenthesis to the current operand
  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return; // Prevent multiple decimal points
    if (number === '(') {
      this.currentOperand = this.currentOperand.toString() + '('; // Append opening parenthesis
    } else if (number === ')') {
      this.currentOperand = this.currentOperand.toString() + ')'; // Append closing parenthesis
    } else {
      this.currentOperand = this.currentOperand.toString() + number.toString(); // Append number
    }
  }

  // Choose the operation to perform
  chooseOperation(operation) {
    if (this.currentOperand === '') return; // Do nothing if there is no current operand
    if (this.previousOperand !== '') {
      this.compute(); // Compute the previous operation if there is a previous operand
    }
    this.operation = operation; // Set the operation
    this.previousOperand = this.currentOperand; // Set the previous operand to the current operand
    this.currentOperand = ''; // Clear the current operand for the next input
  }

  // Perform the computation
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return; // Do nothing if the operands are not valid numbers
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      case '%':
        computation = (prev / 100) * current; // Calculate percentage
        break;
      default:
        return;
    }
    this.currentOperand = computation; // Set the current operand to the computed value
    this.operation = undefined; // Clear the operation
    this.previousOperand = ''; // Clear the previous operand
  }

  // Get the display number with proper formatting
  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 }); // Format integer digits with commas
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`; // Return the number with decimal digits
    } else {
      return integerDisplay; // Return the number without decimal digits
    }
  }
     // Update the display with the current and previous operands
  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}


// Select all number buttons
const numberButtons = document.querySelectorAll('[data-number]')
// Select all operation buttons
const operationButtons = document.querySelectorAll('[data-operation]')
// Select the equals button
const equalsButton = document.querySelector('[data-equals]')
// Select the delete button
const deleteButton = document.querySelector('[data-delete]')
// Select the all clear button
const allClearButton = document.querySelector('[data-all-clear]')
// Select the element to display the previous operand
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
// Slect the element to display the current operand
const currentOperandTextElement = document.querySelector('[data-current-operand]')
// Create a new Calculator object with the selected display elements
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


// Add click event listeners to number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.dataset.number;
    calculator.appendNumber(button.innerText, number);
    calculator.updateDisplay();
  });
});

// Add click event listeners to operation buttons
operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

// Add click event listener to equals button
equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

// Add click event listener to all clear button
allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

// Add click event listener to delete button
deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})

// Add keydown event listener to the document
document.addEventListener('keydown', function (event) {
  let patternForNumbers = /[0-9]/g;
  let patternForOperators = /[+\-*\/]/g
  
  // Handle number keys
  if (event.key.match(patternForNumbers)) {
    event.preventDefault();
    calculator.appendNumber(event.key)
    calculator.updateDisplay()
  }
  
  // Handle decimal point key
  if (event.key === '.') {
    event.preventDefault();
    calculator.appendNumber(event.key)
    calculator.updateDisplay()
  }
  
  // Handle operator keys
  if (event.key.match(patternForOperators)) {
    event.preventDefault();
    calculator.chooseOperation(event.key)
    calculator.updateDisplay()
  }
  
  // Handle Enter or equals key
  if (event.key === 'Enter' || event.key === '=') {
    event.preventDefault();
    calculator.compute()
    calculator.updateDisplay()
  }
  
  // Handle Backspace key
  if (event.key === "Backspace") {
    event.preventDefault();
    calculator.delete()
    calculator.updateDisplay()
  }
  
  // Handle Delete key
  if (event.key == 'Delete') {
    event.preventDefault();
    calculator.clear()
    calculator.updateDisplay()
  }
});
