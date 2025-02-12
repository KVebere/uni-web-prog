/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function filler(list, candidates) {
  if (list) {
      candidates.forEach(candidate => {
          const listItem = document.createElement('li');
          listItem.textContent = candidate;
          list.appendChild(listItem);
      });
  }
}

async function showMessage(elem, url) {
  const response = await fetch(url);
  const content = await response.text();
  elem.textContent = content;
}

async function showList(elem, url) {
  const response = await fetch(url);
  const content = await response.json();

  if (Array.isArray(content)) {
    filler(elem, content);
  }
}

function startShowingMessage(elem, url) {
  setInterval(async () => {
    try {
      const response = await fetch(url);
      const content = await response.text();
      elem.textContent = content;
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  }, 1000);
}

async function handleError(elem, url) {
  try {
    const response = await fetch(url);
    const content = await response.text();
    
    if (response.ok) {
      elem.textContent = content;
    } else {
      elem.textContent = "OH DEAR";
    }
  } catch (error) {
    elem.textContent = "OH DEAR";
    console.error("Error fetching data:", error);
  }
}

function drawBox(canvas, url) {
  const ctx = canvas.getContext('2d');

  setInterval(async () => {
    try {
      const response = await fetch(url);
      const coordinates = await response.json();
      const { x, y } = coordinates;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'black';
      ctx.fillRect(x, y, 10, 10);
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  }, 1000); 
}
