/**
 * Array
 */
var fruits = ['Mango', 'Banana', 'Date', 'Orange'];
console.log(fruits);
/**
 * Object
 */
var student = {
    name: 'Karim',
    age: 50,
    salary: 14000
};
var employee = {
    name: 'Ajij',
    age: 55,
    salary: 15000
};
var person1 = {
    name: "Tamim",
    age: 45,
    hobby: 'cricket'
};
var person2 = {
    name: 'Karim',
    age: 50
};
/**
 * Function
 */
var setLowercase = function (str) {
    return str.toLowerCase();
};
console.log(setLowercase("HELLO"));
function add(numb1, numb2) {
    return numb1 + numb2;
}
console.log(add(50, 80));
/**
 * Unions
 */
function getLength(param) {
    return param.length;
}
console.log(getLength(['Hello', 'Gello', 'Khello']));
/**
 * Typescript setup
 * ----------------
 * npm init -y
 * npx install --save-dev typescript
 * npx tsc --init
 * npx tsc fileName.ts
 * npx tsc fileName.ts --watch
 */
