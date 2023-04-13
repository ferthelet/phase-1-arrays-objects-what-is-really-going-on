let phrases = {
    greeting: "Hello there!",
    time: () => {
        const currentTime = new Date();
        return `The time is ${currentTime.getHours()}:${currentTime.getMinutes()}`;
    }
}

console.log(phrases.greeting);
console.log(phrases.time());

const listOfGoodDogs = ["Nola", "Spinach", "Diego"];

listOfGoodDogs.map((dog) => console.log(dog));
console.log('forEach...');
listOfGoodDogs.forEach(dog => console.log(dog));

// declaring an object using a constructor
// constructors start wit a capital letter by convention and add new before calling it
function PhraseObjectConstructor(name) {
    this.firstName = name;
    this.greeting = `Hello there ${name}`;
    this.time = () => {
        const currentTime = new Date();
        return `The constructor time is ${currentTime.getHours()}:${currentTime.getMinutes()}`;
    }
}
phrases = new PhraseObjectConstructor('Harold');
phrases2 = new PhraseObjectConstructor('John');
console.log(phrases, phrases2);
console.log(phrases.greeting);
console.log(phrases.time());

// this
let example = {
    name: 'Henry',
    test: function () {
        return this;
    },
    testA: () => this,
}

console.log(example.test());
console.log(example.testA());

// showing proto props/methods
const exampleArray = [1, 2, 3];
console.log(exampleArray.__proto__);
debugger;
console.log('end');


let artists = [
    "Smash Mouth",
    "Janelle Monae",
    "SZA",
    "Thunder Cat",
    "Frank Ocean",
    "Solange",
];

console.log(artists.filter(function (artist) {
    return artist.startsWith("S");
}));

// padding
const make = 'BMW';
const model = 'x5';
const colour = 'Royal Blue';
const leftPad = (str, length = 10) => `${' '.repeat(length)}${str}`;

console.log(leftPad(make));
console.log(leftPad(model));
console.log(leftPad(colour));

// aligned
const rightAlign = (str, length = 20) => `${' '.repeat(length - str.length)}${str}`;

console.log(rightAlign(make));
console.log(rightAlign(model));
console.log(rightAlign(colour));

//
console.log(`${'woof' * 5}`.repeat(10) + ' Batman!');

