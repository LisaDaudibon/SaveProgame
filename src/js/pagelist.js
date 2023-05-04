

export const PageList = (argument = "", searchType = "search") => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");

    const displayResults = (articles) => {
      const resultsContent = articles.map(
        (article) =>
          `<div class="container-fluid">
          <div class="card h-100 p-3">
            <img src="${article.background_image}" class="card-img-top" alt="${
            article.name}" style="max-height: 300px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">${article.name}</h5>
              <p class="card-text">${article.platforms
                .map((platform) => {
                  switch (platform.platform.name) {
                    case "Linux":
                      return 'Linux';
                    case "Mobile":
                      return 'Mobile';
                    case "PlayStation 4":
                      return 'PlayStation 4';
                    case "Nintendo Switch":
                      return 'Nintendo Switch';
                    case "Windows":
                      return 'Windows';
                    case "Xbox 360":
                      return 'Xbox';
                  }
                })
                .join(" ")}</p>
              <a href="#pagedetail/${article.id}" class="btn btn-primary">Détails</a>
            </div>
            </div>
        </div>`
      );

      const resultsContainer = document.querySelector(".page-list .articles");
      resultsContainer.innerHTML = `
        <div class="results-container">
          ${resultsContent.join("\n")}
        </div>`;
    };

    const API_KEY = ""

    const fetchList = (url, argument, searchType) => {
      const finalURL = argument ? `${url}&${searchType}=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results);
        });
    };

    const baseUrl = `https://api.rawg.io/api/games?key=${API_KEY}`;
    fetchList(baseUrl, cleanedArgument, searchType);
  };

  const render = () => {
    pageContent.innerHTML = `
        <section class="page-list">
          <div class="articles">Loading...</div>
        </section>
      `;

    preparePage();
  };

  render();
};
