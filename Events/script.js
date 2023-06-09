const displayedsquareWrapper = document.querySelector('.displayedsquare-wrapper');
const log = document.querySelector('.log');
const ul = document.querySelector('ul');
const body = document.body;

const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
};

const clickOnSquare = (e) => {
  const color = e.target.classList[1];
  alert(`Clicked square color: ${color}`);
  logAction(`Clicked on ${color} square`);
};

const actionSquares = document.querySelectorAll('.actionsquare');
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
}

const handleKeyPress = (e) => {
  if (e.code === 'Space') {
    changePageBackgroundColor();
    logAction('Spacebar hit');
  } else if (e.key === 'l') {
    clearLog();
    logAction('Log cleared');
  } else if (e.key === 's') {
    clearSquares();
    logAction('Squares cleared');
  }
};

const changePageBackgroundColor = () => {
  const randomColor = getRandomColor();
  body.style.backgroundColor = randomColor;
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const clearLog = () => {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
};

const clearSquares = () => {
  displayedsquareWrapper.innerHTML = '';
};

const
