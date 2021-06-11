String.prototype.yell = function () {
    console.log(`OMG !!!! ${this.toUpperCase()} AHGHGH !!!!`);
}

Array.prototype.pop = function () {
    return 'Sorry I wan\'t that element. I will never pop it';
}

const arr = ['hi', 'bye', 'no'];

console.log(arr.pop());