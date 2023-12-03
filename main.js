// taking input from terminal
// const readline = require("readline");

// // create interface for input and output
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // create empty user input
// let userInput = "";

// // question user to enter name
// rl.question("What is your name\n", function (string) {
//   userInput = string;

//   console.log("Your name is " + userInput);

//   // close input stream
//   rl.close();
// });

// console.log("hello")

// variables var const let 
// var was original 
// const only defined first 
// but now only const and let

// var a=1;
// a=2;
// console.log(a)

// let a=1;
// a=2;
// console.log(a+" "+"helo")

//  let a=0;
//  for (let i = 0; i <1000000000000; i++) {
//     a+=i;
// }
// console.log(a);

//scope of variables
// let a=3;
// {
//     let a=2;
//     console.log(a+"inner")
// }
// console.log(a+"outer");

//array and objects combination to stpore complex data

// const ages =[2,3,4,12,43,23,56];
// for (let i = 0; i < ages.length; i++) {
//     if(ages[i]%2==0){
//         console.log(ages[i]);
//     }
    
// }

// const user1={
//     name:"aar",
//     age:12,
//     gender:"male"
// }
// const user2={
//     name:"aary",
//     age:15,
//     gender:"female"
// }
// const user = [user1,user2]
// for (let i = 0; i < user.length; i++) {
//     if(user[i].gender=="female") console.log(user[i].name)
    
// }
// console.log(user[1].name)

//fucntions reusable code 
// function add(a,b){
//     return a+b;
// }
// console.log(add(2,3));

// const add =(a,b)=>{
//     return a+b;
// }
// console.log(add(2,3));

// functioncs can take fucntions as inputs callbacks
// function sum(num1, num2,fnToCall) {
//     let result = num1 + num2;
//     fnToCall(result)
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }
// console.log(sum(1,2,displayResultPassive));
// You are only allowed to call one function after this
// How will you displayResult of a sum

// function calculateArith(a,b){
//     function add(a,b){
//         return a+b;
//     }
//     return add(a,b);
// }
// console.log(calculateArith(1,2));

// function calculateArith(a,b,airthMeticFinal){
//     return airthMeticFinal(a,b);
// }
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// console.log(calculateArith(1,2,add));

// function greet(){
//     console.log("pencxho")
// }
// setTimeout(greet,3*1000)

// let a=30;
// function c(b){
//     return b=b-1;
// }
// a=c(a);
// a=c(a);
// console.log(a);

// function realClock () {
//     let currentDateTime = new Date();
//     hours = ('0'+currentDateTime.getHours());
//     mins = ('0'+currentDateTime.getMinutes());
//     secs=('0'+currentDateTime.getSeconds());
//     console.log(hours + ":" + mins+ ":" + secs);
//   }
//   setInterval(realClock, 1000);

// let a=30;
// setInterval(()=>{
//     setTimeout(()=>{
//     a--;
//     console.log(a);
// },2000)},3000)


// function realClock () {
//     let currentDateTime = new Date();
//     hours = (currentDateTime.getHours());
//     mins = (currentDateTime.getMinutes());
//     secs=(currentDateTime.getSeconds());
//     const time = secs+mins*60+hours*60*60;
//     console.log(hours + ":" + mins+ ":" + secs);
//     return time;
//   }
//   let ti = realClock();
//   let tf=0;
//   setTimeout(()=>{
//     console.log("eoal")
//    tf=realClock();
//     console.log(tf-ti);
//   },2000);
