
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
  
  // 
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

    
    
    //  creating a new div for buttton  inside the card the card div
    const btn = document.createElement('div');
    btn.classList = 'btn';
  

    // putting the nested btn into btn;
    btn.innerHTML = `
    <button class = 'releaseYear'>1970</button>
    <button class= 'genre'> Drama</button>
    `

    // appending ghe btn with nested element into card 
    card.appendChild(btn);
  };
  const section = document.querySelector('.section');
  const card = document.querySelector('.card');
  const img = document.querySelector('.img')
  const releasedYear = document.querySelector('.releasedYear');
  const  genre = document.querySelector(".genre")
  cardList(section);

  

