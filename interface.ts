interface IIntroductionPerson {
    readonly name: string; // readonly means that the property can't be changed
    age: number;
    career?: string; // ? means that the property is optional
    isGood?: boolean;
}

const person: IIntroductionPerson = {
    name: 'John',
    age: 20,
    career: 'Developer',
    isGood: true
}

const person2: IIntroductionPerson = {
    name: 'Jane',
    age: 20,
    isGood: true
}

// person2.name = 'Jane Doe'; // Error: Cannot assign to 'name' because it is a read-only property

interface RandomInterface {
    name: string;
    age: number,
    [propName: string]: string | number | boolean | undefined,
    [key : number]: string
}

const random: RandomInterface = {
    name: 'John',
    age: 20,
    career: 'Developer',
    isGood: true,
    0: 'zero',
    like: 'coding'
}


// Function Interface
interface ISum {
    (a: number, b: number): number
}

//function using ISum interface

function sumFunction(a: number, b: number): number {
    return a + b;
}

let sum: ISum = (a, b) => a + b;




// Class Interface
interface IIntroductionPersonClass {
    name: string;
    age: number;
    career?: string;
    isGood?: boolean;
    introduce(): string;
}

class PersonClass implements IIntroductionPersonClass {
    name: string;
    age: number;
    career?: string;
    isGood?: boolean;

    constructor(name: string, age: number, career?: string, isGood?: boolean) {
        this.name = name;
        this.age = age;
        this.career = career;
        this.isGood = isGood;
    }

    introduce(): string {
        return `Hello, my name is ${this.name}. I'm ${this.age} years old. I'm a ${this.career ? this.career : 'student'}.`;
    }
}

const personClass = new PersonClass('John', 20, 'Developer', true);

console.log(personClass.introduce()); // Hello, my name is John. I'm 20 years old. I'm a Developer.

interface RandomKeyArray {
    [propName: number]: string;
}

const randomKeyArray: RandomKeyArray = {
    0: 'zero',
    1: 'one',
    2: 'two'
}

const randomKeyArray2: RandomKeyArray = ['zero', 'one', 'two'];

console.log(randomKeyArray[0]); // zero
console.log(randomKeyArray2[0]); // zero


// Interface Inheritance
interface IPerson {
    name: string;
    age: number;
}

interface IDeveloper extends IPerson {
    career: string;
}

const developer: IDeveloper = {
    name: 'John',
    age: 20,
    career: 'Developer'
}

console.log(developer); // { name: 'John', age: 20, career: 'Developer' }

// Interface Inheritance with Class
interface IStudent {
    name: string;
    age: number;
    study(): string;
}

interface IDeveloperStudent extends IStudent {
    career: string;
}

class DeveloperStudent implements IDeveloperStudent {
    name: string;
    age: number;
    career: string;

    constructor(name: string, age: number, career: string) {
        this.name = name;
        this.age = age;
        this.career = career;
    }

    study(): string {
        return `I'm studying ${this.career}.`;
    }
}

const developerStudent = new DeveloperStudent('John', 20, 'Developer');

console.log(developerStudent.study()); // I'm studying Developer.

// Interface Inheritance with Multiple Interface
interface IStudent2 {
    name: string;
    age: number;
    study(): string;
}

interface IDeveloper2 {
    career: string;
}

interface IDeveloperStudent2 extends IStudent2, IDeveloper2 {
}

class DeveloperStudent2 implements IDeveloperStudent2 {
    name: string;
    age: number;
    career: string;

    constructor(name: string, age: number, career: string) {
        this.name = name;
        this.age = age;
        this.career = career;
    }

    study(): string {
        return `I'm studying ${this.career}.`;
    }
}

const developerStudent2 = new DeveloperStudent2('John', 20, 'Developer');

// Interface Inheritance with Class
interface IStudent3 {
    name: string;
    age: number;
    study(): string;
}

interface IDeveloper3 {
    career: string;
}

interface IDeveloperStudent3 extends IStudent3, IDeveloper3 {
}

class DeveloperStudent3 implements IDeveloperStudent3 {
    name: string;
    age: number;
    career: string;

    constructor(name: string, age: number, career: string) {
        this.name = name;
        this.age = age;
        this.career = career;
    }

    study(): string {
        return `I'm studying ${this.career}.`;
    }
}

const developerStudent3 = new DeveloperStudent3('John', 20, 'Developer');

console.log(developerStudent3.study()); // I'm studying Developer.


// Interface Extending Class

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

interface IPerson2 extends Person {
    study(): string;
}


class Student implements IPerson2 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    study(): string {
        return 'I study.';
    }
}

const student = new Student('John', 20);

export { }







