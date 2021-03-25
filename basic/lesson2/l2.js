let str = 'Srt';
let nu = 22;
let b = true;

let und = undefined;
let nul = null;

let obj = {};

let symb = Symbol('');
// let bI = BigInt(99999999999999999999999999999999999999999999999);

// console.log(bI)
//
//
//
// let arr = [22, 'Hello', false, 17, 'true', 'TEST'];
// console.log(arr);
//
// console.log(arr[1])
// console.log(arr[2])
//
// arr[1] = 'FEB-2021'
// arr[6] = 6789;
//
// arr[99] = '67'
//
// console.log(arr);
//
// console.log(arr[999999999]);
//
// console.log(arr.length);
//
// arr.length = 0;
// arr = [];
//
// console.log(arr);
//
//
// let arr = [22, [0, 2, 5.59], 'Ira', 'Dima']
//
// console.log(arr);
//
// console.log(arr[1][2]);

// let a = [2, 8, 5, 9];
//
// a.push([8, 88, 8, 8]);
// a.push('TEST');
// a.push('xxx');
//
// a.unshift('Viktor');
// a.unshift('Anna');
//
//
// let number = a.pop();
// let number1 = a.pop();
// a.pop();
// a.pop();
//
// let shiftedElement = a.shift();
// let shiftedElement1 = a.shift();
//
// console.log(a);
// console.log(shiftedElement);
// console.log(shiftedElement1);


// let user = {
//   name: 'Viktor',
//   age: 25,
//   car: true,
//   jobs: ['Developer', 'Teacher'],
//   mainJob: {
//     title: 'Middle Node.js',
//     company: {
//       name: 'Inoxoft'
//     }
//   }
// };
// //
// // console.log(user);
// //
// // console.log(user.name);
// // console.log(user.jobs[0]);
// // console.log(user.mainJob.company.name);
// // console.log(user.girl);
// //
// // user.car = 'Chevrolet';
// //
// // user.girl = 'Karina';
// // user.phone = 'Samsung';
// //
// // delete user.mainJob;
// //
// // console.log(user);
//
// let keys = Object.keys(user);
// let values = Object.values(user);
// console.log(keys);
// console.log(values);


let arr = ['Телевізов', 'Лампочка', 'Пульт', 'Ноутбук', "Телефон"];


// for (let i = 0; i < arr.length; i = i + 1) {
//
//   if (i === 1) {
//     continue;
//   }
//
//   console.log('Привіт, я маю: ' + arr[i]);
// }

// i++ === i = i+ 1

// let i = 0;
//
// while (i < arr.length) {
//   if (i !== 1) {
//     console.log(arr[i]);
//   }
//
//   i++;
//
//
//   // if (i === 1) {
//   //   i++
//   // } else {
//   //   console.log(arr[i]);
//   //   i++
//   // }
// }
//
//
// console.log(i);


// alert("Привіт я маю: " + arr[0]);
// alert("Привіт я маю: " + arr[1]);
// alert("Привіт я маю: " + arr[2]);


// //      arr[i]
// for (let item of arr) {
//   console.log(item);
//   console.log('_________________');
// }//      arr[i]


//
// let user = {
//   name: 'Viktor',
//   age: 25,
//   car: true,
//   jobs: ['Developer', 'Teacher'],
//   mainJob: {
//     title: 'Middle Node.js',
//     company: {
//       name: 'Inoxoft'
//     }
//   }
// };
//
// // console.log(user.mainJob);
//
// for (let item in user) {
//   console.log(item);
//   console.log(user[item]);
//   console.log('_________________');
// }



let users = [
  {name: 'Andrii', age: 20},
  {name: 'Karina', age: 15},
  {name: 'Olga', age: 21},
  {name: 'Ira', age: 10},
  {name: 'Viktor', age: 25},
  {name: 'Dimas', age: 56},
];

for (const user of users) {
  document.write("Привіт, мене звати " + user.name + ". Мені є " + user.age + ' років');
  document.write('<hr>')
}
