// const p1 = function () {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('p1')
//     }, 3000)
//   })
// }
//
// const p2 = function () {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('p2')
//     }, 1000)
//   })
// }
//
// const p3 = function () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('p3')
//     }, 100)
//   })
// }
//
// Promise.all([p1(), p2(), p3()])
//   .then(value => {
//     console.log(value);
//   })
//   .catch(e => {
//     console.log(e);
//   })
//
// Promise.allSettled([p1(), p2(), p3()])
//   .then(value => {
//     console.log('RESOLVE');
//     console.log(value);
//   })
//   .catch(e => {
//     console.log(e);
//   })
//
// Promise.race([p1(), p2(), p3()])
//   .then(value => {
//     console.log(value);
//   })
//   .catch(e => {
//     console.warn(e)
//   })


// https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5
//
// fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
// .then(value => {
//   return value.json()
// })
//   .then(json => {
//     console.log(json);
//
//     json.forEach(({ccy, base_ccy, buy, sale}) => {
//       console.log(ccy, base_ccy, buy, sale);
//
//       document.write(`${ccy}: ${base_ccy} - Buy: ${buy}; Sale: ${sale}`);
//       document.write(`<br>`);
//     })
//   })
//
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(value => {
//   return value.json()
// })
//   .then(json => {
//     console.log(json);
//   })
//
//
// let bird = {
//   name: 'Iron Bird',
//   age: 19,
//   position: 'Junior',
//   payment: 9999999
// }
//
// let karina = {
//   name: 'Karina',
//   age: 15,
//   position: 'Senior',
//   payment: 1500
// }
//
// let viktor = {
//   name: 'Victor',
//   age: 25,
//   position: 'Middle',
//   payment: 500
// }
//
// // function sayHello() {
// //   console.log(this)
// //   console.log(`${this.name} say hello to you`);
// //   console.log(`_______________________`);
// // }
// //
// //
// // sayHello.call(bird)
// // sayHello.apply(karina)
// //
// // let sayHelloKarina = sayHello.bind(karina);
// //
// // sayHelloKarina()
// // sayHelloKarina()
// // sayHelloKarina()
// // sayHelloKarina()
//
//
// function changePayment(changePayment, newPosition = this.position) {
//   this.payment += changePayment;
//   this.position = newPosition;
// }
//
// changePayment.call(bird, 100000, 'Strong Junior')
// console.log(bird);
//
// changePayment.apply(karina, [500, 'Tech Lead']);
//
// console.log(karina);
//
// let changePaymentVik = changePayment.bind(viktor);
//
// changePaymentVik(100)
// changePaymentVik(50)
// changePaymentVik(200)
// changePaymentVik(0)
//
// console.log(viktor);



// let days = ['Monday', 'Sunday', 'Monday'];
//
//
// const uniqueDays = new Set(days);
//
// console.log(uniqueDays);
//
// const daysArr = [...uniqueDays]
// const daysArr2 = Array.from(uniqueDays)
//
//
// let users = [
//   {name: 'Karina'},
//   {name: 'Karina'}
// ];
//
// let uniqueUsers = new Set(users);
//
// console.log(uniqueUsers);

//
// const map4ik = new Map();
//
// const kari = {name: 'Karina'}
//
// map4ik.set({name: 'Karina'}, 15);
// map4ik.set(kari, 15);
// map4ik.set('hello', [1,2,5,6,6]);
// map4ik.set('hello', [1,3]);
// map4ik.set([9,0,9], 'Array');
//
// console.log(map4ik);
//
// let hello = map4ik.get('hello');
// let karinka = map4ik.get({name: 'Karina'});
// let karinkaReal = map4ik.get(kari);
// map4ik.delete(kari);
//
// map4ik.clear()
//
// console.log(map4ik);
//
// console.log(hello);
// console.log(karinka);
// console.log(karinkaReal);


// CLOSURES
//
// let _password = '111';
//
//
// _password = 999
//
// console.log(_password);


function closuresCounter() {
  let x = 0;

  return () => {
    x++
    console.log(x)
  }
}

const counter = closuresCounter();

console.log(counter);
counter()
counter()
counter()
counter()

const counter2 = closuresCounter();

counter()
counter()
counter()
console.log('________________')
counter2()
counter2()
counter2()

counter()



//
// function user() {
//   let _age = 22;
//   let _name = 'Viktor'
//
//   function getAge() {
//     return _age;
//   }
//
//   function getName() {
//     return _name
//   }
//
//   function setAge(newAge) {
//     if (newAge < _age) {
//       alert('No way!');
//       return
//     }
//
//     _age = newAge
//   }
//
//   function setName() {
//     alert('Not allowed!')
//   }
//
//
//   return {
//     getAge,
//     getName,
//     setAge,
//     setName
//   }
// }
//
// const myUser = user();
//
// myUser.setAge(25)
//
// console.log(myUser.getAge());
// console.log(myUser.getName());
//
//
// class UserX {
//   constructor(age, name) {
//     this._age = age
//     this._name = name
//   }
//
//   getAge() {
//     return this._age
//   }
// }
//
//
// let user2 = new UserX(22, 'Dima');
//
// user2._name = 'XXX'
//
// console.log(user2);
