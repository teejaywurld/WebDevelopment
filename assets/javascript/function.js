// // name = "Adetunji Henry"
// // console.log(name)
//
// // function getName(name){
// //     console.log(name);
// // }
// //
// // getName("Adetunji")
// //
// // checkHeight("lekan", "5ft")
// //
// // console.log(checkHeight(lekan, "5ft"))
// // function checkHeight(name, height){
// //     return height >= "4ft" && name + " is close to the ground"
// // }
// //
// // function checkHeight(name, height){
// //     return height <= "4ft" && height + " 4ft"
// // }
// //
// // console.log(checkHeight("5ft"))
// //
//
//
//  const multiplier = (number) => {
//     for (let i = 0; i < 12; i++) {
//         // console.log(number + " * " + i + " = " + (number + i))
//         console.log(`${number} * ${i} = ${number * i}`)
//     }
// }
// const addition = (number) => {
//     for (let i = 0; i < 12; i++) {
//         // console.log(number + " + " + i + " = " + (number + 1))
//
//         //The code below is called Template Literals
//         console.log(`${number} + ${i} = ${number + i}`)
//     }
// }
//
//  function doArithmetic(aFunction) {
//     let x  = 2
//     aFunction(x)
// }
//
// doArithmetic(multiplier)
// doArithmetic(addition)
//
//
// //The right handside of the code below is called Anonymous function
// // const drinkWater = function () {
// //     console.log("drink water")
// // }
// //
// // const drinkWater2 = () => {
// //     console.log("drink water 2")
// // }
//
//
// //IIFE means Immediately Invoke Function Expression
//
//
// doArithmetic((element) => {
//     // function (element) {
//         for (let i = 0; i < 12; i++) {
//             i >= element ? console.log(`${element} / ${i} = ${i / element}`) : console.log(i)
//
//     }
// })
//
// const  cookFood = function (){
//     return function (food) {
//         return food
//     }
// }
//
// const food = cookFood()("beans")
//     console.log(food)
//
//
// const returnFunction = (aFunction) => {
//     return aFunction
// }
//
// const yetAnotherFunction = returnFunction(() => console.log("Ekaabo"))
//
// yetAnotherFunction()
//
//
// const toggleLight = (event, callback) => {
//     switch (event) {
//         case "walkedIn":
//             callback("Switch On")
//             break;
//         case "walkedOut":
//             callback("Switch Off")
//             break;
//         default:
//             console.log("Lights Off")
//             break;
//     }
// }
//
// toggleLight("walkedIn",(data)=> console.log(`lights are ${data}`))
// toggleLight("walkedOut",(data)=> console.log(`lights are ${data}`))
// toggleLight("walkedOnWater",(data)=> console.log(`lights are ${data}`))
//
//
// //Global vs Local Scope in Functions
//
// var outerWear = "T-Shirt";
//
// function myOutfit(){
//     var outerWear = "Sweater";
//     return outerWear;
// }
// console.log(myOutfit());
// console.log(outerWear);
//
// //Return a Value from a Function with Return
//
// function minusSeven(num){
//     return num -7;
// }
// console.log(minusSeven(10))
//
// function timesFive(number){
//     return number * 100;
// }
// console.log(timesFive(5))
//
// //Stand in Line
//  function  nextInLine(arr, item){
//     arr.push(item);
//     return arr.shift();
//  }
//  var testArr = [1, 2, 3, 4, 5, 6];
//
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 7));
// console.log("After: " + JSON.stringify(testArr));
//
//
// //Boolean Values
//
// function ourTrueOrFalse(isItTrue){
//     if (isItTrue){
//         return "Yes, it is true";
//     }
//     return "No, it is false";
// }
//
// function trueOrFalse(wasThatTrue){
//     if (wasThatTrue){
//         return "Yes, that was true";
//     }
//     return "No, that was false"
// }
// console.log(trueOrFalse(true)) ;
//
// //Game of Golf
//
// var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"]
// function golfScore(par, strokes){
//     if (strokes === 1){
//         return names[0]
//     }
//     else if (strokes <= - 2){
//         return names[1]
//     }
//     else if (strokes === par - 1){
//         return names[2]
//     }
//     else if (strokes === par){
//         return names[3]
//     }
//     else if (strokes === par + 1){
//         return names[4]
//     }
//     else if (strokes === par + 2){
//         return names[5]
//     }
//     else if (strokes>= par + 3){
//         return names[6]
//     }
// }
//
// console.log(golfScore(5, 4))
//
//
// function sayIt(){
//     for(let i = 0; i < 12; i++){
//         console.log(i * 7)
//     }
// }
//
// sayIt();
//
// let userName = "tolu"
//
// function changeName(name){
//     name = "balikis"
// }
//
// changeName(userName)
// console.log(userName)
//
//
// let character = {
//     name: "adeola",
//     isWig: true,
//     gender: "female"
// }
//
// function movement(person){
//     console.log(`when ${person.name} runs ${person.isWig ? "her wig falls" : "breeze blows her hair"}`)
// }
//
// function animation(defineCharacterMovement){
//     let character = {
//         name: "adeola",
//         isWig: true,
//         gender: "female"
//     }
//     defineCharacterMovement(character)
// }
//
// animation(movement)
//
//
// function createCharacter() {
//     let character = {
//         name: "adeola",
//         isWig: false,
//         gender: "female",
//         getName: function () {
//             return this.name
//         }
//     }
//     return character
// }
//
// let person = createCharacter()
//
// let personName = person.getName()
//
// console.log(personName)
//
//
//
// // function callMe(phoneNumber, countryDial){
// //     if (phoneNumber !== ""){
// //         countryDial(phoneNumber)
// //     }
// //     else {
// //         console.log("Enter a valid number")
// //     }
// // }
// // const dial = (phoneNumber) => console.log(`Calling ${phoneNumber}`)
// //
// // callMe("08022247865", dial)
//
//
//

