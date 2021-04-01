// // function writer() {
// //   document.write('Hello from FEB-2021');
// //   document.write('<br>');
// // }
// //
// // writer();
// // writer();
// // writer();
// // writer();
// // writer();
// // writer();
// // writer();
//
//
// // function holidays(country = 'Ukraine', city) {
// //   document.write(`Hooray we flight to ${country} at ${city}`);
// //   document.write('<br>')
// // }
// //
// //
// // holidays('Turkey', 'Marmaris');
// // holidays('Egypt', 'Kair');
// // holidays('Bangladesh', 'Dakha');
// // holidays();
//
//
// // {
// //   let a = 99;
// //
// //   console.log('_________________');
// //   console.log(a);
// //   console.log('_________________');
// // }
// //
// // console.log(a);
//
// // let bank = 999;
// //
// // function changeMoney(sum, currentExchange = 28) {
// //   let dollars = sum / currentExchange;
// //   console.log(`Ми купили ${dollars}$`);
// //
// //   return dollars;
// // }
// //
// // let money = changeMoney(20000, 27,9);
// // money = money - 500;
// //
// // bank += money;
// //
// // console.log(bank);
// //
// // let payDay = changeMoney(25000);
// // bank += payDay;
// //
// // console.log(bank);
//
//
// // function sumator() {
// //   let sum = 0;
// //
// //   for (const argument of arguments) {
// //     sum += argument;
// //   }
// //
// //   console.log(arguments);
// // }
// //
// // sumator(2, 2, {name: 'Dimas'});
// // sumator(1, 9, 8, 73, 0, [1,5,67,78]);
// // sumator(1, 9, 8, 73, 0, 7, 37, 83, 38, 3, 3, 3, 30, 'XXX');
//
//
// declar()
// // exps()
//
// // DECLARATION
// function declar() {
//   console.log(22);
// }
//
// // EXPRESSION
// // let exps = function () {
// //   console.log(33);
// // }
//
// // ARROW FUNCTION
//
// let arrow = () => {
//   // console.log(arguments);
//   console.log(33);
// }
//
//
// arrow();
//
// function exch(monye) {
//   return monye * 2
// }
// //
// // let excgange = (money, kurs) => {
// //   return money / kurs;
// // }
//
// let excgange = (money, kurs) => money / kurs;
//
// let excgange1 = excgange(20000, 28);
//
// console.log(excgange1);
//
//
// // (() => {
// //   console.log('SELF');
// // })()
// //
// // (function() {
// //   console.log('DECLS');
// // })()
//
//


// STRINGS
let str = '      Hello            world I am developer of JS       ';

// let s = str.trim();
let s = str.replaceAll(' ', '');

console.log(s);

// console.log(str.length);
// console.log(str[8]);

//
// let s = str.replace('o', 'X');
// let sAll = str.replaceAll('op', '.....');
//
// console.log(s);
// console.log(sAll);
//
// let s = str.slice(1, 3);
// let s = str.slice(str.length - 2, str.length);
// console.log(s);
//
// let strings = str.split('o');
// let strings = str.split(' ');
//
// console.log(strings);

// let newVar = ['Hello', 22, false, 'FEB', 'XXX'];
// let s = newVar.join(' ');
// console.log(s);

let email1 = 'Victor.fzs@gmal.com'
let email2 = 'victor.fzs@gmal.com     '

// email1 = email1.toLowerCase();
// email2 = email2.toLowerCase();
// email1 = email1.toUpperCase();
// email2 = email2.toUpperCase();
//
// console.log(email1);
// console.log(email2);
//
// email1 = email1.trim();
// email2 = email2.trim();
//
// console.log(email1);
// console.log(email2);

// let b = email1.includes('@gmal.com');
// console.log(b);

let number = '786947661'
let startsWith = number.startsWith('+1');

if (!startsWith) {
  number = `+1${number}`
}

console.log(number);

let endsWith = number.endsWith('+1');
console.log(startsWith);
console.log(endsWith);

// console.log(email1 === email2);

