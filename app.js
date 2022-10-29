const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const sum = document.getElementById("totalSum");

let num1 ;
let num2 ;


function add(){
    num1 = Number(number1.value);
    num2 = Number(number2.value);
    let sums = num1 + num2;
    sum.innerHTML += "<br> "+ "Add = "+ sums ;
}
function subtract(){
    num1 = Number(number1.value);
    num2 = Number(number2.value);
    let sums = num1 - num2;
    sum.innerHTML += "<br> "+ "subtract = "+ sums ;
}
function divide(){
    num1 = Number(number1.value);
    num2 = Number(number2.value);
    let sums = num1 / num2;
    sum.innerHTML += "<br> "+ "divide = "+ sums ;
}
function multiply(){
    num1 = Number(number1.value);
    num2 = Number(number2.value);
    let sums = num1*num2;
    sum.innerHTML += "<br> "+ "multiply = "+ sums ;
}