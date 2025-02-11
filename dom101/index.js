/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function replaceText(elem, str) {
    elem.textContent = str;
}

function addTextTo(elem, str) {
    elem.textContent += str;
}

function moreBears() {
    const bear = document.getElementById('animals');
    bear.src = 'http://placebear.com/400/200';
    bear.alt = 'A bear.';
    bear.title = 'A BEAR!';
}

function setId(elem, str) {
    elem.id = str;
    return elem;
}

function setClass(elem, str) {
    elem.className = str;
    return elem;
}

function addAClass(elem, str) {
    elem.classList.add(str);
    return elem;
}

function removeAClass(elem, str) {
    elem.classList.remove(str);
    return elem;
}

function newElement(name) {
    return document.createElement(name);
}

function findElementById(id) {
    return document.getElementById(id);
}

function findElementsByQuery(query) {
    return document.querySelectorAll(query);
}

function reverseList(query) {
    const list = document.querySelector(query);
    if (list) {
        const items = Array.from(list.children);
        items.reverse().forEach(item => list.appendChild(item));
    }
    return list;
}

function mover(moveThis, appendToThis) {
    const elementToMove = document.querySelector(moveThis);
    const targetElement = document.querySelector(appendToThis);
    if (elementToMove && targetElement) {
        targetElement.appendChild(elementToMove);
    }
}

function filler(list, candidates) {
    if (list) {
        candidates.forEach(candidate => {
            const listItem = document.createElement('li');
            listItem.textContent = candidate;
            list.appendChild(listItem);
        });
    }
}

function dupe(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const clone = element.cloneNode(true);
        element.parentNode.appendChild(clone);
    }
}

function removeAll(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => element.remove());
}

function getUserData() {
    const name = document.querySelector('#username').value;
    const speed = parseInt(document.querySelector('#speed').value, 10);
    const student = document.querySelector('#student').checked;
    return { name, speed, student };
}