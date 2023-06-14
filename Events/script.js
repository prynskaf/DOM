// Selecting all  the necessary elements from the DOM
const displayedsquareWrapper = document.querySelector('.displayedsquare-wrapper');
const log = document.querySelector('.log');
const ul = document.querySelector('ul');
const body = document.body;

// Storing  the initial time when the page loads
const _initTime = Date.now();

// Calculating and format the elapsed time
const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
};

// Handle the click event on the generated squares
const clickOnSquare = (e) => {
  const color = e.target.classList[1];
  alert(`Clicked square color: ${color}`);
  logAction(`Clicked on ${color} square`);
};

// Add click event listeners to the action squares
const actionSquares = document.querySelectorAll('.actionsquare');
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
}

// Handle the keypress event on the body element
const handleKeyPress = (e) => {
  // Check if the Space key was pressed
  if (e.code === 'Space') {
    changePageBackgroundColor();
    logAction('Spacebar hit');
  }
  // Check if the 'l' key was pressed
  else if (e.key === 'l') {
    clearLog();
    logAction('Log cleared');
  }
  // Check if the 's' key was pressed
  else if (e.key === 's') {
    clearSquares();
    logAction('Squares cleared');
  }
};

// Add the keypress event listener to the body element
body.addEventListener('keypress', handleKeyPress);

// Change the background color of the whole page to a random color
const changePageBackgroundColor = () => {
  const randomColor = getRandomColor();
  body.style.backgroundColor = randomColor;
};

// Generate a random color in hexadecimal format
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}; 

// Clear the log by removing all li elements
const clearLog = () => {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
};

// Clear the generated squares by removing their content
const clearSquares = () => {
  displayedsquareWrapper.innerHTML = '';
};

// Log an action by adding a new li element to the log
const logAction = (action) => {
  const li = document.createElement('li');
  li.textContent = `${action} (${getElapsedTime()})`;
  ul.appendChild(li);
};
