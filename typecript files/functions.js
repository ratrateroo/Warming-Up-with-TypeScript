"use strict";
function addition(n1, n2) {
    return n1 + n2;
}
function printResults(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResults(addition(5, 12));
var combineValues;
combineValues = addition;
addAndHandle(10, 20, function (result) {
    console.log(result);
});
console.log(combineValues(8, 8));
