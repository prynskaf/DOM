
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
    ,
    {
        img: 'https://ntvb.tmsimg.com/assets/p15684_v_h8_ai.jpg?w=960&h=540',
        rereleaseYear: '1994',
        genre: 'uyuyu',
        title: 'Pulp Fiction',
        director: 'Quentin Tarantino',
        cast: ['John Travolta', 'Samuel L Jackson', 'Uma Thurman', 'Amanda Plummer'],
        youtubeLink: 'https://www.youtube.com/watch?v=TnI7fcP_Pnk&pp=ygUMUHVscCBGaWN0aW9u',
      }
  ];
  
  // iliteration from html
  const section = document.querySelector('.section');
  const card = document.querySelector('.card');
  const img = document.querySelector('.img')
  const releaseYear = document.querySelector('.releaseYear');
  const  genre = document.querySelector(".genre");
  const title = document.querySelector('.title');
  const director = document.querySelector('.director');
  const cast = document.querySelector('.cast');

 



  // function forclard list 
  const cardList = (section) => {

    // Create a new card element
    const card = document.createElement('div');
    card.className = 'card';
    // Append  card to the section
    section.appendChild(card);


    // creating a new div for img  inside the card the card div
    const img = document.createElement('div');
    // giving  a class name
    img.className = 'img';
    // appending the class name img into card
    card.appendChild(img);
    img.src = collection[0][1];

    
    
    //  creating a new div for buttton  inside the card the card div
    const btn = document.createElement('div');
    btn.classList = 'btn';
  
    // putting the nested btn into btn;
    btn.innerHTML = `
    <button class = 'releaseYear'>1970</button>
    <button class= 'genre'>Drama</button>
    `;
    // appending  btn with nested element into card 
    card.appendChild(btn);


    // creating info div which will containes tile class and director name
    const info = document.createElement('div');
    info.className = 'info';

    // putting the nested info into the div;
    info.innerHTML= `
     <h1 class="title">Name</h1>
     <p class= "director">jean-Didier Enroule</p>
    `;
     // appending  info with nested element into card 
     card.appendChild(info);


     //creat a new div for text into card 
     const text = document.createElement('div');

     // giving a class name to it
     text.className = "text";

     // puttinng the nested info into the div
     text.innerHTML = `
     <p class = "cast">Lorem ipsum dolor sit, amet consectetur 
     adipisicing elit. Quae inventore nisi, earum commodi amet 
     repellat ad 
     deleniti sapiente rem maiores!</p>
     `;
    // append the text with nested info into card 
    card.appendChild(text);

    
   
  };
  cardList(section);

  

console.log(collection[0]);