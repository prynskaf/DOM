
import { collection } from './collection.js';

  
  // SELECTING ALL  ELEMENTS
  const section = document.querySelector('.section');
  const card = document.querySelector('.card');
  const image = document.querySelector('.image')
  const releaseYear = document.querySelector('.releaseYear');
  const  genre = document.querySelector(".genre");
  const title = document.querySelector('.title');
  const director = document.querySelector('.director');
  const cast = document.querySelector('.cast');
  const youtubeLink = document.querySelector('.youtubeLink');

 // function for creating card list
const cardList = (section, data) => {
  
  // Iterate over each item in the collection data
  data.forEach(item => {
    
    // Create a new card element
    const card = document.createElement('div');
    card.className = 'card';
    section.appendChild(card);

    // creating a new div for img inside the card div
    const image = document.createElement('div');
    image.className = 'image';
    // Set the image source
    image.style.backgroundImage = `url(${item.img})`;
    card.appendChild(image);

    // creating a new div for buttons inside the card div
    const btn = document.createElement('div');
    btn.classList = 'btn';
    btn.innerHTML = `
      <button class='releaseYear'>${item.rereleaseYear}</button>
      <button class='genre'>${item.genre}</button>
    `;
    card.appendChild(btn);

    // creating info div which will contain title class and director name
    const info = document.createElement('div');
    info.className = 'info';
    info.innerHTML = `
      <h1 class="title">${item.title}</h1>
      <p class="director">${item.director}</p>
    `;
    card.appendChild(info);

    // create a new div for text into card
    const text = document.createElement('div');
    text.className = "text";
    text.innerHTML = `
      <p class="cast">${item.cast.join(', ')}</p>
    `;
    card.appendChild(text);

    // creating a line 
    const line = document.createElement('div');
    line.className = "line";
    card.appendChild(line);

    // creating div for youtube
    const youtubeLink = document.createElement('div');
    youtubeLink.className = 'youtubeLink';
    youtubeLink.innerHTML = `
      <a href="${item.youtubeLink}" target="_blank"><i class="bi bi-youtube"></i></a>
    `;
    card.appendChild(youtubeLink);
  });
};

cardList(section, collection);



