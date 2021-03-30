const divka = document.getElementById('divka');
//
// console.log(divka);
//
// // divka.innerText = 'Feb-2021';
// // divka.innerHTML = '<div style="width:50px; height:50px; background-color: pink"></div>';
// // divka.innerHTML = 'TEST';
// // divka.innerText = '<div style="width:50px; height:50px; background-color: pink"></div>';
//
//
// let allPes = document.getElementsByTagName('p');
// // console.log(allPes.style);
// // allPes.style.backgroundColor = 'red'
//
// for (const singlePEl of allPes) {
//   singlePEl.style.color = 'blue';
// }

let ps = document.getElementsByTagName('p');
//
// console.log(ps[1]);
// console.log(ps[1].classList);
//
// ps[1].classList.add('boldText', 'myOwnClass', 'hellloWorld')
//
// console.log(ps[1].classList);
//
// ps[1].classList.remove('myOwnClass', 'hellloWorld')
//
// console.log(ps[1].classList);

// const smallDiv = document.createElement('div');
// smallDiv.style.opacity = .5;
// smallDiv.style.backgroundColor = 'yellow';
// smallDiv.innerText = 'ghkjhjk'
//
// // document.body.appendChild(smallDiv)
// // divka.appendChild(smallDiv)
// ps[0].appendChild(smallDiv)

// const userEl = document.createElement('user');
//
// divka.appendChild(userEl)
//


const students = [
  {name: 'Sergey', age: 20},
  {name: 'Julia', age: 18},
  {name: 'Vova', age: 25},
  {name: 'Dima', age: 9},
  {name: 'Rostik', age: 2},
];
   //   students[i]
for (const student of students) {
  const studentDiv = document.createElement('div');
  studentDiv.innerHTML = `Імя: ${student.name} <br> Вік: ${student.age}`;
  studentDiv.style.margin = '20px';
  studentDiv.style.border = '2px solid green';

  document.body.appendChild(studentDiv);
}




let user = {
  name: 'Victor',
  age: 25,
  wife: undefined,
  work: [
    'Dev', 'Builder'
  ],
  payment: NaN,
  car: true
}


let jsonUser = JSON.stringify(user);

console.log(user);
console.log(jsonUser);

let userParsed = JSON.parse(jsonUser);

console.log(userParsed);
userParsed.name = 'Valdemar'

console.log('____________________________');
console.log(user);
console.log(userParsed);
console.log('____________________________');


const pi = 3.141592
console.log(pi);

console.log( parseInt(pi) );
console.log( parseInt('9.998948934') );

console.log(parseFloat('9.998948934'));
console.log(+'9.998948934');
console.log(Number('9.998948934'));
