/* eslint-disable no-undef */
'use strict';
QUnit.config.reorder = false;
const { test } = QUnit;

// turns an array-like into an array
function arr(a) {
  return Array.prototype.slice.call(a);
}

test(
  'Create a function replaceText which accepts two parameters: an element and a string. The function should set the content of the given element to the given string.',
  function (assert) {
    if (!assert.functionExists('replaceText', ['elem', 'str'])) return;

    const replaceThis = document.querySelector('#replacethis');

    assert.strictEqual(
      replaceThis.textContent,
      '𝔯𝔢𝔭𝔩𝔞𝔠𝔢 𝔱𝔥𝔦𝔰',
    );

    replaceText(replaceThis, 'The text has been replaced.');

    assert.strictEqual(
      replaceThis.textContent,
      'The text has been replaced.',
    );

    replaceText(replaceThis, 'The text has been replaced twice.');

    assert.strictEqual(
      replaceThis.textContent,
      'The text has been replaced twice.',
    );
  },
);

test(
  'Create a function addTextTo which gets two parameters: an element and a string. The function should append the given string to the content of the given element.',
  function (assert) {
    if (!assert.functionExists('addTextTo', ['elem', 'str'])) return;

    const addTo = document.querySelector('#addto');

    assert.strictEqual(addTo.textContent, 'Does it work yet?');

    addTextTo(addTo, ' Maybe!');
    assert.strictEqual(addTo.textContent, 'Does it work yet? Maybe!');

    addTextTo(document.querySelector('#addto'), ' Yes!');
    assert.strictEqual(
      document.getElementById('addto').textContent,
      'Does it work yet? Maybe! Yes!',
    );
  },
);


test(
  "Create a function `moreBears` that replaces the default image with the image of a bear.  Your function should (for the 'animals' element) set its source URL to 'http://placebear.com/400/200', its alternative text to 'A bear.', and its title to 'A BEAR!'.",
  function (assert) {
    if (!assert.functionExists('moreBears')) return;

    const animals = document.querySelector('#animals');

    assert.strictEqual(animals.src, 'https://dummyimage.com/600x400/FF6900/fff.png');
    assert.strictEqual(animals.alt, 'Not a bear...');
    assert.strictEqual(animals.title, 'Not a bear...');

    moreBears();

    assert.strictEqual(animals.src, 'http://placebear.com/400/200');
    assert.strictEqual(animals.alt, 'A bear.');
    assert.strictEqual(animals.title, 'A BEAR!');
  },
);


test(
  "Create a function `setId` with two parameters, an element and a string. The function will set the element's ID to the given string. The return value of the function must be the given element.",
  function (assert) {
    if (!assert.functionExists('setId', ['elem', 'str'])) return;

    const p = document.createElement('p');
    assert.notOk(p.id, 'Before running, p has no Id.');

    const q = setId(p, 'lalala');
    assert.strictEqual(p.id, 'lalala');
    assert.strictEqual(q, p, 'The function must return its element parameter.');

    setId(p, 'foobarbaz');
    assert.strictEqual(p.id, 'foobarbaz');
  },
);


test(
  "Create a function `setClass` with two parameters, an element and a string. The function will set the element's class to the given string. The return value of the function must be the given element.",
  function (assert) {
    if (!assert.functionExists('setClass', ['elem', 'str'])) return;

    const p = document.getElementById('setmyclass');
    assert.notOk(p.className);

    const q = setClass(p, 'banal');
    assert.strictEqual(p.className, 'banal');
    assert.strictEqual(q, p, 'The function must return its element parameter.');

    setClass(p, 'interesting');
    assert.strictEqual(p.className, 'interesting');
  },
);


test(
  "Create a function `addAClass` with two parameters, an element and a string. The function will add the given string's value to the element's classes. The return value of the function must be the given element.",
  function (assert) {
    if (!assert.functionExists('addAClass', ['elem', 'str'])) return;

    let p = document.getElementById('wantaborder');
    assert.strictEqual(p.classList.length, 1);
    assert.strictEqual(p.className, 'greatcontent');

    let q = addAClass(p, 'excellence');
    assert.strictEqual(p.classList.length, 2);
    assert.strictEqual(q, p, 'The function must return its element parameter.');
    assert.ok(p.classList.contains('excellence'));

    addAClass(p, 'lovely');
    assert.strictEqual(p.classList.length, 3);
    assert.ok(p.classList.contains('excellence'));
    assert.ok(p.classList.contains('lovely'));

    p = document.createElement('header');
    assert.strictEqual(p.classList.length, 0);

    q = addAClass(p, 'excellence');
    assert.strictEqual(p.classList.length, 1);
    assert.strictEqual(q, p, 'The function must return its element parameter.');
    assert.ok(p.classList.contains('excellence'));
  },
);


