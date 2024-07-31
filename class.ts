class animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m.`);
    }
    eat(food: string) {
        console.log(`${this.name} ate ${food}.`);
    }
    speak(sound: string) {
        console.log(`${this.name} made ${sound}.`);
    }
}

class dog extends animal {
    constructor(name: string) {
        super(name);
    }
    speak(sound: string) {
        console.log(`${this.name} barked ${sound}.`);
    }
}

//using

const dog1 = new dog('dog1');
dog1.move(10);
dog1.eat('bone');
dog1.speak('woof');

const animal1 = new animal('animal1');
animal1.move(20);
animal1.eat('food');
animal1.speak('sound');


class cat extends animal {
    category: string;
    age: number;
    constructor(name: string, category: string, age: number) {
        super(name);
        this.category = category;
        this.age = age;
    }
    jump() : void {
        console.log(`${this.name} jumped.`);
    }
}

//using

const cat1 = new cat('cat1', 'persian', 2);
cat1.move(5);
cat1.eat('fish');
cat1.speak('meow');
cat1.jump();


abstract class animal2 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract move(distance: number): void;
    abstract eat(food: string): void;
    abstract speak(sound: string): void;
}

class dog2 extends animal2 {
    constructor(name: string) {
        super(name);
    }
    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m.`);
    }
    eat(food: string) {
        console.log(`${this.name} ate ${food}.`);
    }
    speak(sound: string) {
        console.log(`${this.name} barked ${sound}.`);
    }
}

//using
const dog2_1 = new dog2('dog2_1');
dog2_1.move(10);
dog2_1.eat('bone');
dog2_1.speak('woof');



class cook {
    step1() {
        console.log('step1');
    }
    step2() {
        console.log('step2');
    }
    step3() {
        console.log('step3');
    }
    step4() {
        console.log('step4');
    }
}

class cook2 {
    step1() {
        console.log('step1');
        return this;
    }
    step2() {
        console.log('step2');
        return this;
    }
    step3() {
        console.log('step3');
        return this;
    }
    step4(){
        console.log('step4');
        return this;
    }
}

const cook_1 = new cook();
cook_1.step1();
cook_1.step2();
cook_1.step3();
cook_1.step4();

const cook_2 = new cook2();
cook_2.step1().step2().step3().step4();
export { }