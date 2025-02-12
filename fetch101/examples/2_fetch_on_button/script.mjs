async function fetchData() {
  const response = await fetch('message.txt');
  const text = await response.text();
  const dt = document.querySelector('#dynamicText1');
  dt.textContent = text;
}

function pageLoaded() {
  const btn = document.querySelector('#fetchit');
  btn.addEventListener('click', fetchData);
}

window.addEventListener('load', pageLoaded);
