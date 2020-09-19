function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

console.log(hex(255, 100, 25));

function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}

// "#ff6419"
// "rgb(255, 100, 25)"


function makeColor(r, g, b) {

    const color = {};

    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function () {
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    };

    color.hex = function () {
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    return color;

}

const firstColor = makeColor(35, 255, 150);

console.log(firstColor.rgb());

// Creates a blank, plain JavaScript object;
// Links (sets the constructor of) this object to another object;
// Passes the newly created object from Step 1 as the this context;
// Returns this if the function doesn't return an object.

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.hex = function () {
    const {r, g, b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

Color.prototype.rgb = function () {
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`;
}

Color.prototype.rgba = function (a = 1.0) {
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b}, ${a})`;
}

const color1 = new Color(40, 255, 60); 

const color2 = new Color(0, 0, 0);

console.log(color1);
console.log(color2);


// document.body.style.backgroundColor = color1.rgb();


class Colour {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL();
    }
    innerRGB() {
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `rgb(${this.innerRGB()}, ${a})`;
    }
    hex() {
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    hsl() {
        const {h, s, l} = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }
    opposite() {
        const {h, s, l} = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`;
    }
    fullySaturated() {
        const {h, l} = this;
        return `hsl(${h}, 100%, ${l}%)`;
    }
    calcHSL() {
		let { r, g, b } = this;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;
	}
}

const red = new Colour(255, 67, 89, 'tomato');

const white = new Colour(255, 255, 255, 'tomato');

const orange = new Colour(230, 126, 34, 'carrot');


document.body.style.backgroundColor = red.rgb();

setTimeout(function () {
    console.log('Background COlor changed to opposite');
    document.body.style.backgroundColor = red.opposite();
}, 2000)

setTimeout(function () {
    console.log('Background COlor changed to orange');
    document.body.style.backgroundColor = orange.rgb();
}, 4000)

setTimeout(function () {
    console.log('Background COlor changed to full saturation');
    document.body.style.backgroundColor = orange.fullySaturated();
}, 6000)



class Pet {
    constructor (name, age) {
        console.log('Pet COnstructor');
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating !!`;
    }
}

class Cat extends Pet{
    constructor(name, age, livesLeft = 9) {
        console.log('Cat Constructor');
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'Meowww !!';
    }
}

class Dog extends Pet {
    bark() {
        return 'Bowww !!'
    }
    eat() {
        return `${this.name} is eating from this class`
    }
}

const cat = new Cat('Maxx', 7);
const dog = new Dog('Mus', 7);

console.log(cat.eat());
console.log(dog.eat());