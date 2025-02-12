async function fetchData(url) {
  const response = await fetch(url);
  const dt = document.getElementById('dynamicText1');
  if (response.ok) {
    const text = await response.text();
    dt.textContent = text;
    dt.classList.remove('error');
  } else {
    dt.textContent = `${response.status} ${response.statusText} when loading ${url}`;
    dt.classList.add('error');
  }
}


function pageLoaded() {
  const fetchIt = document.querySelector('#fetchit');
  const fetchError = document.querySelector('#fetcherror');

  // this is where anonymous functions are suddenly *really* useful
  fetchIt.addEventListener('click', () => fetchData('message.txt'));
  fetchError.addEventListener('click', () => fetchData('imaginary.file'));
}

window.addEventListener('load', pageLoaded);
