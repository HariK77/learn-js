// Short hand objects
const getStatus = (arr) => {
    const max  = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((total, val) => total + val);
    const avg = sum / arr.length;

    return {
        // max: max,
        // min: min,
        // sum: sum,
        // avg: avg
        max,
        min,
        sum,
        avg
    }
};

const reviews = [4.5, 5.0, 3.44, 2.8, 4.2, 3.7, 3.0];

const stats = getStatus(reviews);

console.log(stats);

// Computed properties

const role = 'host';
const person = 'Jools holland';
const role2 = 'director';
const person2 = 'James Cameron';

// const team = {};
// team[role] = person;
// team[role2] = person2;
const team = {
    [role]: person,
    [role2]: person2
}

console.log(team);  


const addProp = (obj, k, v) => ({...obj, [k]: v})

console.log(addProp(team, 'happy', '(:'));

// methods in objects

const math = {
    add: (x, y) => x + y,
    multiply: (x, y) => x * y,
    subtract: (x, y) => x - y,
    numbers: [1, 2, 3, 4, 5, 6, 7]
}


console.log(math.add(4,3)); 
console.log(math.multiply(4,3)); 

console.log(math);

const auth = {
    username: 'Maxx',
    login() {
        console.log('Logged you in');
    },
    logout() {
        console.log('Bye');
    }
}

console.log(auth);

// this