

export const PageDetail = (argument) => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");
    const articleDOM = document.querySelector(".page-detail .article");

    const displayGame = (gameData) => {
      const { name,
         released,
         description, 
         rating, 
         background_image, 
         platforms, 
         genres, 
         developers,
         tags,
         website,
         ratings_count
        } = gameData;
      articleDOM.querySelector("h1.title").innerHTML = name;
      articleDOM.querySelector("p.release-date span").innerHTML = released;
      articleDOM.querySelector("p.description").innerHTML = description;
      articleDOM.querySelector("p.rating span").innerHTML = rating;
      
      articleDOM.querySelector("p.ratings_count span").innerHTML = ratings_count;
      console.log(gameData.games)
  
      // Plateformes 
      const platformsHTML = platforms.map(gamePlatform =>
      `<span class="platform">${gamePlatform.platform.name}</span>`)
      .join(", ");
      articleDOM.querySelector("p.platforms span").innerHTML = platformsHTML;

      // Genres 
      const genresHTML = genres.map(genresGame =>
        `<span class="genres">${genresGame.name}</span>`)
        .join(", ");
        articleDOM.querySelector("p.genres span").innerHTML = genresHTML;

      // Développeurs 
      const developersHTML = developers.map(devs =>
        `<span class="developers">${devs.name}</span>`)
        .join(", ");
        articleDOM.querySelector("p.developers span").innerHTML = developersHTML;

      // Tags 
      const tagsHTML = tags.map(tagsGame =>
        `<span class="tags">${tagsGame.name}</span>`)
        .join(", ");
        articleDOM.querySelector("p.tags span").innerHTML = tagsHTML;

      // Site web
      const websiteHTML = `<a href="${website}" target="_blank">${website}</a>` //target_blank ouvre l'élément dans une nouvelle fenêtre, self dans la même
      articleDOM.querySelector("p.website span").innerHTML = websiteHTML;
    };

    const API_KEY = "1fb43d4e40d4404c9ae1168602d9da7b"

    const fetchGame = (url, argument) => {
      fetch(`${url}/${argument}?key=${API_KEY}`)
        .then((response) => response.json())
        .then((responseData) => {
          displayGame(responseData);
        });
    };

    fetchGame('https://api.rawg.io/api/games', cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <article>
      <div class=container-fluid>
      <section class="page-detail">
          <div class ="card"> 
          
            <div class="article">
            
              <h1 class="title"></h1>
              <p class="release-date">Date sortie : <span></span></p>
              <p class="description"></p>
              <p class="platforms">Disponible sur : <span></span></p>
              <p class="rating">Note : <span></span></p>
              <p class="ratings_count">Nombre notes : <span></span></p>
              <p class="genres">Type jeu : <span></span></p>
              <p class="developers">Développeurs : <span></span></p>
              <p class="tags">Tags : <span></span></p>
              <p class="website">Site officiel : <span></span></p>
            </div>
            </div>
          </section>
        
        </div>
      </article>`

    preparePage();
  };

  render();
};
