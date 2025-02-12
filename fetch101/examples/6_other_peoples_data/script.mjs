export function report(data, error = false, target = '#responses') {
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

// retrieve data from this Github Gist
// https://gist.github.com/ear1grey/070571c34b914ee468e421aa28cbed26
async function fetchData() {
  const url = 'https://gist.githubusercontent.com/ear1grey/070571c34b914ee468e421aa28cbed26/raw/7aefbd8de4c746d5692890441f3e6ecf90168514/data.json';
  const response = await fetch(url);

  try {
    if (response.ok) {
      const data = await response.json();
      report(
        data,
        false,
        '#numberlist',
      );
    } else {
      throw new Error('connection failed');
    }
  } catch (error) {
    report(
      `${response.status} ${response.statusText} when loading ${url}`,
      true,
      '#numberlist',
    );
  }
}

function pageLoaded() {
  const fetchit = document.querySelector('#fetchit');
  fetchit.addEventListener('click', fetchData);
}

window.addEventListener('load', pageLoaded);
