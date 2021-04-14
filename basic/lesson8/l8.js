// // // console.log(navigator);
// // //
// // // // navigator.geolocation.getCurrentPosition((data) => {
// // // //   console.log(data.coords.latitude);
// // // //   console.log(data.coords.longitude);
// // // // })
// // //
// // //
// // // const video = document.getElementById('videoWebCam');
// // //
// // // navigator.mediaDevices
// // //   .getUserMedia({ video: true, audio: false })
// // //   .then(videoStreat => {
// // //     // console.log(videoStreat);
// // //
// // //     video.srcObject = videoStreat;
// // //
// // //     video.play()
// // //   });
// // //
// // const btn = document.getElementById('forw');
// // //
// // // btn.onclick = () => {
// // //   history.forward()
// // // }
// // //
// // // console.log(history);
// // //
// // // // history.back()
// // //
// //
// //
// // localStorage.setItem('group_name', 'feb-2021');
// // localStorage.setItem('userName', 'Yaroslav');
// //
// // let item = localStorage.getItem('xxx');
// //
// // document.write(item);
// // console.log(item);
// //
// // let user = {
// //   name: 'Viktpr',
// //   age: 25,
// //   profession: {
// //     title: 'DEV',
// //     company: {
// //       name: 'Inoxoft'
// //     }
// //   }
// // }
// //
// // btn.onclick = () => {
// //   localStorage.setItem('userObj', user)
// //   localStorage.setItem('user', JSON.stringify(user))
// // }
// //
// //
// // let jsonUser = localStorage.getItem('user');
// //
// // let parse = JSON.parse(jsonUser);
// //
// // console.log(parse);
// // console.log(jsonUser);
// //
// // // localStorage.removeItem('userName');
// //
// // // localStorage.clear();
//
// // function withCB(cbFunc) {
// //   cbFunc();
// // }
// //
// //
// // withCB(function () {
// //   console.log('HELLO FROM CB')
// // });
//
//
// function orderPizza(cash, products, cb) {
//   if (products.includes('устриці')) {
//     cb('Нажаль устриць немає');
//     return;
//   }
//
//   if (cash < 200 && products.length > 3) {
//     cb('Таких піц немає', undefined);
//     return;
//   }
//
//   console.log(`Coocking pizza with ${products}`);
//   console.log('Pizza is done');
//   console.log('Pizza is comming');
//
//   cb(null, 'Я приїхав');
// }
//
// orderPizza(150, ['сир', "ковбаса", "кукурудза"],
//   function (failureCallFromPizza, suceessCallFromPizza) {
//     if (failureCallFromPizza) {
//       console.log('Мала, піцци не було')
//       console.log(failureCallFromPizza);
//       return
//     }
//
//     console.log(suceessCallFromPizza);
//     console.log('Шановна Анна. Піцца він Андрія приїзала :)')
//   }
// );
// console.log('__________________________________')
//
//
// orderPizza(100, ['ананас', "ковбаса", "кукурудза"],
//   function () {
//     console.log('Я забув термінал')
//   }
// );
//
// console.log('__________________________________')
//
// orderPizza(333, ['сир', "ковбаса", "кукурудза"],
//   function () {
//     console.log('Ваша піцца прибула до підїзду 5')
//   }
// );
// console.log('__________________________________')


function gotToVacation(money, covidTest, city, cb) {
  console.log(`Доюрого дня. У нас гарячі тури в ${city}`);

  if (covidTest) {
    //     ERROR              SUCCESS
    cb('Ми вас не пастимо');
    return;
  }

  console.log('На яку суму розраховуєте?');

  if (money < 1000) {
    //             ERROR                     SUCCESS
    cb('Нажалт, за такі гроші лише у Бердичів');
    return;
  }

  //ERROR           SUCCESS
  cb(null, `Ваш політ в ${city} заброньовано`);
}

gotToVacation(
  0,
  true,
  'Dakha',
  function (err, success) {
    if (err) {
      console.warn('Цього року нікуда не литемо, тому, що')
      console.error(err);
      return;
    }

    console.log('Пакуй валізи. Щавтра летимо в відпустку')
  }
)

gotToVacation(
  700,
  false,
  'Marmaris',
  function (err, data) {
    if (err) {
      console.warn('ДА Я НА НИХ В СУД ПОДАМ. МЕНІ СКАЗАЛИ ....')
      console.error(err);
      return;
    }

    console.log('Мала, я наршав нам відпустку, йоу')
  }
)

gotToVacation(
  200,
  false,
  'Marmaris',
  (err, data) => {
    if (err) {
      console.warn('Шось не так, але нічого. Полетимо іншим разом')
      console.error(err);
      return;
    }

    console.log('Мала, я наршав нам відпустку, йоу')
  }
)


function tourCB(err, data) {
  if (err) {
    console.warn('ДА Я НА НИХ В СУД ПОДАМ. МЕНІ СКАЗАЛИ ....')
    console.error(err);
    return;
  }

  console.log('Мала, я наршав нам відпустку, йоу')
}


//
// function xx(a, b) {
//   console.log(a);
//   console.log(b);
// }
//
// xx()

let arr = [1, 6, 9, 5, 0, -2];


arr.sort((a, b) => {
  console.log('THIS IS CALL BACK');
  return b - a
})

arr.reduce(() => {
  console.log(currentValue)
})

console.log(arr);


arr.map(function () {
  return value * 2
})
