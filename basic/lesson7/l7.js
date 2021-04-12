// // let element = document.querySelector('#green p.myClass');
// //
// //
// // element.setAttribute('id', 'hello-world');
// // element.setAttribute('group', 'feb-2021');
// //
// // element.removeAttribute('id');
// // element.removeAttribute('class');
// //
// // console.log(element);
//
//
//
// // const forma = document.forms.form;
// const forma = document.forms.myForm2;
// // const forma = document.forms[0];
//
// // console.log(forma);
// //
// // console.log(forma.someText.value);
// // console.log(forma.check1);
// //
// // forma.someText.oninput = (ev) => {
// //   console.log(ev.target.value);
// //   console.log('__________________');
// //   console.log(forma.someText);
// // }
//
// forma.okBtn.onclick = (ev) => {
//   ev.preventDefault();
//
//   const input = forma.someText.value;
//   const [firstCheck, secondCheck] = forma.check1;
//   const [firstRad, secondRad] = forma.rad;
//
//   // console.log(firstCheck.checked);
//   // console.log(secondCheck.checked);
//
//   console.log(firstRad.checked);
//   console.log(secondRad.checked);
//
//   let result = {
//     input,
//     isMale: firstRad.checked,
//     isFemale: secondRad.checked,
//     gender: firstRad.checked ? 'male' : 'female'
//   }
//
//   console.log(result);
// }
//
// // let elementById = document.getElementById('red');
// //
// // elementById.onclick = () => {
// //   console.log('CLICK GREEN')
// // }
//
//
// // let greenDiv = document.getElementById('green');
// //
// // greenDiv.onmouseleave = () => {
// //   console.log('LEAVE')
// // }
// // greenDiv.onmouseover = () => {
// //   console.log('OVER')
// // }
// //
// // greenDiv.onmousemove = (ev) => {
// //   const red = ev.x;
// //   const green = ev.y;
// //   const blue = (green + red) / 2;
// //
// //   ev.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
// // }
//
// let blue = document.getElementById('blue');
// blue.oncopy = () => {
//   console.log('cope');
//   alert('НІЗЯ КРАСТИ ЧУЖЕ !!!');
//
//   return false;
// }


let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');

red.onclick = (ev) => {
  ev.stopPropagation();
  console.log('RED')
}
green.onclick = (ev) => {
  ev.stopPropagation();
  console.log('green')
}
blue.onclick = (ev) => {
  ev.stopPropagation();
  console.log('blue')
}
//
// red.addEventListener('click', (ev) => {
//   // ev.stopPropagation();
//   console.log('RED')
// }, true)
//
// green.addEventListener('click', (ev) => {
//   // ev.stopPropagation();
//   console.log('green')
// }, true)
//
// blue.addEventListener('click', (ev) => {
//   // ev.stopPropagation();
//   console.log('blue')
// }, true)
//
// blue.onclick = () => {
//
// }
//
// console.log(blue);
