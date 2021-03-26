// let a = 0;
// let z = 0;
//
// // let b = a++;
// let b = a;
// a = a + 1; // a++
//
// // let x = ++z;
// z = z + 1 // z++
// let x = z;
//
// console.log(a, 'A');
// console.log(b, 'B');
//
// console.log(z, 'Z')
// console.log(x, 'X')

//
// let name = ['John', 'Harry', 'Varun', 'Nadia', 'Dong'];
//
// // console.log(name[4]);
//
// name.length = name.length - 1
//
// // for (let i = 0; i < name.length; i++) {
// for (let i = name.length - 1; i >= 0; i--) {
//   console.log(name[i]);
// }
//
//
// Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let abc = ['a', 'b', 'c'];
// let nums = 1;
//  //          3            7 < 7 + 3       // c++
// for (let c = abc.length; c < abc.length + 3; c++) {
//   abc[c] = nums++;
// }

// let abc = ['a', 'b', 'c'];
// let numbers = [1, 2, 3];
// //
// // for (let i = 0; i < numbers.length; i++) {
// //   abc.push(numbers[i]);
// // }
//
// for (const number of numbers) {
//   abc.push(number);
// }
//
// console.log(abc);
//
//
// let name = 'Viktor';
// let age = 25;
//
// console.log("Привіт, мене звати ${name}" + name + ".")
// console.log('Привіт, мене звати ${name}' + name + '.')
// console.log(`Привіт, мене звати ${name} ${age > 10}.`)
//
//
// // Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//
// // let arrMix = ['one', 'two', 3, true, true, 'boolean', '-34876', false, 7, true];
// // for (let i = 0; i < arrMix.length; i++) {
// //   if (typeof arrMix[i] === 'boolean') {
// //     console.log(arrMix [i]);
// //   }
// // }
// //
// // let arr = [true, null, 12, 'pop', 48, 'chpok', false, 'ghj', 89, 25];
// // for (let arrElement of arr) {
// //   if (typeof arrElement === 'boolean') {
// //     console.log(arrElement);
// //   }
// // }
//
//
// let arr2 = ['luck', 'work', 3, 'study', true, 9, 'mind', false, 8, 'winner'];
// let i = 0;
//
// while (i < arr2.length) {
//   if (typeof arr2 [i] === "string") {
//     console.log(arr2[i]);
//   }
//   i++;
// }

// let age = 25;
//
// if (age > 30) {
//   console.log('TRUE')
// } else {
//   console.log('FALSE')
// }
//
// age > 30 ? console.log('TRUE T') : console.log('FALSE T')


// let age = 25;
// // let name;
// //
// // if (age >= 25) {
// //   name = 'Victor'
// // } else {
// //   name = 'Dima'
// // }
//
// let name = age >= 25 ? 'Victor' : 'Dima'
//
// console.log(name);

// console.log(typeof []);


// let a = 0;
// let b = a;
//
// a = 99;
//
// console.log(a)
// console.log(b)


let obj = {
  name: 'Valdemar'
}

let obj2 = {
  name: 'Valdemar'
}

console.log(obj === obj2)

//
// let objC = obj;
//
// let obj2 = objC;
//
// obj2.name = 'Vovan';
//
// console.log(obj);
// console.log(obj2);
// console.log(objC);


let arr = [2, 2, 2];
let multiplied = 1;

for (const number of arr) {
  // multiplied = multiplied * number
  multiplied *= number
}

// i = i + 3 => i += 3
// i = i * 5 => i *= 5

console.log(multiplied);


//
// // ROKSA
// for (let h = 0; h < 3; h++) {
//   for (let m = 0; m < 60; m++) {
//     for (let s = 0; s < 60; s++) {
//       console.log(`${h}год ${m}хв ${s}c`);
//
//       if (h === 2 && m === 20 && s === 0) {
//         break;
//       }
//     }
//     if (h === 2 && m === 20) {
//       break;
//     }
//   }
// }
// // ROKSA
//
// for (let houre = 0; houre <= 2; houre++) {
//   for (let min = 0; min < 60; min++) {
//     for (let sec = 0; sec < 60; sec++) {
//       console.log(`${houre},${min},${sec}`)
//     }
//   }
// }
//
//
// for (let hours = 0; hours < 3; hours++) {
//   for (let minutes = 0; minutes < 60; minutes++) {
//
//     if (hours === 2 && minutes === 20) {
//       break;
//     }
//
//     for (let seconds = 0; seconds < 60; seconds++) {
//       console.log(hours + 'год. ' + minutes + 'хв. ' + seconds + 'сек.');
//     }
//   }
// }
//
// // LILYA
// let time = '0 : 0 : 0';
// let min = 0
// let sec = 0
//
// for (let hour = 0; hour <= 2; hour++) {
//   for (min = 0; min < 60; min++) {
//     for (sec = 0; sec < 60; sec++) {
//       if (time === '2 : 20 : 0') {
//         break
//       }
//       time = `${hour} : ${min} : ${sec}`
//       console.log(time);
//     }
//   }
// }
// // LILYA
//


// // Lilya: 1456.112060546875ms
// // Roksa: 1895.52001953125ms


let minutes = 19;

minutes = minutes < 10 ? `0${minutes}` : minutes;

console.log(minutes);
