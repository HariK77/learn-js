// if else
let num = Math.floor(Math.random() * 7) + 1;



if (num >= 7) {
    console.log('You are Super Star !!');
} else if (num < 7 && num >= 5) {
    console.log('You are a Star !!');
} else if (num < 5 && num >= 3) {
    console.log('You are small Star !!');
} else if (num < 3 && num > 0) {
    console.log('You are rising star !!');
} else {
    console.log('You have to start your Star !!');
}


// switch

switch (num) {
    case 0:
        console.log('Today is Sunday');
        break;
    case 1:
        console.log('Today is Monday');
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log('Today is Wednesday');
        break;
    case 4:
        console.log('Today is Thursday');
        break;
    case 5:
        console.log('Today is Friday');
        break;
    case 6:
        console.log('Today is Saturday');
        break;
    default:
        console.log('We don\'t what day it is !!');
        break;
}

// Ternary Operator

let valueOne = Math.floor(Math.random() * 100) + 1;
let valueTwo = Math.floor(Math.random() * 100) + 1;;

console.log(valueOne > valueTwo ? `${valueOne} is grater than ${valueTwo}` : `${valueTwo} is grater than ${valueOne}`);