test(
  "Create a function `removeAClass` with two parameters, an element and a string. The function will remove the given string's value from the element's classes. The return value of the function must be the given element.",
  function (assert) {
    if (!assert.functionExists('removeAClass', ['elem', 'str'])) return;

    const p = document.getElementById('helpme');
    assert.strictEqual(p.classList.length, 3);
    assert.ok(
      p.classList.contains('downer'),
      'Before running, the array of classes contains `downer`.',
    );

    removeAClass(p, 'downer');
    assert.notOk(p.classList.contains('downer'));
    assert.strictEqual(p.classList.length, 2);
  },
);


test(
  'Write a function `newElement` which, given one parameter called name, returns a newly created element with that tag name.',
  function (assert) {
    if (!assert.functionExists('newElement', ['name'])) return;

    let x = newElement('li');
    assert.strictEqual(x.parentElement, null);
    assert.strictEqual(x.nodeName, 'LI');

    x = newElement('p');
    assert.strictEqual(x.parentElement, null);
    assert.strictEqual(x.nodeName, 'P');
  },

);


test(
  'Create a function `findElementById` which, given one parameter called id, returns the element that has that id.',
  function (assert) {
    if (!assert.functionExists('findElementById', ['id'])) return;

    const thisisaparagraph = document.querySelector('#thisisaparagraph');
    const selectus = document.querySelector('#selectus');

    assert.strictEqual(
      findElementById('thisisaparagraph'),
      thisisaparagraph,
    );

    assert.strictEqual(
      findElementById('selectus'),
      selectus,
    );

    assert.equal(
      findElementById('mustnotexist'),
      null,
    );
  },

);


test(
  'Create a function `findElementsByQuery` which, given one parameter called query, returns all the elements that match the query selector in that parameter.',
  function (assert) {
    if (!assert.functionExists('findElementsByQuery', ['query'])) return;

    const thisisaparagraph = document.querySelector('#thisisaparagraph');
    const selectus = document.querySelector('#selectus');

    assert.deepEqual(
      arr(findElementsByQuery('#thisisaparagraph')),
      [thisisaparagraph],
    );

    assert.deepEqual(
      arr(findElementsByQuery('#selectus *')),
      arr(selectus.children),
    );

    assert.deepEqual(
      arr(findElementsByQuery('.selectus')),
      arr(selectus.getElementsByTagName('P')),
    );

    assert.deepEqual(
      arr(findElementsByQuery('mustnotexist')), [],
    );
  },
);


test(
  'Create a function `reverseList` that can reverse the content of a list (a UL or OL element).  The function should take one parameter, which is a query selector used to find the list whose children should be reversed.  Return the selected element.',
  function (assert) {
    if (!assert.functionExists('reverseList', ['query'])) return;

    const reverseme = document.querySelector('#reverseme');
    const reversemetoo = document.querySelector('#reversemetoo');

    assert.strictEqual(
      reverseme.firstElementChild.textContent,
      '1',
      'Before running, first element is 1.',
    );

    reverseList('#reverseme');

    assert.strictEqual(
      reverseme.firstElementChild.textContent,
      '5',
      'After running, first element must be 5.',
    );

    assert.strictEqual(
      reverseme.lastElementChild.textContent,
      '1',
      'After running, last element must be 1.',
    );

    // reverse another list
    const returnedList = reverseList('#reversemetoo');

    assert.strictEqual(
      reversemetoo.firstElementChild.textContent,
      'The Force Awakens',
      'After running again, first element is The Force Awakens.',
    );

    assert.strictEqual(
      returnedList,
      reversemetoo,
      'The selected element is returned.',
    );
  },
);


