QUnit.config.reorder = false;
const { test } = QUnit;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

test(

  'Create a function `showMessage` that takes two parameters: an element and a string that is a URL. The function will fetch the URL and put the response text into the text content of the provided element.',

  async function (assert) {
    if (!assert.functionExists('showMessage', ['elem', 'url'])) return;

    const message = document.querySelector('#message');

    assert.equal(
      message.textContent,
      '',
      'Before running the function, the element is empty.',
    );

    await showMessage(message, 'http://jacek.soc.port.ac.uk/tmp/ws/hello');

    assert.equal(
      message.textContent,
      'Live long and prosper!\n',
      'The server message "live long and prosper" should be in the page.',
    );

    await showMessage(message, 'http://jacek.soc.port.ac.uk/tmp/ws/bye');

    assert.equal(
      message.textContent,
      'See you soon!\n',
      'When called the second time with a different URL, a new message from the server should be there.',
    );
  });


test(

  'Create a function `showList` that takes two parameters: an element and a string that is a URL. The function will fetch the URL, parse the retrieved data as JSON; the data is guaranteed to be an array of strings. The function will then, like the `filler` function in `dom101`, put the contents of the array as list items into the provided element.',

  async function (assert) {
    if (!assert.functionExists('showList', ['elem', 'url'])) return;

    const list1 = document.querySelector('#list1');
    const list2 = document.querySelector('#list2');

    assert.equal(
      list1.children.length,
      0,
      'Before running the function, the list is empty.',
    );

    await showList(list1, 'http://jacek.soc.port.ac.uk/tmp/ws/arr8');

    assert.equal(
      list1.children.length,
      8,
      'After retrieving wsarr1, there are 8 elements.',
    );

    assert.equal(
      list1.children[5].textContent,
      'Return of the Jedi',
    );

    await showList(list2, 'http://jacek.soc.port.ac.uk/tmp/ws/arr2');

    assert.equal(
      list2.children.length,
      2,
      'After retrieving wsarr2, there are 2 elements.',
    );

    assert.equal(
      list2.children[1].textContent,
      'Leia',
    );
  });


test(

  'Create a function `startShowingMessage` that takes two parameters: an element and a string that is a URL. The function will use `setInterval` to make the following task every 1s: fetch the URL and put the response text into the text content of the provided element.',

  async function (assert) {
    if (!assert.functionExists('startShowingMessage', ['elem', 'url'])) return;
    const message2 = document.querySelector('#message2');

    assert.equal(
      message2.textContent,
      '',
      'Before running the function, the message is empty.',
    );

    startShowingMessage(message2, 'http://jacek.soc.port.ac.uk/tmp/ws/dyn1');

    await delay(1500);
    const message = message2.textContent;
    assert.notEqual(
      message2.textContent,
      '',
      'After 1.5s, the message should not be empty.',
    );


    await delay(1500);
    assert.notEqual(
      message2.textContent,
      message,
      'The message should be changing.',
    );
  },
);


test(

  "Create a function 'handleError' that accepts an element and a url as a parameter, and shows the fetched text from the server in the element. If there is an error, the function should set the textContent of the element to 'OH DEAR'.",

  async function (assert) {
    if (!assert.functionExists('handleError', ['elem', 'url'])) return;

    const message3 = document.querySelector('#message3');
    assert.equal(
      message3.textContent,
      '',
      'Before running the function, the message is empty.',
    );

    await handleError(message3, 'http://jacek.soc.port.ac.uk/tmp/ws/hello');
    assert.strictEqual(
      message3.textContent,
      'Live long and prosper!\n',
      'The message from the server should be there.',
    );

    await handleError(message3, 'http://jacek.soc.port.ac.uk/tmp/ws/404');
    assert.strictEqual(
      message3.textContent,
      'OH DEAR',
      "The message should say 'OH DEAR' if there is an error.",
    );
  });


test(
  "Create a function `drawBox', which accepts two parameters: a canvas element, and a URL which refers to a simple object with coordinates that you should fetch from a server. The function draws a 10x10 filled black box at the given coordinates. Your drawBox function should update the coordinates and redraw the box every 1 second.",

  async function (assert) {
    if (!assert.functionExists('drawBox', ['canvas', 'url'])) return;

    const canvas3 = document.querySelector('#canvas3');
    drawBox(canvas3, 'http://jacek.soc.port.ac.uk/tmp/ws/dyn2');

    assert.ok(
      true,
      'You need to check with your eyes that there is a box changing coordinates every second.',
    );

    const oldPicture = canvas3.toDataURL();

    await delay(1500);
    const newPicture = canvas3.toDataURL();
    assert.ok(
      newPicture !== oldPicture,
      'After a delay, the picture should have changed.',
    );

    await delay(1500);
    assert.ok(
      canvas3.toDataURL() !== newPicture,
      'After more delay, the picture should have changed again.',
    );
  },
);
