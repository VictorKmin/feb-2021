// let str = 'HELLO oooooo world';
// console.log(str[0]);
// console.log(str[1]);
//
// let indexOf = str.indexOf('world');
// let indexOf = str.indexOf('e');
// console.log(indexOf);
//
// let number = str.lastIndexOf('o');
// let numberStart = str.indexOf('o');
// console.log(number, numberStart);
//
// console.log(str[1]);
// console.log(str.charAt(1));
//
// console.log(str.charCodeAt(1));
//
// let s = str.concat(' RRRR');
// let s2 = str +' RRRR';
//
// console.log(s);
// console.log(s2);
//
// let replace = str.replace('o', 'z');
// let replaceAll = str.replaceAll('o', 'z');
//
// console.log(replace);
// console.log(replaceAll);
//
//
// // let slice = str.slice(str.length-2, str.length);
// let slice = str.slice(1, 3);
//
// console.log(str);
// console.log(slice);
//
// // 'HELLO oooooo world' => ['HELLO', 'oooooo', 'world'];
// let strings = str.split(' ');
// console.log(strings);
//
// let allowedNames = 'admin;ivan;dima;olga;ira'
// let allowedArr = allowedNames.split(';')
// console.log(allowedArr);
//
// const strArr = ['Hello', 'feb', 'js', 'java', 'python'];
// const join = strArr.join('...');
// console.log(join);
//
// let com = 'Victor.fzs@gmail.com              ';
// let com1 = '      victor.fzs@            gmail.com       ';
// let phone = '+77186409'
// //
// // // com = com.toLowerCase();
// // // com1 = com1.toLowerCase();
// // com = com.toUpperCase();
// // com1 = com1.toUpperCase();
// //
// // com = com.trim();
// // com1 = com1.trim();
// //
// // com1 = com1.replaceAll(' ', '')
// //
// // console.log(com);
// // console.log(com1);
// //
// // console.log(com === com1);
// //
// // let b = phone.startsWith('+380');
// // let endsWith = phone.endsWith('09');
// //
// // console.log(b);
// // console.log(endsWith);
//
// let b = com1.includes('@gmail.com');
// let b2 = com.includes('@gmail.com');
// let b3 = phone.includes('+380');
//
// console.log(b);
// console.log(b2);
// console.log(b3);

// FUNCTIONS


// function myFunction(whatIShouldBuy = 'Bread') {
//   document.write(`I bought ${whatIShouldBuy}`);
//   document.write('<hr>')
// }
//
// myFunction('Milk');
// myFunction('Eggs');
// myFunction('Beer');
// myFunction(['Cola', 'Whiskey', 'Сир Косичка']);
// myFunction(19);
// myFunction();
//
// // Lexical Environment
// {
//   let a = 'xxx';
//
//   console.log(a);
// }
//
// console.log(a);
//
//
// let bank = 99999;
//
// function calculator(sum, usdToUah = 28) {
//   const dollars = sum / usdToUah;
//   console.log(`You bought ${dollars} dollars`);
//
//   return dollars;
// }
//
// let boughtDollars = calculator(50000, 27.9);
//
// console.log(boughtDollars);
//
// boughtDollars = boughtDollars - 1500;
//
// console.log(boughtDollars);
//
// bank += boughtDollars;
//
// console.log(bank);
//
// let newPayDay = calculator(25000, 28.1);
//
// console.log(newPayDay);
// newPayDay = newPayDay - 200;
// bank += newPayDay;
//
// console.log(bank);
//
//
// function returnTest(user) {
//   if (user.age > 18) {
//     return 'Hello';
//   }
//
//   // return 'XXX';
//
//   console.log('TEST');
// }
//
// // let resulr = returnTest({ name: 'Dima', age: 22 });
// let resulr = returnTest({ name: 'Dima', age: 10 });
// // let resulr = returnTest({ name: 'Dima', age: 30 });
//
//
// console.log(resulr);


function argTest() {
  let sun = 0
  console.log(typeof arguments);

  for (const argument of arguments) {
    console.log(argument);
    sun += argument
  }

  console.log(sun / arguments.length);
}

// argTest(1, 6, 9, 2218, 8, 9, 0);
// argTest(1);
argTest(1, 9, 8, 0, 7, 6, -2, 9, 7, 88, 5678, 890, 724, 93);





let str = '   Harry      Potter      ' // Harry Potter
let str = '   Hermiona      Volta      ' // Hermiona Volta
let str = '   John      Doe      ' // John Doe
