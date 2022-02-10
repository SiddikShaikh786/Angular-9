const { Console } = require('console');
const validator = require('validator')
const isValid = validator.isEmail('foo@bar.com'); //=> true
console.log(isValid)
const isLower = validator.isLowercase('siddiddikKKKK')
console.log(isLower)
const isupperCase = validator.isUppercase('SSSSSSHHHH')
console.log(isupperCase)
const isAlphaNumeric = validator.isAlphanumeric('cghhg1265')
console.log(isAlphaNumeric);
const isString = validator.isLocale('this is red colour')
console.log("string : ", isString);