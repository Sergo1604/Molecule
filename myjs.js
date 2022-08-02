//var let const
// const age = 19;
// for (let index = 0; index < 5; index++) {
//     console.log(age);
// }
// const year = 20;
// const brand = 'Tesla';
// console.log(`автомобиль ${brand}`);

const car = {
    brand: 'BMW',
    color: 'silver',
    year: 2022
        // engine: {
        //     type: 'v8',
        //     turbo: true
        // }
}

let {
    year,
    color
} = car;
console.log(' ' + color + ' ' + year);

// console.log(`Марка: ${car.brand} `);
// console.log(car.engine.turbo);

const students = ['stas', 'vlad', 10, false];

// console.log(students);
// console.log(students.at(0));
students.push('kolya');
// console.log(students);
// console.log(students);
students.sort();
// console.log(students);

// students.map((el) => {
//     console.log(el);
// });

// students.forEach((el) => {
//     console.log(el);
// });  

const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Змініть код лише під цим рядком
function updateRecords(records, id, prop, value) {
    if (prop != 'tracks' && value != '') {
        records[id][prop] = value
    };
    if (prop == 'tracks' && records[id].hasOwnProperty(prop) == false) {
        records[id][prop] = [];
    };
    if (prop == 'tracks' && value != '') {
        records[id][prop].push(value);
    };
    if (value == '') {
        delete records[id][prop];
    }
    return records;
}

updateRecords(recordCollection, 2468, "tracks", "Free");

//console.log(recordCollection);

