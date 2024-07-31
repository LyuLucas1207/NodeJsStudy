"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = {
    name: 'John',
    age: 20,
    career: 'Developer',
    isGood: true
};
let y = {
    name: 'Jane',
    age: 20,
    isGood: true
};
y = x;
class cat {
    helloCat() {
        console.log('Hello Cat');
    }
}
class dog {
    helloDog() {
        console.log('Hello Dog');
    }
}
function sayHello(pet) {
    if (pet instanceof cat) {
        pet.helloCat();
    }
    else {
        pet.helloDog();
    }
}
sayHello(new cat());
function getPets(pet) {
    if ('helloCat' in pet) {
        pet.helloCat();
    }
    else if ('helloDog' in pet) {
        pet.helloDog();
    }
}
function isCat(pet) {
    return pet.helloCat !== undefined;
}
function isDog(pet) {
    return pet.helloDog !== undefined;
}
function getPets2(pet) {
    if (isCat(pet)) {
        pet.helloCat();
    }
    else if (isDog(pet)) {
        pet.helloDog();
    }
}
