"use strict";
const person = {
    name: 'John',
    age: 20,
    career: 'Developer',
    isGood: true
};
const person2 = {
    name: 'Jane',
    age: 20,
    isGood: true
};
const random = {
    name: 'John',
    age: 20,
    career: 'Developer',
    isGood: true,
    0: 'zero',
    like: 'coding'
};
let sum = (a, b) => a + b;
class PersonClass {
    constructor(name, age, career, isGood) {
        this.name = name;
        this.age = age;
        this.career = career;
        this.isGood = isGood;
    }
    introduce() {
        return `Hello, my name is ${this.name}. I'm ${this.age} years old. I'm a ${this.career ? this.career : 'student'}.`;
    }
}
const personClass = new PersonClass('John', 20, 'Developer', true);
console.log(personClass.introduce()); // Hello, my name is John. I'm 20 years old. I'm a Developer.
const randomKeyArray = {
    0: 'zero',
    1: 'one',
    2: 'two'
};
const randomKeyArray2 = ['zero', 'one', 'two'];
console.log(randomKeyArray[0]); // zero
console.log(randomKeyArray2[0]); // zero
const developer = {
    name: 'John',
    age: 20,
    career: 'Developer'
};
console.log(developer); // { name: 'John', age: 20, career: 'Developer' }
class DeveloperStudent {
    constructor(name, age, career) {
        this.name = name;
        this.age = age;
        this.career = career;
    }
    study() {
        return `I'm studying ${this.career}.`;
    }
}
const developerStudent = new DeveloperStudent('John', 20, 'Developer');
console.log(developerStudent.study()); // I'm studying Developer.
class DeveloperStudent2 {
    constructor(name, age, career) {
        this.name = name;
        this.age = age;
        this.career = career;
    }
    study() {
        return `I'm studying ${this.career}.`;
    }
}
const developerStudent2 = new DeveloperStudent2('John', 20, 'Developer');
class DeveloperStudent3 {
    constructor(name, age, career) {
        this.name = name;
        this.age = age;
        this.career = career;
    }
    study() {
        return `I'm studying ${this.career}.`;
    }
}
const developerStudent3 = new DeveloperStudent3('John', 20, 'Developer');
console.log(developerStudent3.study()); // I'm studying Developer.
// Interface Extending Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    study() {
        return 'I study.';
    }
}
const student = new Student('John', 20);
