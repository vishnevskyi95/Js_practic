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
// Первый способ
var lastSeenMovie = '',
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
// Второй способ
/* for (let i = 0; i < 2;) {
   var lastSeenMovie = prompt("Один из последних просмотренных фильмов?", ""),
        ratingMovie = prompt("На сколько оцените его?", "");
    if (lastSeenMovie && ratingMovie && lastSeenMovie.length <= 50 && ratingMovie.length <= 50 && lastSeenMovie.length >= 1 && ratingMovie >= 1) {
            personalMovieDB.movies[lastSeenMovie] = ratingMovie;
    } else {
         i--;
    }
} */
console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);
if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
    console.log("Посмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы класический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}



/* const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
let j = 0;
for (let i = 0; i < arr.length; i++){
    console.log(i);
    for (; j < arr.length;){
        result[j] = arr[i];
        console.log(j);
        j++;
        break;
    }
}
console.log(arr);
console.log(result); */
/* const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let i = 0; i < data.length; i++){
    if (typeof (data[i]) == "string") {
        data[i] += ' - done';
    } else {
        data[i] *= 2;
    }
} */
/* const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
let j = data.length - 1;
for (let i = 0; i < data.length; i++){
    console.log(i);
    for (; j >= 0;) {
        result[i] = data[j];
        console.log(j);
        j--;
        break;
    }
} */
/* const lines = 5;
let result = '';
let k = 5;
for (let i = 0; i <= lines; i++){ 
     for (;k > 0;k--){
        result += " ";
        } 
     for (let j = 0; j <= i; j++){
        if (j > 0) {
            for (let l = 0; l < j; l++) {
                result += "*";
            }
        }
        k = 5 - i;
    }
    result += "*";
    result += "\n";
    
} 
console.log(result);*/
/* const lines = 5;
let result = '';
for (let i = 0; i <= lines; i++){ //колво рядов
    for (let j = 0; j <= i; j++){
        if (j === 0) {  //для первого ряда
            for (let l = 0; l < lines - i; l++) {
                result += " ";
            }
            result += "*";
        } else {
            result += "**";
        }
    }
    result += "\n";
}
console.log(result); */
function returnNeighboringNumbers(num) {
    let arr = [num - 1, num, num + 1];
    return arr;
}
function getMathResult(base, iter) {
    let result = '';
    if (typeof (iter) === typeof (result) || iter <= 0) {
        result = base;
        return result;
    } else {
        for (let i = 1; i <= iter; i++){
        result += base * i;
            if (i != iter) {
                result += '---';
            }
        }
        return result; 
    }
}
console.log(getMathResult(10, 0));
