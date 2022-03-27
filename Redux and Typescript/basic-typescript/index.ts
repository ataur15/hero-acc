/**
 * Array
 */
const fruits: string[] = ['Mango', 'Banana', 'Date', 'Orange'];
console.log(fruits);

/**
 * Object
 */
const student: { name: string, age: number, salary: number } = {
    name: 'Karim',
    age: 50,
    salary: 14000
}

// Type declare
type objectType = { name: string, age: number, salary: number };

const employee: objectType = {
    name: 'Ajij',
    age: 55,
    salary: 15000
}

// Interface declare
interface Person {
    name: string;
    age: number;
    hobby?: string;
}

const person1: Person = {
    name: "Tamim",
    age: 45,
    hobby: 'cricket'
}

const person2: Person = {
    name: 'Karim',
    age: 50
}

/**
 * Function
 */
const setLowercase = (str: string) => {
    return str.toLowerCase();
}

console.log(setLowercase("HELLO"));

function add(numb1: number, numb2: number) {
    return numb1 + numb2;
}

console.log(add(50, 80));

/**
 * Unions
 */
 function getLength(param: string | string[]) {
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
