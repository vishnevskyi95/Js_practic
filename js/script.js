const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
var personalMovieDB = {
    count: numberOfFilms,
    movies: {
        
    },
    actors: {

    },
    genres: [],
    privat: false
};
var lastSeenMovie = prompt("Один из последних просмотренных фильмов?", "");
personalMovieDB.movies[lastSeenMovie] = prompt("На сколько оцените его?", "");
lastSeenMovie = prompt("Один из последних просмотренных фильмов?", "");
personalMovieDB.movies[lastSeenMovie] = prompt("На сколько оцените его?", "");
console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);