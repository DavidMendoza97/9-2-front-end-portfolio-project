addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  const navBar = document.getElementById("navBar");
  const searchBar = document.getElementById("searchBar");
  const displayAnime = document.getElementById("display-anime");

  fetch("https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0")
    .then((animes) => animes.json())
    .then((animes) => {
      animes.data.forEach((anime) => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        let img = document.createElement("img");
        let dateStart = document.createElement('p')
        let dateEnd = document.createElement('p')
        let statusP = document.createElement('p')
        img.setAttribute("src", anime.attributes.posterImage.small);
        img.setAttribute("alt", `photo of ${anime.attributes.canonicalTitle}`)
        displayAnime.append(article);
        h3.textContent = anime.attributes.canonicalTitle;
        dateStart.textContent= anime.attributes.startDate[0]
        article.append(h3);
        article.prepend(img);
        article.append(dateStart)
        console.log(anime);
      });
    });
});
// going to add a ul element so i could add data from the api to the ul so it could look clean and with remove decoration it could display good