// console.log(document);

const greenDiv = document.getElementById('divka');

console.log(greenDiv);
//
// // greenDiv.style.backgroundColor = '#9810be';
// // greenDiv.innerHTML = 'HELLO WORLD 222';
// // greenDiv.innerText = 'HELLO WORLD';
// // greenDiv.innerText = '<hr> HELLO';
// // greenDiv.innerHTML = 'HELLO <hr>';
//
// // let boldT = document.getElementsByClassName('boldText');
// //
// // // console.log(boldT);
// //
// //
// // for (let i = 0; i < boldT.length; i++) {
// //   boldT[i].style.backgroundColor = 'black';
// //   boldT[i].style.fontSize = '24px';
// //   boldT[i].innerText = `FEB-202${i}`
// // }
// //
// //
// // let allDivs = document.getElementsByTagName('div');
// //
// // const red = Math.random() * 255;
// // const green = Math.random() * 255;
// // const blue = Math.random() * 255;
// //
// // console.log(allDivs);
// //
// // allDivs[1].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
//
//
// let htmlDivElement = document.createElement('div');
// htmlDivElement.style.width = '100px'
// htmlDivElement.style.height = '50px'
// htmlDivElement.style.backgroundColor = 'pink';
//
// htmlDivElement.classList.add('myOwnClass', 'xxx');
// // htmlDivElement.classList.remove('myOwnClass');
// console.log(htmlDivElement.classList);
//
// // document.body.appendChild(htmlDivElement);
// greenDiv.appendChild(htmlDivElement);
//
// let pes = document.getElementsByTagName('p');
//
// for (let i = 0; i < pes.length; i+=2) {
//   pes[i].classList.add('myOwnClass')
// }
//
//
//
// const students = [
//   {name: 'Sergey', age: 20},
//   {name: 'Julia', age: 18},
//   {name: 'Vova', age: 25},
//   {name: 'Dima', age: 9},
//   {name: 'Rostik', age: 2},
// ];
//
// for (let i = 0; i < students.length; i++) {
//   const studentDiv = document.createElement('div');
//
//   studentDiv.style.backgroundColor = '#0378a9';
//   studentDiv.style.margin = '25px';
//
//   studentDiv.innerHTML = `
//     Hello my name is ${students[i].name} <br>
//     I am ${students[i].age} years old`;
//
//   document.body.appendChild(studentDiv);
// }
//
// /// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
//
// let user = {
//   name: 'Victor',
//   wife: undefined,
//   payment: NaN,
//   age: 25,
//   work: [
//     { tittle: 'Developer' },
//     { tittle: 'Builder' },
//   ]
// };
//
//
// document.write(user)
//
// let userJson = JSON.stringify(user);
//
// document.write('<br>')
// document.write(userJson)
//
// console.log(typeof userJson)
// let parsedUser = JSON.parse(userJson);
//
// console.log(user);
// console.log(userJson);
// console.log(parsedUser);
//
//
//
//
//
//
//
//
//
//
//
//
//


/////////////////////////////////////////////////

let divsArr = ['Hello', 'TEST', 'Lorem', 'XXX'];

const pes = document.getElementsByTagName('p');

console.log('_______________________________');
console.log(pes);
console.log('_______________________________');

for (let i = 0; i < divsArr.length; i++) {
  console.log(divsArr[i]);

  const divToAppend = document.createElement('div'); //'<div></div>'

  divToAppend.innerText = divsArr[i] //'<div>Hello</div>'
  divToAppend.style.color = 'gold'//'<div style="color:gold">Hello</div>'
  divToAppend.style.display = 'flex'

  // document.body.appendChild(divToAppend);
  // document.getElementById('divka').appendChild(divToAppend);
  pes[1].appendChild(divToAppend);
}

