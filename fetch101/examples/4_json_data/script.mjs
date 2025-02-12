function report(data, error = false, target = '#responses') {
  // we always want the message to be an array so if
  // it's a sting, make it an array of one string
  if (typeof data === 'string') data = [data];

  const list = document.querySelector(target);

  // loop over every array element and report it
  for (const i of data) {
    const li = document.createElement('li');
    li.textContent = i;
    li.classList.toggle('error', error);
    list.append(li);
  }
}

async function fetchData() {
  const response = await fetch('data.json');
  if (response.ok) {
    const data = await response.json();
    report(data); // <--- here we're using the report function
  } else {
    report('No data', true);
  }
}

function pageLoaded() {
  const fetchIt = document.querySelector('#fetchit');
  fetchIt.addEventListener('click', fetchData);
}

window.addEventListener('load', pageLoaded);
