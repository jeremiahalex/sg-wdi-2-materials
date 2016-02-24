// Calculator

var result1;
var num1 = document.getElementById('basic-num-1');
var num2 = document.getElementById('basic-num-2');
var option = document.getElementById('basic-operation');
var answer1 = document.getElementById('basic-answer-alert');

function operations(){
  var operator = option.value;
  var a = Number(num1.value)
  var b = Number(num2.value)
  console.log(a, b, operator);
  console.log(typeof a);
  switch(operator){
    case '+':
      result1 = a + b;
      break;
    case '-':
      result1 = a - b;
      break;
    case '*':
      result1 = a * b;
      break;
    case '/':
      result1 = a/b;
      break;
    default:
      result1 = 'error';
      break;
  }
  answer1.textContent = result1;
}

var calculate1 = document.getElementById('basic-calc');
calculate1.addEventListener('click', operations);

// trip Calculator

var result2;
var distance = document.getElementById('trip-distance');
var mpg = document.getElementById('trip-mpg');
var costgallon = document.getElementById('trip-cost');
var speed = document.getElementById('trip-speed');
var answer2 = document.getElementById('trip-answer-alert');

function trip(){
  var d = parseFloat(distance.value);
  var m = parseFloat(mpg.value);
  var c = parseFloat(costgallon.value);
  var s = parseFloat(speed.value);
  if (s<=60){
    result2 = d/(m*c);
  }else{
    result2 = d/(m-(s-60)*2)*c ;
  }
  answer2.textContent = result2;
}

var calculate2 = document.getElementById('trip-calc');
calculate2.addEventListener('click', trip);

// BMI calculator

var result3;
var mass = document.getElementById('bmi-mass');
var height = document.getElementById('bmi-height');
var answer3 = document.getElementById('bmi-answer-alert');

function bmi(){
  var m = parseFloat(mass.value);
  var h = parseFloat(height.value);
result3 = m/(h*h);
answer3.textContent = result3;
}

var calculate3 = document.getElementById('bmi-calc');
calculate3.addEventListener('click', bmi);

//Mortgage calculator
var result4;
var loan = document.getElementById('mortgage-loan');
var apr = document.getElementById('mortgage-apr');
var term = document.getElementById('mortgage-term');
var answer4 = document.getElementById('mortgage-answer-alert');

function mortgage(){
  var l = parseFloat(loan.value);
  var a = parseFloat(apr.value)/1200;
  var t = parseFloat(term.value);
  result4 = l * a * Math.pow((1+a),t)/(Math.pow((1+a),t)-1);
  answer4.textContent = result4
}

var calculate4 = document.getElementById('mortgage-calc');
calculate4.addEventListener('click', mortgage);
