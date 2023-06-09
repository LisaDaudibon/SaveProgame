
export const Home = (argument = '') => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');


    const displayResults = (articles) => {
      const resultsContent = articles.map((article) => (
        `<article class="cardGame">
          <div class="container-fluid py-2">
            <div class="card card-bis ">
              <div class="card-body">
              <p class=text-center>${article.name}</p>
              <p>Date de sortie : ${article.released}</p>
              
              <a href="#pagedetail/${article.id}" class="btn btn-info justify-content-center">Plus de détails</a>
              </div>
          </div>
          </div>
        </article>`
      ));



      const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = `
        <div class="results-container">
          ${resultsContent.join("\n")}
        </div>
      `;
    }

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results)
        });
    };

    const API_KEY = "1fb43d4e40d4404c9ae1168602d9da7b"

    fetchList(`https://api.rawg.io/api/games?key=${API_KEY}`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">Hey, this page is a PageList template, about : ${argument}</div>
      </section>
    `;

    preparePage();
  };

  render();
};
