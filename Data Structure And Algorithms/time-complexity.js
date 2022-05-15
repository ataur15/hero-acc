/**
 * Big O Notation: Big O notation is a mathematical notation that describes the speed or complexity of a given algorithm.
 */

/**
 * Time complexity More
 * Big O(n)
 */
/* function sum1(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

let time1 = performance.now();
console.log(sum1(10000000000));
let time2 = performance.now();

console.log(`Your time ${(time2 - time1) / 1000}`); */

/**
 * Time complexity less
 * Big O(1)
 */
function sum2(n) {
    return n * (n + 1) / 2;
}

let time3 = performance.now();
console.log(sum2(10000000000));
let time4 = performance.now();

console.log(`Your time ${(time4 - time3) / 1000}`);
