// Array of learners' names
const learners = ["Learner 1", "Learner 2", "Learner 3", "Learner 4", "Learner 5"];

// Function to generate a random background color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to create a new section for each learner
function createSection(name) {
  const section = document.createElement("section");
  const color = getRandomColor();
  section.style.backgroundColor = color;

  // Determine text color based on background color
  const isDark = colorBrightness(color) < 128;
  section.style.color = isDark ? "white" : "black";

  const paragraph = document.createElement("p");
  paragraph.textContent = name;
  section.appendChild(paragraph);

  return section;
}

// Function to calculate color brightness
function colorBrightness(color) {
  const rgb = parseInt(color.substring(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  return (r * 299 + g * 587 + b * 114) / 1000;
}

// Function to shuffle the array using the Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Get the <article> element
const article = document.querySelector("article");

// Shuffle the array of learners
shuffleArray(learners);

// Create a section for each learner and append it to the article
learners.forEach(function (learner) {
  const section = createSection(learner);
  article.appendChild(section);
});
