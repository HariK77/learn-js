function greet() {
    console.log('Hi');
    console.log(this);
}

greet()

var color = 'blue';

let anotherColor = 'green';

// window global scope
// var is added to windows global scope.
// let and const are not

console.log(window.color);  // will output 'blue'
console.log(window.anotherColor);  // will output 'green'


const sayHi = function () {
    console.log(this);
}

sayHi();

const person = {
    firstName: 'Hari',
    lastName: 'Krishna',
    nickName: 'Karri',
    fullName() {
        const {firstName, lastName, nickName} = this;
        return firstName + ' ' + lastName + ' AKA ' + nickName;
    },
    printBio() {
        return this.fullName() + ' is a person.'
    },
    laugh: () => {
        console.log(this);
        console.log(`${this.nickName} says HAHAHAHAHAA`);
    }
}

console.log(person.fullName());
console.log(person.printBio());

// const printBio = person.printBio;

// console.log(printBio());

console.log(person.laugh());


const annoyer = {
    phrases: ['literally', 'crazy', 'I can\'t even', 'Cholo', 'Hari', 'Roopesh', 'Harsha'],
    pickPhrase() {
        const {phrases} = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx];
    },
    start() {
        this.timerId = setInterval(() => {
            console.log(this.pickPhrase());
        }, 3000);
    },
    stop() {
        clearInterval(this.timerId);
        console.log('Loop ended !!!!');
    }
}

// call annoyer start function in browser console
// annoyer.start();