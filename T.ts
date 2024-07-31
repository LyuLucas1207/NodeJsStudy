//泛型 <T>


function print(arg:string):void | string
function print(arg:number):void | number
function print(arg:number|string):void | string |number{
    console.log(arg);
    return arg;
}

//or

function print1<T>(arg:T):T{
    console.log(arg);
    return arg;
}

print1<string>('hello');
print1<number>(123);
print1<number|string>(123);


interface Iprint<T>{
    (arg:T):T;
}

let print_interface:Iprint<number> = () => {
    return 123;
}

class Stack<T>{
    private data:T[] = [];
    push(item:T){
        this.data.push(item);
    }
    pop():T|undefined{
        return this.data.pop();
    }
}

let stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

let stack1 = new Stack<string>();
stack1.push('a');
stack1.push('b');
stack1.push('c');
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());

//泛型约束

interface ILength{
    (length:number):number;
    //or length:number;
}

function getLength<T extends ILength>(arg:T):number{
    return arg.length;
}

export { }