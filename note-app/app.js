//const fs = require('fs');
//const name = require('./utils.js');

const validator = require('validator');
const getNotes = require('./notes.js');

console.log(validator.isEmail("hsdyahoo.fr"));
console.log('You are Welecom ... ',getNotes()); 
