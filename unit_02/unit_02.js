// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7;
let b = 9;
console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.
let c = 7;
let d = 9;
document.querySelector(".out-2").textContent = c*d;


// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.
let e = 3;
let f = 5;
document.querySelector(".out-3").textContent = e+f;


// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.
let e1 = '3';
let f1 = 5;
document.querySelector(".out-4").textContent = e1+f1;

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.
let e2 = 3;
let f2 = 0;
document.querySelector(".out-5").textContent = e2/f2;



// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.
let e3 = 3;
let f3 = 'Hello';
document.querySelector(".out-6").textContent = e3+f3;


// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.
let e4 = 3; 
let f4 = 'Hello';
document.querySelector(".out-7").textContent = e4*f4;

// Task 8.
// По нажатию на кнопку .b-8 выполняется функция, которая выводит в div.out-8 то, что пользователь ввел в input.i-8.

function t8() {
  const input = document.querySelector('.i-8');
  const output = document.querySelector('.out-8');
  const text = input.value;
  output.textContent = text;
}
document.querySelector(".b-8").onclick = t8;

// Task 9.
// По нажатию на кнопку .b-9 выполняется функция t9, которая выводит в div.out-9 то, что пользователь ввел в input.i-9. Добавьте очистку input после нажатия кнопки.

function t9() {
  const input = document.querySelector('.i-9');
  const output = document.querySelector('.out-9');
  const text = input.value;
  output.textContent = text;

  input.value = "";
}
document.querySelector(".b-9").onclick = t9;


// Task 10.
// По нажатию на кнопку .b-10 выполняется функция t10, которая выводит в div.out-10 то, что пользователь ввел в input.i-10 умноженное на 20.

function t10() {
  const input = document.querySelector('.i-10');
  const output = document.querySelector('.out-10');
  const text = input.value;
  output.textContent = text*20;
  
  input.value = "";
}
document.querySelector(".b-10").onclick = t10;

// Task 11.
// По нажатию на кнопку .b-11 выполняется функция t11, которая выводит на страницу в .out-11 число, которое ввел пользователь в i-11 и к нему добавленное число 55. В этой задаче мы не приводим к числу полученное из input.

function t11() {
  const input = document.querySelector('.i-11');
  const output = document.querySelector('.out-11');
  const text = input.value;
  output.textContent = text + "55";

  input.value = "";
}
document.querySelector(".b-11").onclick = t11;

// Task 12.
// По нажатию на кнопку выполняется функция t12. 
// Функция должна получить данные из input i.12-1 и i.12-2 
// (пользователь вводин в них фамилию и имя). После чего вывести в .out-12  строку 'Hello имя фамилия', 
// где имя - имя пользователя и фамилия - введенная фамилия. Обращаю ваше внимание - с этого момента мы работаем строго по заданию. 
// Hello - с большой буквы. Между Hello имя один пробел (вы же включили отображение пробелов?). 
// Вы не добавляете "от себя" - запятые, любые другие слова и символы. Аналогичные правила действуют и дальше по курсу.

function t12() {
  const first_name_tab = document.querySelector('.i-12-1');
  const last_name_tab = document.querySelector('.i-12-2');
  const output = document.querySelector('.out-12');
  const first_name = first_name_tab.value;
  const last_name = last_name_tab.value;
  output.textContent = 'Hello ' + first_name + ' ' + last_name;

  input.value = "";
}
document.querySelector(".b-12").onclick = t12;

// Task 13.
// При нажатии кнопки .b-13 выполняется t13. Функция получает из input.i-13-1 и .i-13-2 числа в переменные a, b. После чего в .out-13 выводит их сумму. Преобразовывайте a, b в числа!!!!

function t13() {
  const first_number_tab = document.querySelector('.i-13-1');
  const last_number_tab = document.querySelector('.i-13-2');
  const output = document.querySelector('.out-13');
  const first_number = first_number_tab.value;
  const last_number = last_number_tab.value;
  output.textContent = +first_number + +last_number;

  input.value = "";
}
document.querySelector(".b-13").onclick = t13;

