addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  const navBar = document.getElementById("navBar");
  const searchBar = document.getElementById("searchBar");
  const displayAnime = document.getElementById("display-anime");

  fetch("https://api.jikan.moe/v4/anime")
    .then((animes) => animes.json())
    .then((animes) => {
      animes.data.forEach((anime) => {
        animeCard(anime);
        // console.log(anime);
      });
    });

  const animeCard = (anime) => {
    let article = document.createElement("article");
    let h3 = document.createElement("h3");
    let img = document.createElement("img");
    let statusP = document.createElement("p");
    let p = document.createElement("p");
    let animeRun = document.createElement("p");

    img.setAttribute("src", anime.images.jpg.image_url);
    img.setAttribute("alt", `photo of ${anime.title}`);
    h3.textContent = anime.title;
    p.textContent = displayAnime.append(article);
    animeRun.textContent = anime.aired.string;
    statusP.textContent = anime.status;
    article.prepend(img);
    article.append(h3);
    article.append(p);
    h3.append(animeRun);
    h3.append(statusP);

    
  };

  // const tvShows = (anime) => {
  //   let animeShows = anime.filter((anime) => anime.type == "TV");

  //   let article = document.createElement("article");
  //   let h3 = document.createElement("h3");
  //   let img = document.createElement("img");
  //   let statusP = document.createElement("p");
  //   let p = document.createElement("p");
  //   let animeRun = document.createElement("p");

  //   img.setAttribute("src", animeShows.images.jpg.image_url);
  //   img.setAttribute("alt", `photo of ${animeShows.title}`);
  //   h3.textContent = animeShows.title;
  //   p.textContent = displayAnime.append(article);
  //   animeRun.textContent = animeShows.aired.string;
  //   statusP.textContent = animeShows.status;
  //   article.prepend(img);
  //   article.append(h3);
  //   article.append(p);
  //   h3.append(animeRun);
  //   h3.append(statusP);
  // };
});
