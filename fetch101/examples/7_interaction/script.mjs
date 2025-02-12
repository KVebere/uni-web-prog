async function checkWord() {
  const word = document.querySelector('#word');
  const result = document.querySelector('#result');

  if (word.value.length === 0) {
    result.textContent = 'Enter a word to check its validity.';
    return;
  }

  const url = 'https://dictionary-dot-gse-val.ey.r.appspot.com/' + word.value;
  const response = await fetch(url);

  switch (response.status) {
    case 200:
      result.textContent = word.value + ' is a valid word';
      break;
    case 400:
      result.textContent = word.value + ' is too short';
      break;
    case 404:
      result.textContent = word.value + ' is not allowed';
      break;
    default:
      result.textContent = 'the word checking service seems not to be available at this time';
  }
}

function pageLoaded() {
  const word = document.querySelector('#word');
  word.addEventListener('input', checkWord);
}

window.addEventListener('load', pageLoaded);
