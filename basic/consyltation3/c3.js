// // let supermatket = {
// //   egs: 10,
// //   bread: 20,
// //   beer: 99,
// //   mayinez: 7,
// //   fish: 8
// // }
// //
// // // const egs = supermatket.egs;
// // // const bread = supermatket.bread;
// // // const fish = supermatket.fish;
// //
// // const { egs, beer, fish } = supermatket;
// //
// // console.log(egs);
// // console.log(fish);
//
//
// const user =  {
//   name: 'Viktor',
//   age: 25,
//   car: true,
//   payment: NaN,
//   city: 'Lviv',
//   laptop: {
//     producer:'Dell',
//     model: 'Precesion'
//   }
// }
//
// // const car = user.car
// // const name = user.name
//
// const name = 'Vova';
//
// const { name: userName, age, laptop: {model} } = user;
// // const userName = user.name;
//
// console.log(name);
// console.log(userName);
//
//
// const names = ['Vitalik', 'Dima', 'sdsf', 'Eks'];
//
// const [, Dimasik, , eks] = names;
//
// console.log(Dimasik);
// console.log(eks);
//
//
// let users = [
//   { age: 55 },
//   { age: 40, name: 'Igor' },
//   { age: 25, name: 'Mykola' },
//   { age: 10, name: 'Andrii' },
//   { age: 1, name: 'Taras' },
// ]
//
// // const [{ name: oldest }] = users;
// // const [{ name: oldest = 'userName' }] = users;
// //
// // const [{ name = 'userName' }] = users;
// // const name = users[0].name || 'userName2'
//
// console.log(name);
//
//
// const user =  {
//   name: 'Viktor',
//   age: 25,
//   car: true,
//   payment: NaN,
//   city: 'Lviv',
//   laptop: {
//     producer:'Dell',
//     model: 'Precesion'
//   }
// }
// const names = ['Vitalik', 'Dima', 'Ira', 'Eka'];
// //
// // //
// // // const { age, name, ...other } = user;
// // // //
// // // // other.city = 'Kyiv';
// // // // other.laptop.model = 'HP';
// // // //
// // // // console.log(other);
// // // // console.log(user);
// // //
// // // const {...userCopy} = user;
// // //
// // //
// // // userCopy.age = 22;
// // //
// // // console.log(user);
// // // console.log(userCopy);
// //
// //
// const [bratishka, ...otherFriends] = names;
//
// const [one] = otherFriends;
//
// console.log(one);
// const [...otherFriends] = names;
//
// // console.log(bratishka);
// console.log(otherFriends);
//
//
// console.log(Math.max(...[10, 99, 7, 0, 9]));
// console.log(Math.max([10, 99, 7, 0, 9]));

// function Animal(name) {
//   this.name = name;
//
//   //// THIS IS NOT OK
//   // this.run = function (speeeeed) {
//   //   console.log(`I am ruuning with ${speeeeed}km/h`)
//   // }
// }
//
// Animal.prototype.run = function (speed) {
//   console.log(`I am running with ${speed}mp/h`);
// }
//
// function Hamster(name, house) {
//   this.name = name;
//   this.house = house;
// }
//
// // Hamster.prototype = Animal.prototype;
// // Hamster.prototype.__proto__ = Animal.prototype;
// Hamster.prototype = Object.create(Animal.prototype);
//
// Hamster.prototype.run = function () {
//   console.log('I cant run')
// }
//
// const bosya = new Animal('Pascal');
// const johny = new Hamster('John', 'Red');
// johny.run(10);
// bosya.run(200);
//
// const bosya2 = new Animal('Roman');
//
//
//
// console.log(bosya);
// console.log(bosya2)
//
// bosya.run(99)
// bosya2.run(20)

// function Hamster(name) {
//   this.name = name;
//   this.stomach = [];
// }
//
// // Hamster.prototype.stomach = [];
// Hamster.prototype.findFood = function (food) {
//   this.stomach.push(food)
// }
//
// const Givrik = new Hamster('Gavrik');
// const Rozchoska = new Hamster('Rozchoska');
//
// Givrik.findFood('Apply');
// Givrik.findFood('Peach');
//
// console.log(Givrik.stomach);
// console.log(Rozchoska.stomach);


function recursatorHard(arrayToIterate, i = 0, obj = {}) {
  console.log(i)
  console.log(arrayToIterate[i])
  console.log('____________________________')

  if (i < arrayToIterate.length) {
    obj[i] = arrayToIterate[i];

    return recursatorHard(arrayToIterate, ++i, obj);
  } else {
    return obj;
  }
}

function recursator(arrayToIterate, i = 0) {
  console.log(i)
  console.log(arrayToIterate[i])
  console.log('____________________________')

  if (i < arrayToIterate.length - 1) {
    recursator(arrayToIterate, ++i);
  }
}


let arr = ['Ira', 'Dima', 'Vova', 'Ivan', 5];

let recursator1 = recursator(arr);
console.log(recursator1);

let recursatorHard1 = recursatorHard(arr);
console.log(recursatorHard1);
