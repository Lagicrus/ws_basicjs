/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year shoudl use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';
var remembered;

function id() {
    return "UP857256";
    // e.g. return "UP654321";
}

function fn() {
    return "Sam";
}

function sn() {
    return "Riches";
}

function add(first_val, second_val) {
    // replace this example with
    // your first function then
    // add more below as necessary.
    return first_val + second_val;
}

function subtract(first_val, second_val) {
    return first_val - second_val
}

function checkObject(object) {
    object.checked = true;
    return object
}

function checkObjectInside(object) {
    if (object.data != null) {
        object.data.checked = true;
    }
    return object
}

function arraySet(array, number, value) {
    if (number in array) {
        array[number] = value;
    }
    return array
}

function addAll(array) {
    let total = 0;
    for (const value in array) {
        total += parseFloat(array[value])
    }
    return total

}

function larger(val_1, val_2) {
    return Math.max(val_1, val_2)
}

function largest(array){
    return Math.max(...array)
}

function compare(array_1, array_2) {
    console.table({array_1, array_2});
    if (array_1 === undefined || array_2 === undefined){
        return false;
    }
    if (array_1.length !== array_2.length){
        return false;
    }
    for (const value in array_1) {
        if (!(array_2.includes(array_1[value]))){
            return false;
        }
        /*if (!(value in array_2)) {
            return false;
        }*/
        if (!(array_1[value] === array_2[value])) {
            return false;
        }
    }
    return true
}

function addToAll(array, number) {
    for (const value in array) {
        array[value] += number;
    }
    return array
}

function rememberThis(variable){
    remembered = variable
}

function nArray(n){
    let array = [];
    for (var i = 1; i <= n; i++) {
        array.push(i);
    }
    return array
}

function addAllOpt(array){
    if (array == null){
        return 0
    }
    else if (array === []) {
        return 0
    }
    else {
        return addAll(array)
    }
}

function divisors(array, divisor) {
    let new_array = [];
    for (const value in array){
        if ((array[value] % divisor) === 0){
            new_array.push(array[value])
        }
    }
    return new_array
}

function multiples_old(n, m){

}

function multiples(n, m){
    let new_array = [];
    for (var i = 1; i <= n; i++){
        new_array.push(i*m)
    }
    return new_array
}