fetch("https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0")
  .then((anime) => anime.json())
  .then((anime) => console.log(anime));
