/* rememberMyFilms();
console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);
checkMyPersonalLevel();
writeYourGenres(); */

/* showMyDB(); */
// Первый способ
// Второй способ
/* for (let i = 0; i < 2;) {
   var lastSeenMovie = prompt("Один из последних просмотренных фильмов?", ""),
        ratingMovie = prompt("На сколько оцените его?", "");
    if (lastSeenMovie && ratingMovie && lastSeenMovie.length <= 50 && ratingMovie.length 
        <= 50 && lastSeenMovie.length >= 1 && ratingMovie >= 1) {
            personalMovieDB.movies[lastSeenMovie] = ratingMovie;
    } else {
         i--;
    }
} */

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
/* const personalPlanPeter = {
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
            console.log (`Мне ${personalPlanPeter.age} и я владею языками: 
            ${(personalPlanPeter.skills.languages.join(" ")).toUpperCase()}`);
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
} */
/* function checkForSpam(message) {
  let result;
  // Change code below this line
  result = message.toUpperCase().includes('SALE')||message.toUpperCase().includes('SPAM');
  // Change code above this line
    console.log(result);
  return result;
}
checkForSpam("'Amazing SalE, only tonight!"); */
/* const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const lastElementIndex = fruits.length-1;
const lastElement = fruits[lastElementIndex];
console.log(lastElement);
console.log(lastElementIndex); */
/* function getExtremeElements(array) {
  // Change code below this line
    //const newArr = [array.slice(0, 1), array.slice(array.length - 1)];
    const newArr = [array.shift(), array.pop()];
    console.log(newArr);
  // Change code above this line
}
getExtremeElements(["apple", "peach", "pear", "banana"]); */
/* function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
  console.log(message.split(' ').length*pricePerWord);


   // Change code above this line
}
calculateEngravingPrice("Web-development is creative work", 40); */
/* function slugify(title) {
  // Change code below this line
    const arr = title.toLowerCase().split(' ');
    console.log(arr.join('-'));


  // Change code above this line
} */
/* slugify("English for developer");
function findLongestWord(string) {
  // Change code below this line
    const words = string.split(' ');
    let longestWord = words[1];
    for (let longWord of words) {
        if (longWord.length > longestWord.length) {
            longestWord = longWord;
        }
    }
    return longestWord;
  // Change code above this line
}
findLongestWord("May the force be with you");
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
    for (let i = min; i <= max; i++){
        numbers.push(i);
    }
  // Change code above this line
  return numbers;
}
createArrayOfNumbers(14, 17);
function filterArray(numbers, value) {
   // Change code below this line
    let result = [];
    for (let num of numbers) {
        if (num > value) {
            result.push(num);
        }
    }
    return result;

  // Change code above this line
}
filterArray([12, 24, 8, 41, 76], 38);
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];
  console.log(fruits.includes(fruit)); // Change this line
}
checkFruit("mandarin");
function getCommonElements(array1, array2) {
  // Change code below this line
    let result = [];
    for (let num of array1) {
        if (array2.includes(num)) {
            result.push(num);
        }
    }
    return result;

 // Change code above this line
}
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (let num of numbers) {
    if (num > value) {
      filteredNumbers.push(num);
    }
  }
  console.log(filteredNumbers);
  // Change code above this line
}
filterArray([1, 2, 3, 4, 5], 3);
function getEvenNumbers(start, end) {
   // Change code below this line
    let numbers = [];
    for (let i = start; i <= end; i++){
        if (i % 2 === 0) {
            numbers.push(i);
        }
    }
    return numbers;

    // Change code above this line
}
getEvenNumbers(6, 12);
function includes(array, value) {
  // Change code below this line
    for (let values of array) {
        if (values === value) {
            return true;
        }
        
    }
    return false;
  // Change code above this line
}
includes([1, 2, 3, 4, 5], 5);
function calculateTotal(number) {
 // Change code below this line
  let result = 0;
  for (let i = 0; i <= number; i++){
    result += i;
  }
  return result;

  // Change code above this line
}
calculateTotal(18);
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let members = "";
    members = arr.join(' ');
    if (members === "") {
        console.log ('Семья пуста');
    }
    console.log(`Семья состоит из: ${members}`);
}
showFamily(family);
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    const cities = arr.join("\n");
    console.log(cities.toLowerCase());
}
standardizeStrings(favoriteCities);

const someString = 'This is some strange string';
function reverse(str) {
    if (typeof (str) !== 'string') {
        return "Ошибка!";
    }
    let arr = str.split(' ');
    arr = arr.reverse();
    let i = 0;
    let arr2;
    let reverseArr=[];
    for (let word of arr) {
        arr2 = word.split('');
        arr2 = arr2.reverse();
        reverseArr[i] = arr2.join('');
        i++;
    }
    const reverseStr = reverseArr.join(' ');
    return reverseStr;
}
reverse(someString);
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return 'Нет доступных валют';
    }
    for (let currency of arr) {
        if (currency === missingCurr) {
            arr.splice(arr.indexOf(currency), 1);
        }
    }
    console.log(arr.length);
    let stringAvailableCurr = arr.join('\n');
    console.log(`Доступные валюты:\n${stringAvailableCurr}\n`);
}
availableCurr(['UAH', 'RUB', 'CNY'], 'CNY'); */
// Проверка на кол-во бюджета
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let totalWidth=0;
    let totalLength=0;
    data.shops.forEach(shop => {
        totalWidth += shop.width;
        totalLength += shop.length;
    });
    let totalSquare = totalLength * totalWidth;
    let volume = totalSquare * data.height;
    if (data.budget- (volume * data.moneyPer1m3)>=0) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}
