// Array of learners' names
const learners = [
  "Learner 1",
  "Learner 2",
  "Learner 3",
  "Learner 4",
  "Learner 5",
  "Learner 6",
  "Learner 7",
  "Learner 8",
  "Learner 9",
  "Learner 10",
];

// Function to generate a random background color
function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Function to create a new section for each learner
function createSection(name) {
  const section = document.createElement("section");
  const color = getRandomColor();
  section.style.backgroundColor = color;
  section.style.color = colorBrightness(color) < 128 ? "white" : "black";

  const paragraph = document.createElement("p");
  paragraph.textContent = name;
  section.appendChild(paragraph);

  return section;
}

// Function to calculate color brightness
function colorBrightness(color) {
  const [r, g, b] = color.match(/\w\w/g).map(x => parseInt(x, 16));
  return (r * 299 + g * 587 + b * 114) / 1000;
}

// Shuffle the array of learners using the Fisher-Yates algorithm
learners.sort(() => Math.random() - 0.5);

// Get the <article> element
const article = document.querySelector("article");

// Create a section for each learner and append it to the article
learners.forEach(learner => {
  const section = createSection(learner);
  article.appendChild(section);
});
