"use strict";
function addition(n1, n2) {
    return n1 + n2;
}
function printResults(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResults(addition(5, 12));
let combineValues;
combineValues = addition;
addAndHandle(10, 20, (result) => {
    console.log(result);
});
console.log(combineValues(8, 8));