/* function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        square += shop.width * shop.length;
        console.log(square);
    });

    volume = data.height * square;

    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
} */
isBudgetEnough(shoppingMallData);


/* const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let groups = arr.sort();
    let rest = arr.length % 3;
    let numbersOfGroups = Math.floor(groups.length/3);
    let group;
    let result;
    for (let i = 0; i < numbersOfGroups; i++) {
        for (let j = 0+i; j < 3+i; j++) {
            if ((j + 1) % 3 !== 0) {
                group += groups[j] + ' ';
            }
        }
        group.trim();
        result = group.split(' ');
        groups.splice(i * 3, 3, result);
        group = '';
    }    
    console.log(groups);
} */
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi',
    'Sam', 'Wilson', 'Chukwu', 'Diana'];
// MY DECISION THIS TASK
/* function sortStudentsByGroups(arr) {
    let groups = arr.sort();
    let restMembers = groups.slice(groups.length - groups.length % 3).join(', ');
    if (groups.length % 3 === 0) {
        restMembers = '-';
    }
    let group= '';
    let counter = 0;
    let resultGrouping=[];
    for (let j = 0; j < Math.floor(groups.length/3); j++) {
        for (let i = 0; i < 3; i++) {
            if (i === 0) {
                group = groups[counter];
            } else {
                group += ' ' + groups[counter];
            }
            counter++;
        }
        resultGrouping[j] = group.split(' ');
        delete group[0, 1, 2];
    }
    resultGrouping.push(`Оставшиеся студенты: ${restMembers}`);
   console.log(typeof(resultGrouping));
 }
sortStudentsByGroups(students); */
// THE DECISION OF MY FRIEND
function sortStudentsByGroups1(arr) {
    arr.sort();
    console.log(arr.length);
    let arrGroup = [];
    const arrLength = Math.floor(arr.length / 3);
    for (let i = 0; i < arrLength; i++){
        arrGroup.push(arr.splice(0, 3));
    } 
    arrGroup.push(`Оставшиеся студенты: ${!arr.length ? `-` : arr.join(", ")}`);
    console.log(arrGroup);

}
sortStudentsByGroups1(students);

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if ((parseInt(fDish.price) + parseInt(sDish.price)) < parseInt(average)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({},data);

    copy.waitors = [{name: 'Mike', age: 32}];
    console.log(copy);
    console.log(data);
}

transferWaitors(restorantData);