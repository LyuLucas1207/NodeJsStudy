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

function sayHello(pet :any) {
    if (pet instanceof cat) {
        pet.helloCat();
    } else {
        pet.helloDog();
    }
}

sayHello(new cat());

type Animal = cat | dog;

function getPets(pet: Animal) {
    if ('helloCat' in pet) {
        pet.helloCat();
    } else if ('helloDog' in pet) {
        pet.helloDog();
    }
}


function isCat (pet: Animal): pet is cat {
    return (pet as cat).helloCat !== undefined;
}

function isDog (pet: Animal): pet is dog {
    return (pet as dog).helloDog !== undefined;
}

function getPets2(pet: Animal) {
    if (isCat(pet)) {
        pet.helloCat();
    } else if (isDog(pet)) {
        pet.helloDog();
    }
}

export { }