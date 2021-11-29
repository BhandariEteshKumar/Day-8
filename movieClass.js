class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating === undefined ? "PG" : rating;
  }
}
let movie1 = new Movie("Eternals", "Marvel", "PG");
let movie2 = new Movie("Casino Royale", "Eon Productions", "PG13");
let movieArray = [];
movieArray.push(movie1, movie2);
function getPG(movies) {
  var arrayPG = movies.filter((movie) => {
    if (movie.rating === "PG") return movie;
  });
  return arrayPG;
}
let arr = getPG(movieArray);
console.log(arr);
