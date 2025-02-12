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

async function fetchData(url) {
  const response = await fetch(url);
  const contentType = response.headers.get('content-type');

  let data;
  if (response.ok) {
    if (contentType.includes('application/json')) {
      data = await response.json();
    }
    if (contentType.includes('text/plain')) {
      data = await response.text();
    }
  }
  if (data) {
    report(data);
  } else {
    report(`${response.status} when loading ${url}`, true);
  }
}

function pageLoaded() {
  const text = document.querySelector('#fetchtext');
  const data = document.querySelector('#fetchdata');
  const error = document.querySelector('#fetcherror');

  text.addEventListener('click', () => fetchData('message.txt'));
  data.addEventListener('click', () => fetchData('data.json'));
  error.addEventListener('click', () => fetchData('imaginary.file'));
}

window.addEventListener('load', pageLoaded);
