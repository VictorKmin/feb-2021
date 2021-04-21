// // let arr = [12, 9, 0, 12, 7, 2, 22, 33, 1];
// //
// // // function findMax(arrToProcess, index = 0, maxNum) {
// // //   if (!Array.isArray(arrToProcess) || !arrToProcess.length) {
// // //     return;
// // //   }
// // //
// // //   if (typeof maxNum !== "number") {
// // //     maxNum = arrToProcess[0];
// // //     return findMax(arrToProcess, ++index, maxNum);
// // //   }
// // //
// // //   if (index < arrToProcess.length) {
// // //     if (maxNum < arrToProcess[index]) {
// // //       maxNum = arrToProcess[index]
// // //     }
// // //
// // //     return findMax(arrToProcess, ++index, maxNum);
// // //   }
// // //
// // //   return maxNum;
// // // }
// //
// // function findMax(arrToProcess, index = 1, maxNum = arrToProcess[0]) {
// //   if (index < arrToProcess.length) {
// //     if (maxNum < arrToProcess[index]) {
// //       maxNum = arrToProcess[index]
// //     }
// //
// //     return findMax(arrToProcess, ++index, maxNum);
// //   }
// //
// //   return maxNum;
// // }
// //
// //
// //
// //
// // let maxNumber = findMax(arr);
// // console.log(maxNumber);
// //
// //
// // function wakeUp(isWorkingDay) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       if (isWorkingDay) {
// //         resolve('Waking Up')
// //       } else {
// //         reject('5 minutes more, mum')
// //       }
// //     }, 1000)
// //   });
// // }
// //
// // function haveBreakfast(isHaveTime) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       if (isHaveTime) {
// //         resolve('Om nom nom')
// //       } else {
// //         reject('Will eat at office')
// //       }
// //     }, 2000)
// //   });
// // }
// //
// // let isWorkingDay = confirm('Is working day');
// //
// // wakeUp(isWorkingDay)
// //   .then(success => {
// //     console.log(success);
// //
// //     let isHaveTime = confirm('Is have time');
// //
// //     return haveBreakfast(isHaveTime);
// //   })
// //   .then(value => {
// //     console.log(value);
// //   })
// //   .catch(reason => {
// //     console.error(reason)
// //   })
// //
// //
// // function wakeUp(isWorkingDay, cb) {
// //   setTimeout(() => {
// //     if (isWorkingDay) {
// //       cb(null, 'Waking Up')
// //     } else {
// //       cb('5 minutes more, mum')
// //     }
// //   }, 2000)
// // }
// //
// // function haveBreakfast(isHaveTime, cb) {
// //   setTimeout(() => {
// //     if (isHaveTime) {
// //       cb(null, 'Om nom nom')
// //     } else {
// //       cb('Will eat at office')
// //     }
// //   }, 1000)
// // }
// //
// //
// // wakeUp(true, (err, data) => {
// //   console.log('wakeUp RUNNING');
// //
// //   if (!err) {
// //     haveBreakfast(false, (err, data) => {
// //       console.log('haveBreakfast RUNNING')
// //       if (!err) {
// //         console.log(data, 'data');
// //       } else {
// //         console.error(err)
// //       }
// //     });
// //   } else {
// //     console.error(err)
// //   }
// // });
// //
// // let users = [
// //   {name: 'Yaroslav', age: 22},
// //   {name: 'Dimas', age: 30},
// //   {name: 'Olga', age: 10},
// //   {name: 'Karina', age: 15},
// //   {name: 'Anna', age: 20},
// //   {name: 'Artur', age: 19},
// // ]
// // //
// // // users.reduce((acc, value) => {
// // //   console.log(acc);
// // //   console.log(value);
// // //   console.log('______________________');
// // //
// // //   return acc + value.age;
// // // }, 0)
// //
// // let reduce = users.reduce((acc, value) => {
// //   if (value.age > 18) {
// //     value.car = true;
// //     acc.push(value);
// //   }
// //
// //   return acc;
// // }, []);
// //
// // console.log(reduce);
//
//
// let arr = [12, 9, 0, 12, 7, 2, 22, 33, 1];
//
// let number = arr.reduce((maxNumber, currentElement) => {
//   if (maxNumber < currentElement) {
//     maxNumber = currentElement;
//   }
//
//   return maxNumber;
// });
//
// console.log(number);
//
//
// let max = arr[0];
//
// arr.forEach(number => {
//   if (max < number) {
//     max = number
//   }
// })
//
// console.log(max);


// console.log(z);
//
// {
//   let x = 10
//   var z = 100
// }
//
// console.log(z);
// console.log(x);
//