test(
  'Create a function `mover` that accepts two parameters, the first is a selector for the element to move, the second is a selector for the element that it should be appended to.',
  function (assert) {
    if (!assert.functionExists('mover', ['moveThis', 'appendToThis'])) return;

    const moveme = document.querySelector('#moveme');
    const listone = document.querySelector('#listone');
    const listtwo = document.querySelector('#listtwo');


    assert.ok(
      moveme.parentElement === listone,
      'Before, `moveme` has `listone` as a parent.',
    );


    assert.strictEqual(
      listone.children.length,
      4,
      'Before running, list one has 4 elements.',
    );

    assert.strictEqual(
      listtwo.children.length,
      3,
      'Before running, list two has 3 elements.',
    );

    mover('#moveme', '#listtwo');

    assert.strictEqual(
      listone.children.length,
      3,
      'After running, list one has 3 elements.',
    );

    assert.strictEqual(
      listtwo.children.length,
      4,
      'After running, list two has 4 elements.',
    );

    assert.ok(
      moveme.parentElement === listtwo,
      'After, moveme has a new parent.',
    );

    mover('#moveme', '#listone');

    assert.strictEqual(
      listone.children.length,
      4,
      'After running again, list one has 4 elements.',
    );

    assert.strictEqual(
      listtwo.children.length,
      3,
      'Before running again, list one has 3 elements.',
    );


    mover('#moveme', '#listone');

    assert.strictEqual(
      listone.children.length,
      4,
      'After running, list one has 4 elements.',
    );

    assert.strictEqual(
      listtwo.children.length,
      3,
      'After running, list two has 3 elements.',
    );

    assert.ok(
      moveme.parentElement === listone,
      'After, moveme has a new parent.',
    );
  },
);


test(
  'Write a function `filler` that accepts two parameters, the first is a list element that should be added to, the second is an array of candidate strings that will be turned into list items.',
  function (assert) {
    if (!assert.functionExists('filler', ['list', 'candidates'])) return;

    const ul = document.getElementById('fillthislist');

    const entries = ['Shmi', 'Anakin', 'Luke'];

    filler(ul, entries);

    for (let i = 0; i < ul.children.length; i++) {
      assert.strictEqual(
        ul.children[i].tagName,
        'LI',
      );
      assert.strictEqual(
        ul.children[i].textContent,
        entries[i],
        'Text in each element should match the text in the array.',
      );
    }

    assert.strictEqual(
      ul.children.length,
      3,
      'There should be exactly three list items.',
    );


    const unshowntest = document.createElement('ul');
    filler(unshowntest, []);
    assert.strictEqual(
      unshowntest.children.length,
      0,
      'There should be exactly zero list items if called with an empty array.',
    );

    filler(unshowntest, ['Sloane', 'Kyrell', 'Wexley', 'Rax']);
    assert.strictEqual(
      unshowntest.children.length,
      4,
      'There should be exactly four list items if called with an array of four items.',
    );
  },
);


test(
  'Write a function `dupe` that accepts one parameter, a selector.  The function should duplicate the element chosen by the selector (and any children of it) and append it to its parent.',
  function (assert) {
    if (!assert.functionExists('dupe', ['selector'])) return;

    const thingToBeDuped = document.querySelector('#dupeme');

    assert.strictEqual(
      thingToBeDuped.parentElement.children.length,
      2,
      'The parent of #dupeme should have just two children before the test run, a heading and #dupeme.',
    );

    dupe('#dupeme');

    assert.strictEqual(
      thingToBeDuped.parentElement.children.length,
      3,
      'The parent of #dupeme should have three children after the test run, a heading and #dupeme AND the duplicate.',
    );

    const paras = thingToBeDuped.parentElement.querySelectorAll('p');

    assert.strictEqual(
      paras.length,
      2,
      'There should be two paras after the test.',
    );

    assert.strictEqual(
      paras[0].textContent,
      paras[1].textContent,
      'The two paragraphs should have the same text.',
    );
  },
);


test(
  'Write a function `removeAll` that accepts one parameter, a selector.  All nodes that match that selector should be removed.',
  function (assert) {
    if (!assert.functionExists('removeAll', ['selector'])) return;

    removeAll('#noevens p:nth-child(odd)');

    const paras = document.querySelectorAll('#noevens p');

    assert.strictEqual(
      paras.length,
      3,
      'There should be three paras after the test.',
    );

    for (let i = 0; i < paras.length; i++) {
      assert.strictEqual(
        paras[i].textContent,
        'I love you',
        'The remaining text should only say I love you.',
      );
    }
  },
);


test(
  "Write a function `getUserData` that returns an object with information from the #username, #speed, #student form input fields. The result should be an object like this: { name: 'john', speed: 30, student: true }.",
  function (assert) {
    if (!assert.functionExists('getUserData')) return;

    let user = getUserData();

    assert.deepEqual(
      user, {
        name: 'John',
        speed: 70,
        student: true,
      },
    );

    document.querySelector('#username').value = 'Jane';
    document.querySelector('#speed').value = 100;
    document.querySelector('#student').checked = false;

    user = getUserData();

    assert.deepEqual(
      user, {
        name: 'Jane',
        speed: 100,
        student: false,
      },
    );
  },
);
