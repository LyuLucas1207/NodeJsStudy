"use strict";
//泛型 <T>
Object.defineProperty(exports, "__esModule", { value: true });
function print(arg) {
    console.log(arg);
    return arg;
}
//or
function print1(arg) {
    console.log(arg);
    return arg;
}
print1('hello');
print1(123);
print1(123);
let print_interface = () => {
    return 123;
};
class Stack {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.pop();
    }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
let stack1 = new Stack();
stack1.push('a');
stack1.push('b');
stack1.push('c');
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
function getLength(arg) {
    return arg.length;
}
