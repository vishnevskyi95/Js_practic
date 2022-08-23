
let personalMovieDB = {
    count: 0,
    movies: {
        
    },
    actors: {

    },
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    rememberMyFilms: function () {
        let lastSeenMovie = '',
        ratingMovie = '';
        for (let i = 0; i < 2;) {
            lastSeenMovie = prompt("Один из последних просмотренных фильмов?", "");
                if (lastSeenMovie && lastSeenMovie.length <= 50 && lastSeenMovie.length >= 1) {
                    ratingMovie = prompt("На сколько оцените его?", "");
                    if (ratingMovie && ratingMovie.length <=50 && ratingMovie >= 1) {
                        i++;
                        personalMovieDB.movies[lastSeenMovie] = ratingMovie;
                    }
                }
        }
    },
    checkMyPersonalLevel: function () {
        if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
            console.log("Посмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы класический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; ){
            let favouriteGenre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
            if (favouriteGenre != '' && favouriteGenre != null) {
                personalMovieDB.genres[i] = favouriteGenre;
                i++;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    }
};
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.rememberMyFilms();
personalMovieDB.checkMyPersonalLevel();
personalMovieDB.writeYourGenres();