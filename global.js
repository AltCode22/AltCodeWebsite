//NodeJs Learn basics
let print = "Hello NodeJS";
let printCut = print.slice(6);

console.log(printCut); 
console.log(`You are learning ${printCut} rightnow!`);

//print directory or filenames
console.log(__dirname);
console.log(__filename);

//using require() function
const path = require("path");
console.log(`The file name is ${path.basename(__filename)}`); //prints global.js

//process.argv: collect information from terminal

function grab(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

let greeting = grab("--greeting");
let user = grab("--user");

console.log(greeting);
console.log(user);

//standard input or output
process.stdout.write("Hello")

const questions = [
    "What is your name?",
    "What is your age?",
    "What is your favorite color?",
];

const answers = [];

function ask(i) {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `)
}

ask(answers.length);