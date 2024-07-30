function reverse(s: string): string
function reverse(n: number): number
function reverse(sOrN: string | number): string | number {
    if (typeof sOrN === 'string') {
        return sOrN.split('').reverse().join('')
    } else {
        return Number(sOrN.toString().split('').reverse().join(''))
    }
}

let add = (a: number, b: number): number => a + b;
let add2: (a: number, b: number) => number = (a, b) => a + b;
let add3: (a: number, b: number)=> number;
add3 = add;