let numberOfFilms;
function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();
var personalMovieDB = {
    count: numberOfFilms,
    movies: {
        
    },
    actors: {

    },
    genres: [],
    privat: false
};
function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}
showMyDB();
// Первый способ
function rememberMyFilms() {
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
}
rememberMyFilms();
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


function checkMyPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
    console.log("Посмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы класический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}
}
checkMyPersonalLevel();
function writeYourGenres() {
    for (let i = 0; i < 3; ){
        let favouriteGenre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
        if (favouriteGenre != '' && favouriteGenre != null) {
            personalMovieDB.genres[i] = favouriteGenre;
            i++;
        }
    }
}
writeYourGenres();



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
/* function returnNeighboringNumbers(num) {
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
console.log(getMathResult(10, 0)); */

//калькулятор площади всех плоскостей и обьема куба

/* function calculateVolumeAndArea(lengthRibCube) {
    if (Number.isInteger(lengthRibCube) && lengthRibCube >= 0) {
        let squere = Math.round(lengthRibCube) * Math.round(lengthRibCube) * 6,
            volume = Math.pow(Math.round(lengthRibCube), 3);
        console.log(`Объем куба: ${volume}, площадь всей поверхности: ${squere}`);
    } else {
        console.log('При вычислении произошла ошибка');
    }
}
calculateVolumeAndArea(0); */

//Найти купе по номеру места

/* function getCoupeNumber(num) {
    if (Number.isInteger(num) && num > 0 && num <= 36) {
        let coupeNumber = Math.ceil(Math.round(num) / 4);
        console.log(coupeNumber);
    } else if(Number.isInteger(num) && (num === 0 || num > 36)){
        console.log("Таких мест в вагоне не существует");
    } else {
        console.log("Ошибка. Проверьте правильность введенного номера места");
    }
}
getCoupeNumber(6.35); */

//Минуты в часы и минуты

/* function getTimeFromMinutes(minutes) {
    if (minutes < 0 || !Number.isInteger(minutes)) {
        return "Ошибка, проверьте данные";
    }
    let hours = Math.floor(minutes / 60),
        minut = minutes % 60,
        hour,
        minu = ` и ${minut} минут`;
    if (hours === 0 || hours >= 5) {
        hour = `Это ${hours} часов`;
    } else if(hours === 1){
        hour = `Это ${hours} час`;
    } else {
        hour = `Это ${hours} часа`;
    }
    return hour + minu;
}
getTimeFromMinutes(456); */

//поиск большего числа

/* function findMaxNumber(num1, num2, num3, num4) {
    let maxNumbers = [num1, num2, num3, num4];
    if (typeof (num1, num2, num3, num4) != 'number' || maxNumbers.length < 4) {
        return 0;
    }
    return Math.max(num1, num2, num3, num4);
}
findMaxNumber(1, 2, 3,4); */

// прикол с Фибоначчи

/* function fib(num) {
    if (!Number.isInteger(num) || num <= 0) {
        return ``;
    }
    if (num => 3) {
           let numbsFib = [0, 1];
        for (let i = 2; i < num; i++){
            numbsFib[i] = numbsFib[i - 2] + numbsFib[i - 1];
        }
        let result = '';
        for (let i = 0; i < num-1; i++){
            result += `${numbsFib[i]} `;
        }
        return result += `${numbsFib[num-1]}`;
    }
}
fib(7); */
/* const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};
console.log(option.name);

delete options.name;  */
const personalPlanPeter = {
    name: "Peter",
    age: "30",
    skills: {
        languages: ['ru', 'ua'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs() {
            console.log (`Мне ${personalPlanPeter.age} и я владею языками: ${(personalPlanPeter.skills.languages.join(" ")).toUpperCase()}`);
    }
};

function showExperience(plan) {
    return plan.skills.exp;
}
showExperience(personalPlanPeter);
function showProgrammingLangs(plan) {
    let langs = '';
    if (plan.skills.programmingLangs.length !== 0) {
        for (let key in plan.skills.programmingLangs) {
            langs += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;
        }
    }
    return langs;
}
showProgrammingLangs(personalPlanPeter);
personalPlanPeter.showAgeAndLangs();
function sayHI() {
  console.log("Hello, this is my first function!");
}
sayHi();