// Task 14.
// По нажатию кнопки .b-14 выполняется функция t14. Она заменяет значение value в input.i-14 на строку 'Go';

function t14() {
  document.querySelector('.i-14').value = "Go";

}
document.querySelector(".b-14").onclick = t14;

// Task 15.
//  По нажатию кнопки .b-15 выполняется функция t15. Она присваивает .i-15 свойство style.border = "4px solid red";

function t15() {
  const input = document.querySelector('.i-15');
  input.style.border = '4px solid red'; 
}
document.querySelector(".b-15").onclick = t15;
// Task 16.
//По нажатию на кнопку .b-16 выполняется функция t16. Функция получает из .i-16-1 и i-16-2 числа. 
// Выведите в .out-16 сумму данных чисел по нажатию кнопки b-16. Не переводите полученное из input в число!!!!

function t16() {
  const first_number_tab = document.querySelector('.i-16-1');
  const last_number_tab = document.querySelector('.i-16-2');
  const output = document.querySelector('.out-16');
  const first_number = first_number_tab.value;
  const last_number = last_number_tab.value;
  output.textContent = first_number + last_number;

  input.value = "";
}
document.querySelector(".b-16").onclick = t16;

// Task 17.
// По нажатию на кнопку .b-17 выполняется функция t17. 
// Функция получает из .i-17 число. Изучите работу кода и запомните отличия. Попробуйте ввести числа 5, 4zz, zz4, -200, 33.05
function t17() {
  const input = document.querySelector('.i-17');
  const output = document.querySelector('.out-17-1');
  const number = input.value;
  output.textContent = number;
  input.value = "";
}
document.querySelector(".b-17").onclick = t17;


// Task 18.
// По нажатию на кнопку .b-18 выполняется функция t18. Функция получает из .i-18 число в переменную a. Выводит в out-18 результат операции parseFloat(a). 
// Попробуйте ввести значения 5, 33.02, 33.9a, -20.01

function t18() {
  const input = document.querySelector('.i-18');
  const output = document.querySelector('.out-18');
  const a = input.value;
  output.textContent = parseFloat(a);
  input.value = "";
}
document.querySelector(".b-18").onclick = t18;

// Task 19.
// По нажатию кнопки .b-19 функция t19 дожна в out-19 вывести сумму двух отрицательных чисел из input .i-19-1 и .i-19-2.
function textContent(output,first_number,last_number){
  console.log(typeof(first_number),typeof(last_number));
  output.textContent = first_number + last_number; //где то происходит преобразование в тип str, где точно, я не разобрался.
}
function t19() {
  const first_number_tab = document.querySelector('.i-19-1');
  const last_number_tab = document.querySelector('.i-19-2');
  const output = document.querySelector('.out-19');
  let first_number = first_number_tab.value;
  let last_number = last_number_tab.value;
  if (first_number < 0 && last_number < 0){
    textContent(output,first_number,last_number);  
  }
  else if(first_number < 0 && last_number > 0){
    last_number = -last_number;
    textContent(output,first_number,last_number)
  }
  else if(first_number > 0 && last_number < 0){
    first_number = -first_number;
    textContent(output,first_number,last_number)
  }
  else{
    first_number = -first_number;
    last_number = -last_number;
    textContent(output,first_number,last_number)
  }
  
}
document.querySelector(".b-19").onclick = t19;
// Task 20
// При нажатии на кнопку .b-20 в out-20 выводится число - сколько раз была нажата кнопка .b-20;


function t20() {
  const button20 = document.querySelector('.b-20');
  const output = document.querySelector('.out-20');
  clickCount++;
  output.textContent = clickCount;
}
let clickCount = 0;
document.querySelector(".b-20").onclick = t20;