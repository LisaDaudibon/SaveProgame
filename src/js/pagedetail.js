

export const PageDetail = (argument) => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");

    const displayGame = (gameData) => {
      const { name, released, description } = gameData;
      const articleDOM = document.querySelector(".page-detail ");
      articleDOM.querySelector("h3.title").innerHTML = name;
      articleDOM.querySelector("p.release-date span").innerHTML = released;
      articleDOM.querySelector("p.description").innerHTML = description;
    };

    const API_KEY = ""

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
      <section class="page-detail">
        <div class="container-fluid ">
          <div class="card card-bis">
            <div class="card-body">
              <h3 class="title"></h3>
              <p class="release-date">Release date : <span></span></p>
              <p class="description"></p>
            </div>
          </div>
        </div>
      </section>
    `;

    preparePage();
  };

  render();
};