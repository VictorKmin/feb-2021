// // setTimeout(() => {
// //   console.log(1)
// // }, 0);
// //
// // console.log(2);
// //
// // setTimeout(() => {
// //   console.log(3)
// // }, 0)
//
//
// document.getElementById('btn').onclick = () => {
//   console.log('clc');
// }
//
//
// let i = 0;
// while (i < 999999999) {
//   i++
// }


// function goWork(isJobDone, cb) {
//   setTimeout(() => {
//       if (isJobDone) {
//         console.log('Job is done');
//         cb(null, 500);
//       } else {
//         cb('Job is not done');
//       }
//   }, 1000)
// }
//
// function buyStaff(money, cb) {
//   setTimeout(() => {
//     if (money > 333) {
//       console.log('Buy something');
//       cb(null, money - 333);
//     } else {
//       cb('Not money no honey')
//     }
//   }, 500)
// }
//
//
//
// goWork(true, (err, money) => {
//   if (!err) {
//     console.log(money);
//
//     buyStaff(money, (err, data) => {
//       if (!err) {
//         console.log(data);
//       } else {
//         console.warn(err)
//       }
//     })
//   } else {
//     console.error(err)
//   }
// });


// function goWork(isJobDone) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isJobDone) {
//         console.log('Job is done');
//         resolve(666)
//       } else {
//         reject('Job is not done')
//       }
//     }, 1000)
//   })
// }
//
// function buyStaff(money) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (money > 333) {
//         console.log('Buy something');
//         resolve(money - 333);
//       } else {
//         reject('Not money no honey')
//       }
//     }, 500)
//   })
// }
//
//
// goWork(true)
//   .then(value => {
//     console.log(value);
//     return buyStaff(value)
//   })
//   .then(value => {
//     console.log(value);
//   })
//   .catch(rerer => {
//     console.warn(rerer);
//   })
//   .finally(() => {
//     console.log('FINALLY');
//   })

function goWork(isJobDone) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isJobDone) {
        console.log('Job is done');
        resolve(500)
      } else {
        reject('Job is not done')
      }
    }, 1000)
  })
}

function buyStaff(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money > 333) {
        console.log('Buy something');
        resolve(money - 333);
      } else {
        reject('Not money no honey')
      }
    }, 500)
  })
}



async function clearHouse() {
  try {
    let money = await goWork(false);
    console.log(money);

    money = await buyStaff(money);
    console.log(money);
  } catch (err) {
    console.warn(err);
  }
}

clearHouse()



