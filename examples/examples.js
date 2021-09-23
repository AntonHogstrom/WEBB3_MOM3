
class Mobile {
	constructor(company, model, price) {
		this.company = company;
		this.model = model;
		this.price = price;
        this.giveInfo = () => console.log(`Company: ${this.company}, Model: ${this.model}, Price: ${this.price}`);
	}
}
Samsung = new Mobile("Samsung", "Galaxy S21 Ultra", 12000);
Samsung.giveInfo();
//Company: Samsung, Model: Galaxy S21 Ultra, Price: 12000



const currentTime = () => {
    const current = new Date();
    const hour = current.getHours();
    const minute = current.getMinutes();

    return `${hour}:${minute}`;
}

const goodMorningSunshine = (time, weather) => {
    console.log(`WAKE UP THE TIME IS ${time} and the weather is ${weather}`);
}
const weather = () => "RAINING BLOOOOOD";

goodMorningSunshine(currentTime(), weather());
//WAKE UP THE TIME IS 21:37 and the weather is RAINING BLOOOOOD


const arrayOfNumbers = [123, 234, 345, 456, 567, 678, 789, 890];
const newArray = arrayOfNumbers.map(number => number - 1);
console.log(newArray);
//[122, 233, 344, 455, 566, 677, 788, 889]

arrayOfNumbers.forEach(number => {
    number += 10;
    console.log(number);
});
// 133, 244, 355, 466, 577, 688, 799, 900


const filteredArray = arrayOfNumbers.filter(number => {
    return number % 2; 
});
console.log(filteredArray);
// [123, 345, 567, 789]

const lettersArray = ["H", "E", "L", "L", "O"];
console.log(...lettersArray);
//H E L L O

const sayHello = "hello";
console.log(...sayHello);
//h e l l o

const nums = [1, 2, 3, 4];
let lowestPlusHighest = () => {
    return Math.min(...nums) + Math.max(...nums);
}
console.log(lowestPlusHighest());
//5


let name, age, other;
[name, age] = ["Anton", 26];
console.log([name, age]);
//['Anton', 26]

[name, age, ...other] = ["Anton", 26, ["Play Games", "Write JS", "Play Guitar"], "Tyresö"];
console.log([name, age, ...other]);
//['Anton', 26, Array(3), 'Tyresö']

const favNum = number => `${number} is my favourite number`;
console.log(favNum(23));
//23 is my favourite number


let task = new Promise((resolve, reject) => {
    if(5 > 4) {
        resolve('Success');
    } else {
        reject('FAIL');
    }
});

task
.then((message) => console.log("task is a " + message))
.catch((message) => console.log("task is a " + message));
//task is a Success