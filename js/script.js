const numberOfFilms = +prompt("Скільки фільмів Ви переглянули?", "0");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};