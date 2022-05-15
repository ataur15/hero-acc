"use strict";
// Array
const fruits = ['Mango', 'Banana', 'Date', 'Orange'];
console.log(fruits);
// Object
const student = {
    name: 'Karim',
    age: 50,
    salary: 14000
};
const employee = {
    name: 'Ajij',
    age: 55,
    salary: 15000
};
const person1 = {
    name: "Tamim",
    age: 45,
    hobby: 'cricket'
};
const person2 = {
    name: 'Karim',
    age: 50
};
// Function
const myFunc = (num1, num2) => {
    return num1 + num2;
};
console.log(myFunc(20, 40));
/**
 * Typescript setup
 * ----------------
 * npm init -y
 * npx install --save-dev typescript
 * npx tsc --init
 * npx tsc fileName.ts
 * npx tsc fileName.ts --watch
 */
