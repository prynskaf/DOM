
// collection data
const collection = [
    {
      img: 'https://ntvb.tmsimg.com/assets/p15684_v_h8_ai.jpg?w=960&h=540',
      rereleaseYear: '1994',
      genre: 'Drama',
      title: 'Pulp Fiction',
      director: 'Quentin Tarantino',
      cast: ['John Travolta', 'Samuel L Jackson', 'Uma Thurman', 'Amanda Plummer'],
      youtubeLink: 'https://www.youtube.com/watch?v=TnI7fcP_Pnk&pp=ygUMUHVscCBGaWN0aW9u',
    }
  ];
  
  // iliteration from html
  const section = document.querySelector('.section');
  const card = document.querySelector('.card');
  const img = document.querySelector('.image')
  const releaseYear = document.querySelector('.releaseYear');
  const  genre = document.querySelector(".genre");
  const title = document.querySelector('.title');
  const director = document.querySelector('.director');
  const cast = document.querySelector('.cast');
  const youtubeLink = document.querySelector('.youtubeLink');

 



  // function forclard list 
  const cardList = (section) => {

    // Create a new card element
    const card = document.createElement('div');
    card.className = 'card';
    section.appendChild(card);


    // creating a new div for img  inside the card the card div
    const image = document.createElement('div');
    image.className = 'image';
    card.appendChild(image);
   

    //  creating a new div for buttton  inside the card the card div
    const btn = document.createElement('div');
    btn.classList = 'btn';
    btn.innerHTML = `
    <button class = 'releaseYear'>1970</button>
    <button class= 'genre'>Drama</button>
    `;
    card.appendChild(btn);


    // creating info div which will containes tile class and director name
    const info = document.createElement('div');
    info.className = 'info';
    info.innerHTML= `
     <h1 class="title">Name</h1>
     <p class= "director">jean-Didier Enroule</p>
    `;
     card.appendChild(info);


     //creat a new div for text into card 
     const text = document.createElement('div');
     text.className = "text";
     text.innerHTML = `
     <p class = "cast">Lorem ipsum dolor sit, amet consectetur 
     adipisicing elit. Quae inventore nisi, earum commodi amet 
     repellat ad 
     deleniti sapiente rem maiores!</p>
     `;
    card.appendChild(text);

    
    // creating a line 
    const line = document.createElement('div');
    line.className = "line";
    card.appendChild(line);

    //creating div for youtube 
    const youtubeLink = document.createElement('div');
    youtubeLink.className = 'youtubeLink';
    youtubeLink.innerHTML = `
    <i class="bi bi-youtube"></i>
    `;

    card.appendChild(youtubeLink);
   
  };
  cardList(section);
