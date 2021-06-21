const var22 = 22;

function createUser(name, email) {
  return {
    name,
    email
  }
}

// module.exports = createUser;


console.log('___________ FILE ________________-');
console.log(__filename);
console.log(__dirname);
console.log('___________ FILE ________________-');

module.exports = {
  var22,
  createUser,
  myFunc: () => {
    console.log('HELLO OWRLD FROM FILE.JS')
  }
};


(() => {
  console.log('SELF FUNCTION')
})()
