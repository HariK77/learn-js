const fitBitData = {
    totalSteps: 500,
    totalMiles: 7,
    avgCalorieBurn: 23,
    workOutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
}

const test = {
    1: 'One',
    2: 'Two'
}

console.log(test[1]);


const colors = {
    red: '#ebed4b',
    yellow: '$f9ca24',
    blue: '#30336b'
}

let d_color = 'red';

console.log(colors[d_color]);

const addProperty = {}

console.log(addProperty);

addProperty.propertyOne = 'Hi There';
addProperty['propertyTwo'] = 'Hi There Again';

console.log(addProperty);


const student = {
    firstName: 'Hari',
    lastName: 'Krishna',
    strengths: ['Coding', 'Cricket'],
    location: {
        town: 'Dharmavaram',
        city: 'Anantapur',
        state: 'Andhra Pradesh'
    },
    color: 'black'
}

console.log(student.location.town);

console.log(student.strengths[1]);

const arrayOfObjects = [
    {
        name: 'Hari',
        color: 'black',
    },
    {
        name: 'Venkata',
        color: 'semi-black',
    },
    {
        name: 'Ashok',
        color: 'white',
    }
]


console.log(arrayOfObjects);


const game = {
    playerOne: {
        name: 'Blue',
        playingAs: 'X'
    },
    playerTwo: {
        name: 'Green',
        playingAs: 'Y'
    },
    board: [
        ['Y', null, 'X'],
        ['X', 'Y', 'X'],
        [null, 'Y', 'X']
    ]
}


const palleteOne = {
    red: '#ebed4b',
    yellow: '$f9ca24',
    blue: '#30336b'
}

console.log(palleteOne);


const palleteTwo = palleteOne;

palleteTwo.green = '#edfygc';

console.log(palleteOne);
console.log(palleteTwo);
