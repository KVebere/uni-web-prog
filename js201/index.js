/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
 return 'UP2202994'
}

function fn() {
  return 'Keita';
}

function sn() {
  return 'Vebere';
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function checkObject(obj) {
  obj.checked = true;
}

function checkObjectInside(obj) {
  if (obj.data) {
    obj.data.checked = true;
  }
}

function arraySet(arr, i, n) {
  if (Number.isInteger(i) && i >= 0 && i < arr.length) {
    arr[i] = n;
  }
}

function addAll(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function larger(a, b) {
  if (a>b)
    return a
  if (a<b)
    return b
  if (a===b)
    return a
}

function largest(arr) {
  if (arr.length === 0)
    return null;
  return arr.reduce((acc, curr) => Math.max(acc, curr), -Infinity);
}

function compare(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) 
    return false; 
  if (a.length !== b.length) 
    return false; 
  return a.every((value, index) => value === b[index]); 
}

function addToAll(arr, n) {
  for (let i = 0; i < arr.length; i++)
    arr[i] += n;
  return arr;
}

let remebered = "";
function rememberThis(keepsake)
{
  remebered = keepsake;
}

function nArray(n) {
  let arr = []; 
  for (let i = 1; i <= n; i++) {
    arr.push(i); 
  }
  return arr; 
}

function addAllOpt(arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }
  return arr.reduce((sum, num) => sum + num, 0); 
}

function divisors(arr, div) {
  return arr.filter(num => num % div === 0);
}

function multiples(n, m) {
  let result = []; 
  for (let i = 1; i <= n; i++) {
    result.push(i * m); 
  }
  return result;
}