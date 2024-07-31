const img = document.getElementById('Image') as HTMLImageElement;
img.src = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';

const input = document.getElementById('Input') as HTMLInputElement;
input.value = 'Hello World!';

interface Person1 {
    name: string;
    age: number;
}

const person1 = {} as Person1;
person1.name = 'John Doe';
person1.age = 30;

const person_2 = <Person1>{};
person_2.name = 'Jane Doe';

export { }