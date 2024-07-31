"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverse(sOrN) {
    if (typeof sOrN === 'string') {
        return sOrN.split('').reverse().join('');
    }
    else {
        return Number(sOrN.toString().split('').reverse().join(''));
    }
}
let add = (a, b) => a + b;
let add2 = (a, b) => a + b;
let add3;
add3 = add;
