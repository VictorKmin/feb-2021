// // // const { createUser, var22, myFunc } = require('./dir/file');
// // require('./dir/file');
// // //
// // // let userFunc = createUser('Nadiyka', 'nadya.niko@gmail.com');
// // //
// // // console.log(userFunc);
// // //
// // // console.log('"_____________________"');
// // // console.log(var22);
// // // console.log('"_____________________"');
// // //
// // // myFunc();
// //
// //
// // console.log('___________ APP ________________-');
// // console.log(__filename);
// // console.log(__dirname);
// // console.log('___________ APP ________________-');
//
//
// const fs = require('fs');
//
// const filePath = __dirname + '/dir/file.js';
// const filePath2 = __dirname + '/dir/fileCopy.js';
// const filePathToRemove = __dirname + '/dir/pp.php';
// const filePathNew = __dirname + '/movies/hello.world';
//
//
// // fs.writeFile(filePath, 'HELLO WORLD FEB-2021', (err) => {
// //   if (err) {
// //     console.log('__________________________________');
// //     console.log(err);
// //     console.log('__________________________________');
// //   }
// // })
//
// // fs.appendFile(filePath, 'Hi man \n', (err) => {
// //   if (err) {
// //     console.log('__________________________________');
// //     console.log(err);
// //     console.log('__________________________________');
// //   }
// // })
//
// // fs.readFile(filePath, (err, data) => {
// //     if (err) {
// //     console.log('__________________________________');
// //     console.log(err);
// //     console.log('__________________________________');
// //     return
// //   }
// //
// //   console.log(data.toString())
// // })
//
// // fs.mkdir(`${__dirname}/movies/home`, { recursive: true }, (err) => {
// //   console.log(err);
// // })
//
// // fs.readdir(`${__dirname}/movies/home`, (err, files) => {
// //   if (err) {
// //     console.log('__________________________________');
// //     console.log(err);
// //     console.log('__________________________________');
// //     return
// //   }
// //
// //   files.forEach(file => {
// //     fs.stat(`${__dirname}/movies/home/${file}`, (statError, fileStatistic) => {
// //       if (statError) {
// //         console.log('__________________________________');
// //         console.log(statError);
// //         console.log('__________________________________');
// //         return
// //       }
// //
// //
// //       console.log('*******************************************');
// //       console.log(file);
// //       console.log(fileStatistic.isFile());
// //       console.log(fileStatistic.size);
// //       console.log(fileStatistic.isDirectory());
// //       console.log('*******************************************');
// //     });
// //   })
// // });
//
// // fs.rmdir(`${__dirname}/movies/home`, {recursive: true}, (err) => {
// //   if (err) {
// //     console.log('__________________________________');
// //     console.log(err);
// //     console.log('__________________________________');
// //   }
// // });
//
// // fs.unlink(filePathToRemove, err => {
// //   if (err) {
// //     console.log('__________________________________');
// //     console.log(err);
// //     console.log('__________________________________');
// //   }
// // });
//
// // fs.rename(filePath2, filePathNew, err => {
// //   if (err) {
// //     console.log('__________________________________');
// //     console.log(err);
// //     console.log('__________________________________');
// //   }
// // })
//
//
// const path = require('path');
//
// let s = path.join(__dirname, 'movies', 'xxx', 'test', '/\/\/\/\/\/\/\/\/\/\////////zz.mp4');
//
//
// let s1 = path.normalize('/hello/world/node///////j//\/\/\/\/\//ass');
//
// // console.log(s);
// console.log(s1);



const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'movies', 'feb', 'mode.txt')

// let writeStream = fs.createWriteStream(filePath);


// for (let i = 0; i < 999999; i++) {
//   writeStream.write('TEST \n');
// }

let readStream = fs.createReadStream(filePath);
let writeStream = fs.createWriteStream(path.join(__dirname, 'movies', 'feb', 'tst.txt'));


// readStream.on('data', chunk => {
//   console.log('*****************************************************8');
//   console.log(chunk);
//   console.log('*****************************************************8');
// })
//
// readStream.on("end", () => {
//   console.log('Read is over');
// })

// readStream.on('data', chunk => {
//   writeStream.write(chunk)
// })


readStream.pipe(writeStream);
