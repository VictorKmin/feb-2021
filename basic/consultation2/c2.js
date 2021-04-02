// // // // // // true
// // // // // // false
// // // // //
// // // // // // if (x === true) { // DONT DO THIS
// // // // // // if (x) { // do that!
// // // // //
// // // // // // FALSY
// // // // // // undefined, null, 0, '', NaN
// // // // //
// // // // // // TRUTHY
// // // // // // All other values
// // // // //
// // // // //
// // // // // // let arr = [0, 8, 9];
// // // // // let arr = [];
// // // // //  //    3
// // // // // if (arr.length) {
// // // // //   console.log('TRUE');
// // // // // } else {
// // // // //   console.log('FALSE')
// // // // // }
// // // //
// // // //
// // // //
// // // // console.time('logs')
// // // //
// // // // console.error('OPS');
// // // // console.warn('SOMETHING WENT WRONG');
// // // // console.table([9,9,0])
// // // // console.table({name: 'Victor', age: 25})
// // // //
// // // // console.timeEnd('logs')
// // // //
// // // //
// // // // console.time('Time1');
// // // // for (let i = 0; i < 999; i++) {
// // // //   document.write(i)
// // // // }
// // // // console.timeEnd('Time1');
// // //
// // //
// // // // Early Return Pattern
// // // function isAdult(bornYear) {
// // //   if (bornYear < 2003) {
// // //     console.log('Welcome');
// // //     return;
// // //   }
// // //
// // //   console.log('Not Welcome');
// // // }
// // //
// // // isAdult(2003)
// //
// //
// let usersWithId = [
//   {id: 1, name: 'vasya', age: 31, status: false},
//   {id: 2, name: 'petya', age: 30, status: true},
//   {id: 3, name: 'kolya', age: 29, status: true},
//   {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//   {user_id: 3, country: 'USA', city: 'Portland'},
//   {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//   {user_id: 2, country: 'Poland', city: 'Krakow'},
//   {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// console.time('Array in Array')
//
// for (const user of usersWithId) {
//   for (const address of citiesWithId) {
//     if (user.id === address.user_id) {
//       user.address = address;
//     }
//   }
// }
//
// // console.timeEnd('Array in Array')
// //
// //
// //
// console.log('******************');
// console.table(usersWithId);
// console.log('******************');
//
//
// function logger() {
//   console.log('OOPS');
//   console.log('TOO YOUNG');
// }
//
// let age = 0;
//
// // if (age > 20) {
// //   document.write('OLD')
// // } else {
// //   document.write('YOUNG')
// // }
//
// // Question ? TRUE : FALSE
// age ? alert('Hello') : logger();


// let user = {
//   name: 'Vicktro',
//   age: 25,
//   girl: 'karina'
// }
//
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


//Привіт, можна розібрати завдання ,створити функцію яка повертає найбільше число з масиву, завис копіпастити не хочу.


function returnator2000(arrayOnNumbers = []) {
  let max = arrayOnNumbers[0];


  console.time('BASIC')
  for (let i = 1; i < arrayOnNumbers.length; i++) {
    if (arrayOnNumbers[i] > max) {
      max = arrayOnNumbers[i]
    }
  }
  console.timeEnd('BASIC')

  max = arrayOnNumbers[0];

  console.time('WITH_VARIABLE')
  const length = arrayOnNumbers.length
  for (let i = 1; i < length; i++) {
    if (arrayOnNumbers[i] > max) {
      max = arrayOnNumbers[i]
    }
  }
  console.timeEnd('WITH_VARIABLE')

  max = arrayOnNumbers[0];

  console.time('RETURN_LOOP')
  for (let i = arrayOnNumbers.length - 1; i > 0; i--) {
    if (arrayOnNumbers[i] > max) {
      max = arrayOnNumbers[i]
    }
  }
  console.timeEnd('RETURN_LOOP')

  max = arrayOnNumbers[0];

  console.time('FOR_OF')
  for (const number of arrayOnNumbers) {
    if (number > max) {
      max = number;
    }
  }
  console.timeEnd('FOR_OF')




  return max;
}


let returnator = returnator2000([9990, 90, 19, -9]);

console.log(returnator);