const contacts = [{
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Змініть код лише під цим рядком
    let i = 0;
    let hasName = false;
    let hasProp = false;
    for (i; i < contacts.length; i++) {
        if (contacts[i].firstName == name && contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        }
        if (contacts[i].firstName == name) {
            hasName = true;
        }
        if (contacts[i].hasOwnProperty(prop)) {
            hasProp = true;
        }

    }

    if (hasName == false) {
        return "No such contact"
    };
    if (hasProp == false) {
        return "No such property"
    }

    // Змініть код лише над цим рядком
}

// console.log(lookUpProfile("Akira", "likes"));
// console.log(lookUpProfile("Kristian", "lastName"))
// console.log(lookUpProfile("Sherlock", "likes"))
// console.log(lookUpProfile("Harry", "likes"))
// console.log(lookUpProfile("Bob", "number"))
// console.log(lookUpProfile("Bob", "potato"))
// console.log(lookUpProfile("Akira", "address"))

// function checkSign(num) {
//     let result = "";
//     (a === 0) ? result = 'zero': a > 0 ? result = "positive" : result = "negative";
//     return result;

// }

// var numArray = [];
// let i = 0;


// for (i = 0; i < 3; i++) {
//     numArray.push(i);
//     console.log(i);
// }
// console.log(numArray);
// console.log(i);
// var printNumTwo;
// for (i = 0; i < 3; i++) {
//     if (i === 2) {
//         printNumTwo = function() {
//             return i;
//         };
//     }
// }
// console.log(printNumTwo());

// const s = [5, 6, 7];
// s[2] = 45;
// console.log(s)
// const sum = (...args) => {
//     return args.reduce((a, b) => a + b, 0);
// }

// alert(sum(1, 2, 4, 5, 6));

// const LOCAL_FORECAST = {
//     yesterday: { low: 61, high: 75 },
//     today: { low: 64, high: 77 },
//     tomorrow: { low: 68, high: 80 }
// };

// Змініть код лише під цим рядком

// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;
// const {
//     today: { low: lowToday, high: highToday }
// } = LOCAL_FORECAST;
// alert(lowToday);
// alert(highToday);

// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
// };

// function makeList(arr) {
//     // Змініть код лише під цим рядком
//     "use strict";
//     const failureItems = arr.map(item =>
//             `<li class=\"text-warning\">${item}</li>`
//         )
//         // Змініть код лише над цим рядком

//     return failureItems;
// }

// const failuresList = makeList(result.failure);
// console.log()
// Змініть код лише під цим рядком
// Змініть код лише під цим рядком
// class Thermostat {
//     constructor(temp) {
//         this._temperature = temp;
//     }
//     get temperature() {
//         return (this._temperature - 32) * 5 / 9;
//     }
//     set temperature(updateTemperature) {
//         this._temperature = updateTemperature;
//     }

// }
// Змініть код лише над цим рядком

// const thermos = new Thermostat(76); // Налаштування у шкалі Фаренгейта
// let temp = thermos.temperature; // 24.44 градусів Цельсію
// console.log(temp);
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 градусів за Цельсієм

// console.log(temp);


// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer налаштований правильно, щоб відобразити позитивну відповідь сервера
//     let responseFromServer = false;

//     if (responseFromServer) {
//         resolve("We got the data");
//     } else {
//         reject("Data not received");
//     }
// });

// makeServerRequest.then(result => {
//     console.log(result);
// })

// makeServerRequest.catch(error => {
//     console.log(error);
// });

// let quoteSample = "The quick brown fox jumps over the lazy dog";
// let alphabetRegex = /[a-z]/gi; // Змініть цей рядок
// let result = quoteSample.match(alphabetRegex); // Змініть цей рядок
// console.log(result);

// console.log("abczzzzzzzzzzzzzzzzzzzzzabZZZcgfgfZ".match(/z+/gi));
// console.log('123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ'.match(/\w/gi));
// console.log("The five boxing wizards jump quickly.".match(/\W*?/g));
// let hello = " Hello  kjkfjkdjfdkj      ";
// let wsRegex = /(^\s+)|(\s+$)/g; // Змініть цей рядок
// let result = hello.replace(wsRegex, ""); // Змініть цей рядок
// console.log(result);
// console.log(hello.match(wsRegex));

// const users = {
//     Alan: {
//         online: false
//     },
//     Jeff: {
//         online: true
//     },
//     Sarah: {
//         online: false
//     }
// }

// function countOnline(usersObj) {
//     // Змініть код лише під цим рядком
//     let result = 0;
//     for (let user in usersObj) {
//         if (usersObj.user.online === false) result++;
//     }
//     return result;
//     // Змініть код лише над цим рядком
// }

// console.log(countOnline(users));
// function bouncer(arr) {
//     let errors = [false, null, 0, "", undefined, NaN];
//     let result = arr.slice();
//     return arr.map(el => {
//         result.indexOf(el) < 0 ? (result) : (result.splice(result.indexOf(el), 1),
//             result)
//     });
// }

// console.log(bouncer([7, "ate", "", false, 9]));
// console.log(bouncer([false, null, 0, "", undefined, NaN]));

// function convertToRoman(num) {
//     const romanSymbols = [{ 1: 'I' }, { 5: 'V' }, { 10: 'X' }, { 50: 'L' }, { 100: 'C' }, { 500: 'D' }, { 1000: 'M' }, ];
//     let input = String(num);
//     let result = "";
//     for (let i = input.length - 1; i >= 0; i--) {

//     }


// function toCamelCase(str) {
//     function toCC(match) {
//         return match.slice(1).toUpperCase();
//     }

//     return str.replace(/_\w|-\w/g, toCC);
// }

// console.log(toCamelCase("the-stealth_warrior"));

// function validatePIN(pin) {
//     let tmp = String(pin)
//     let regExp = /^\d{3}\d$|^\d{5}\d$/
//     return regExp.test(tmp);
//     //return true or false
// }

// console.log(validatePIN('111111.0'));

// function accum(s) {
//     let res = '';
//     for (let i = 0; i < s.length; i++) {
//         let temp = '';
//         for (let j = 1; j < i + 1; j++)
//             temp += s[i];
//         res += '-' + s[i].toUpperCase() + temp;

//     }
//     return res.slice(1);
//     // your code
// }

// console.log(accum("qweRty"));

// const binaryArrayToNumber = arr => {
//     return parseInt(String(arr.join('')), 2);
//     // your code
// };
// console.log(binaryArrayToNumber([1, 1, 1]));

// function digital_root(n) {
//     if (n % 10 === n) return n;
//     else
//         return digital_root(String(n).split('').reduce((sum, el) => sum += Number(el), 0));
//     // ...
// }

// console.log(digital_root(95));

// function descendingOrder(n) {
//     return ParseInt(n.toString().split('').sort((a, b) => b - a).join(''),10);
//     //...
// }

// console.log(descendingOrder(100));

// function addBinary(a, b) {
//     let res = [];
//     let sum = a + b;
//     while (sum != 0) {
//         res.push(sum % 2);
//         sum = (sum - sum % 2) / 2;
//     }
//     return res.reverse().join('');

// }

// console.log(addBinary(1, 2));

// console.log((1111111).toString(2));

function convertToRoman(num) {
    const romanSymbols = new Set();
    romanSymbols[1] = 'I';
    romanSymbols[5] = 'V';
    romanSymbols[10] = 'X';
    romanSymbols[50] = 'L';
    romanSymbols[100] = 'C';
    romanSymbols[500] = 'D';
    romanSymbols[1000] = 'M';

    //console.log(romanSymbols);
    let temp = num;
    let res = '';
    let tempRoman = new Set();
    let mult = 1000;
    let multIsTwo = true;
    while (temp != 0) {
        tempRoman[mult] = parseInt(temp / mult, 10);
        temp = temp % mult;
        mult /= 10;
        // if (multIsTwo) {
        //     mult /= 2; //Делитель уменьшаем в 2 раза
        //     multIsTwo = false;
        // } else {
        //     mult /= 5; //Делитель уменьшаем в 5 раз
        //     multIsTwo = true;
        // }
    }
    console.log(tempRoman)
    mult = 1000;
    multIsTwo = true;
    while (mult >= 1) {
        let tempStr = '';
        if (tempRoman[mult] > 0 && tempRoman[mult] <= 3) tempStr = romanSymbols[mult].repeat(tempRoman[mult])
        else if (tempRoman[mult] == 4) tempStr = romanSymbols[mult].concat(romanSymbols[mult * 5]);
        else if (tempRoman[mult] == 5) tempStr = romanSymbols[mult * 5];
        else if (tempRoman[mult] > 5 && tempRoman[mult] < 9) tempStr = romanSymbols[mult * 5].concat(romanSymbols[mult].repeat(tempRoman[mult] - 5));
        else if (tempRoman[mult] == 9) tempStr = romanSymbols[mult].concat(romanSymbols[mult * 10]);
        res = res.concat(tempStr);
        mult /= 10;
        // if (multIsTwo) {
        //     mult /= 2; //Делитель уменьшаем в 2 раза
        //     multIsTwo = false;
        // } else {
        //     mult /= 5; //Делитель уменьшаем в 5 раз
        //     multIsTwo = true;
        // }
    }
    return res;

}

console.log(convertToRoman(999));

console.log('A'.charCodeAt(0));

function rot13(str) {
    let fontCeasar = new Map();
    for (let i = 32; i < 64; i++) {
        fontCeasar.set(String.fromCharCode(i), String.fromCharCode(i));
    }

    for (let i = 65; i < (65 + 13); i++)
        fontCeasar.set(String.fromCharCode(i), String.fromCharCode(i + 13));
    for (let i = 65; i < (65 + 13); i++)
        fontCeasar.set(String.fromCharCode(i + 13), String.fromCharCode(i));

    let res = '';

    for (let i = 0; i < str.length; i++) {
        res = res.concat(fontCeasar.get(str[i]));

    }

    return res;
}

console.log(rot13("SERR PBQR PNZC"));

function telephoneCheck(str) {
    let regExp = /(^1?\d{10}$)|(^1?\s\d{3}\s\d{3}\s\d{4}$)|(^1?\s?\(\d{3}\)\s?\(\d{3}\)\s?\(\d{4}\)$)|(^1?\s?\(\d{3}\)\s\d{3}\s\d{4}$)/;
    return regExp.test(str);

}

console.log(telephoneCheck("1 (555) 555 5555"));

function checkCashRegister(price, cash, cid) {
    let change = [];
    let rest = cash * 100 - price * 100;
    let tmpCoinsArr = [
        ["PENNY", 1],
        ["NICKEL", 5],
        ["DIME", 10],
        ["QUARTER", 25],
        ["ONE", 100],
        ["FIVE", 500],
        ["TEN", 1000],
        ["TWENTY", 2000],
        ["ONE HUNDRED", 10000]
    ];
    let tmpCoins = new Map(tmpCoinsArr);
    let tmpNames = new Map(tmpCoinsArr.map(([name, denom]) => [denom, name]));
    //console.log(tmpCoins);
    let tmpCashBox = cid.map(([name, value]) => [Math.round(tmpCoins.get(name)), Math.round(value * 100)])
        .sort(([denom, value], [denomNext, valueNext]) => denomNext - denom);
    // tmpCashBox.forEach(([denom, value]) => {
    //     console.log('denom = ' + denom / 100 + '  ' + 'value = ' + value / 100);
    // });
    let cashBox = tmpCashBox.reduce((acc, [denom, value]) => acc += value, 0);
    if (cashBox < rest) return { status: "INSUFFICIENT_FUNDS", change: [] };
    if (rest == cashBox) {
        change.concat(cid);
        return { status: "CLOSED", change: cid }
    };
    if (rest > 0) {
        tmpCashBox.forEach(([denom, value]) => {
            let acc = 0;
            if (rest / value >= 1) {
                acc = value;
                change.push([denom, acc]);
            } else {
                while (acc <= rest - denom) acc += denom;
                if (acc > 0) change.push([denom, acc])
            }
            rest = rest - acc;
            //console.log('acc = ' + acc / 100 + ' ' + 'rest = ' + rest / 100)

        })
        if (change.reduce((acc, [denom, value]) => acc += value, 0) < rest) return { status: "INSUFFICIENT_FUNDS", change: [] };

        return {
            status: "OPEN",
            change: change.map(([denom, value]) => [tmpNames.get(denom), value / 100])
        };

    }
}

//console.log('num=' + (0.1 * 0.1).toFixed(2));
console.log(checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]));

console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]))

/*console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]))*/

/*console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]))*/

/*console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]))*/