const TIME = require('./dataFormat.js');

const dt = new Date();
console.log(dt); // 2021-07-23T16:20:20.000Z
console.log(TIME.dateFormate(dt)); // 2021-07-23 16:20:20

console.log('-----------------------------------');
const moment = require('moment');

// console.log(moment)

const date = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(date); // 2021-07-23 16:20:20
const date2 = moment().format('YYYY-MMMM-Do HH:mm:ss');
console.log(date2); // 2021-July-23rd 16:20:20
