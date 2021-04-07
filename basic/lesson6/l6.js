let numbers = [1, 6, 9, 0, 17, 22, 99];
let strs = ['Dima', 'Sergio', 'Tania', 'Igor', 'Andrew', 'Stepan'];
let arrInArr = [1.2, 5, [8, 0, [9, 1], 8, 99, [0, 4, false, [8, [8, 8, [9, 9, [0, 0]]], 0, 1]]]];

// // let numbers1 = numbers.sort((a, b) => {
// //   console.log(a, 'A');
// //   console.log(b, 'B');
// //   console.log('_________________________');
// //   return a - b;
// // });
//
// let strings = strs.sort((a, b) => {
//   if (a < b) {
//     return 1
//   }
//
//   return -1
// });
//
// console.log(strings);
//
// let numbers1 = numbers.filter((value) => {
//   console.log(value);
//
//   return value % 2 === 0;
// });
//
// console.log(numbers1);
//
//
// let strings = strs.filter(name => name.length > 5);
//
// console.log(strings);
//
//
// let strings1 = strs.reverse();
// console.log(strings1);
//
// let some = numbers.some(number => number > 0);
// let every = numbers.every(number => number > 0);
//
// console.log(some, 'SOME');
// console.log(every, 'EVERY');
//
// let tName = strs.find(name => name.startsWith('S'));
// let findIndex = strs.findIndex(name => name.startsWith('X'));
//
// console.log(tName);
// console.log(findIndex);
//
// numbers.forEach((value, index) => {
//   if (index % 2 === 0) {
//     return 98989;
//   }
//
//   console.log(value);
//   console.log('_______________________');
// });
//
// console.log(arrInArr);
//
// let flat = arrInArr.flat(3);
//
// console.log(flat);
//
// let map = numbers.map((number, i) => number * i);
// console.log(map);
//
//
// let map = numbers.map((value, index) => {
//   if (index % 2 === 0) {
//     return value * index
//   }
//
//   return value
// });
//
// console.log(map);
//
// let usersWithId = strs.map((name, index) => {
//   return {
//     id: index + 1,
//     name
//   }
// });
//
// console.log(usersWithId);
// console.log(strs);
//
//
// let users = [
//   { name: 'Viktor', car: true },
//   { name: 'Fima', car: false },
//   { name: 'Olga', car: true },
// ]
//
//
// let map = users.map(user => {
//   user.age = 22;
//
//   return user;
// });
//
// console.log(map);
//
// let number = numbers.reduce((acc, currentValue) => {
//   console.log(acc);
//   console.log(currentValue);
//   console.log('_____________________________');
//
//   return acc + currentValue;
// });
//
// console.log(number);

let users = [
  { name: 'Dima', age: 10 },
  { name: 'Nastya', age: 22 },
  { name: 'Volodya', age: 19 },
  { name: 'Yarko', age: 39 },
  { name: 'Yevhen', age: 14 },
  { name: 'Taras', age: 4 }
];

//
// let reduce = users.reduce((acc, currentValue) => {
//   console.log(acc);
//   console.log(currentValue);
//   console.log('_____________________');
//
//   return acc + currentValue.age;
// }, 0);
//
// console.log(reduce);

users.reduce((acc, value) => {
  if (value.age > 18) {
    value.car = true;

    acc.push(value);
  }

  console.log(acc);
  return acc;
}, []);