//process.stdout.write => this is used to write a/any code and as well print it out on one single line

// (function oneLine(anArray) { for (let i = 0; i <anArray.length; i++) {anArray[i] % 2 === 0 && process.stdout.write(anArray[i] + " ")}})([1, 2, 3, 4, 5, 6, 7, 8])
// let anArray = [1, 2, 3, 4, 5, 6, 7, 8]; anArray.forEach(anArray => {if (anArray % 2 === 0){console.log(anArray)}})
// let anArray = [1, 2, 3, 4, 5, 6, 7, 8]; anArray.forEach(anArray => {if(anArray % 2 === 0){process.stdout.write(anArray + " ")}})

// let anArray = [1, 2, 3, 4, 5, 6, 7, 8]; anArray.forEach(value => value % 2 === 0 && process.stdout.write(value + " "))
//
// console.log()
//
// let pseudo = {
//     anArray: [1, 2, 3, 4, 5, 6, 7, 8],
//     pseudoForEach: function (iterator){
//         for (let i = 0; i < this.anArray.length; i++){
//             iterator (this.anArray[i])
//         }
//     }
// }
//
// pseudo.pseudoForEach((value) => value % 2 === 0 && process.stdout.write(value + " "))




// function factorial (x){
//     if (x === 0)
//         return 1
//     else return x * factorial(x - 1)
// }
//
// const num = 3
//
// if (num > 0){
//     let result = factorial(num)
//     console.log(`The factorial of ${num} is ${result}`)
// }

console.log();
console.log();

let a, b, rest;
[a, b] = [10, 20];

console.log(a);

console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50, 60, 70]

console.log(rest);

console.log()


let cohort = {
    name: "tech_stuff",
    number: 9,
    total: 31,
    isNormal: true,
}
let newCohort = cohort;

newCohort.name = "interesting_stuff"

console.log(newCohort.name);

console.log(cohort.name);

console.log()





let cohortNew = {... cohort}

cohortNew.name = "cool_stuff"

// console.log(newCohort.name);
// console.log(cohort.name);
// console.log(cohortNew.name);

console.log()


// function doSomething(...params){
function doSomething(...stuff){
    (function (){
        stuff.forEach((stuff) => console.log(`hi ${stuff}`))
    })()
}

doSomething("ujay", "ehi", "increase", "ajine")

console.log()

let anArray = [1, 2, 3, 4, 5, 6]

let newArray = [...anArray]

console.log(newArray)

console.log()
