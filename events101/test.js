'use strict';
QUnit.config.reorder = false;
const { test } = QUnit;

// we need to hijack the console.log function
// in order to capture what is written to it, so...

// create a copy of the original console.log function
console.originalLog = console.log;

// replace console.log with a veneer function
// that updates a global variable with whatever
// the parameters of the most recent call to
// console.log were.
console.log = function (...x) {
  console.originalLog(...x);
  window.lastLog = x;
};


test(

  'Create a function `targetTextToConsole` that takes one parameter `event` and writes the text content of `event.target` to the console.  Create a second function tttcAttacher.  tttcAttacher should set `targetTextToConsole` as the event handler for the click event on `button0` - thus when the `Click Me` button is pressed, `Click Me` should appear on the console,',

  function (assert) {
    if (!assert.functionExists('targetTextToConsole', ['event'])) return;
    if (!assert.functionExists('tttcAttacher')) return;

    /* global tttcAttacher */
    tttcAttacher();

    const button0 = document.querySelector("#button0");

    // see the top of the file for how we set lastLog to be
    // the most recent thing that was logged using console.log
    button0.dispatchEvent(new MouseEvent('click'));
    assert.equal(
      window.lastLog,
      'Click Me',
      "Clicking the button should put the button's text on the console.",
    );

    button0.textContent = 'Surprise!';
    button0.dispatchEvent(new MouseEvent('click'));
    assert.equal(
      window.lastLog,
      'Surprise!',
      "Clicking the button should put the button's text on the console (this time it's `Surprise!`).",
    );

    button0.textContent = 'Click Me';
    button0.dispatchEvent(new MouseEvent('click'));
    assert.equal(
      window.lastLog,
      'Click Me',
      "Clicking the button should put the button's text on the console (now it's `Click Me` again).",
    );
  },
);


test(

  'Create a function `lovelyParaAttacher` that attaches an event listener to the `thisisalovelyparagraph` element.  When the paragraph is clicked the (provided) `lovelyToggle` function should be invoked.',

  function (assert) {
    if (!assert.functionExists('lovelyParaAttacher')) return;

    /* global lovelyParaAttacher */
    lovelyParaAttacher();

    const lovely = document.querySelector("#thisisalovelyparagraph");

    assert.equal(
      lovely.className,
      '',
      'Before the first click event is fired, the element has no class.',
    );

    lovely.dispatchEvent(new MouseEvent('click'));

    assert.equal(
      lovely.className,
      'lovely',
      'After the first click event is fired, the element class is `lovely`.',
    );

    lovely.dispatchEvent(new MouseEvent('click'));

    assert.equal(
      lovely.className,
      '',
      'After the second click event is fired, the element has no class`.',
    );
  },
);

test(

  'Create a function `lovelyButtonAttacher` that attaches an event listener to the `button1` element.  When `button1` is clicked the `lovelyToggle` function should be invoked.',

  function (assert) {
    if (!assert.functionExists('lovelyButtonAttacher')) return;

    /* global lovelyButtonAttacher */
    lovelyButtonAttacher();

    const lovely = document.querySelector("#thisisalovelyparagraph");

    assert.equal(
      lovely.className,
      '',
      'Before the first click event is fired, the element has no class.',
    );

    window.button1.dispatchEvent(new MouseEvent('click'));

    assert.equal(
      lovely.className,
      'lovely',
      'After the first click event is fired, the element class is `lovely`.',
    );

    window.button1.dispatchEvent(new MouseEvent('click'));

    assert.equal(
      lovely.className,
      '',
      'After the second click event is fired, the element has no class`.',
    );
  },
);


test(

  'Create a function `concatAttacher` that attaches an event listener to the `in1` and `in2` input elements.  Write an event handler function that fulfills the following requirement: when `in1` and `in2` change, their content should be joined together and placed inside the `out1` element, such that if you entered `Darth` and `Vader` the content of `out1` would be `DarthVader`.',

  function (assert) {
    if (!assert.functionExists('concatAttacher')) return;

    /* global concatAttacher */
    concatAttacher();

    const in1 = document.querySelector("#in1");
    const in2 = document.querySelector("#in2");
    const out1 = document.querySelector("#out1");

    // // this first sanity check fails in firefox that helpfully remember last values of text fields and puts them right back on reload so in1/in2 are not empty the second time around
    // assert.equal(
    //     out1.textContent,
    //     in1.value + in2.value,
    //     "Before the first change, out1 has no text."
    // );
    //

    in1.value = 'Darth';
    in1.dispatchEvent(new Event('change'));
    in2.value = 'Vader';
    in2.dispatchEvent(new Event('change'));

    assert.equal(
      out1.textContent,
      'DarthVader',
      'After the first change, out1 reads `DarthVader`.',
    );

    in2.value = 'Tyrannus';
    in2.dispatchEvent(new Event('change'));

    assert.equal(
      out1.textContent,
      'DarthTyrannus',
      'After this change, out1 reads `DarthTyrannus`.',
    );

    in1.value = 'Luke';
    in1.dispatchEvent(new Event('change'));
    in2.value = 'Skywalker';
    in2.dispatchEvent(new Event('change'));

    assert.equal(
      out1.textContent,
      'LukeSkywalker',
      'After this change, out1 reads `LukeSkywalker`.',
    );

    in1.value = 'Ray';
    in1.dispatchEvent(new Event('change'));

    assert.equal(
      out1.textContent,
      'RaySkywalker',
      'After this change, out1 reads `RaySkywalker`.',
    );

  },
);


test(

  'The div `mousewatcher` contains a paragraph `snitch`.  When the mouse is pointing at `mousewatcher`, the `snitch` paragraph should say `IN`, otherwise it should say `OUT`.  Write a function `snitchAttacher`.  `snitchAttacher` should associate the (provided) `snitchUpdater` function with the `mouseover` and `mouseout` events.',

  function (assert) {
    if (!assert.functionExists('snitchAttacher')) return;

    /* global snitchAttacher */
    snitchAttacher();

    const mousewatcher = document.querySelector("#mousewatcher");
    const snitch = document.querySelector("#snitch");

    mousewatcher.dispatchEvent(new MouseEvent('mouseover'));

    assert.equal(
      snitch.textContent,
      'IN',
      'After a `mouseover` event, the `snitch` text should be `IN`.',
    );

    mousewatcher.dispatchEvent(new MouseEvent('mouseout'));

    assert.equal(
      snitch.textContent,
      'OUT',
      'After a `mouseout` event, the `snitch` text should be `OUT`.',
    );
  },
);


test(

  'The div `mousereporter` contains a paragraph `report`.  When the mouse is anywhere over `mousereporter`, the `report` paragraph should be updated to include the position of the mouse within the screen, thus `x: 000 y: 000`.  Write a function `reportAttacher` that associates the mousemove event with a `reportUpdater` function.  Also write the `reportUpdater` function (you may wish to base this on `snitchUpdater`) which receives a single event object parameter and used the data in this object to update the `report` element.  Hint: there are screenX and screenY properties in the event object.',

  function (assert) {
    if (!assert.functionExists('reportAttacher')) return;
    if (!assert.functionExists('reportUpdater', ['event'])) return;

    /* global reportAttacher */
    reportAttacher();

    const mousereporter = document.querySelector("#mousereporter");
    const report = document.querySelector("#report");


    mousereporter.dispatchEvent(new MouseEvent('mousemove', { screenX: 10, screenY: 20 }));

    assert.equal(
      report.textContent,
      'x: 10 y: 20',
      'After a `mousemove` event, the `report` text should reflect mouse position x10y20.',
    );

    mousereporter.dispatchEvent(new MouseEvent('mousemove', { screenX: 11, screenY: 21 }));

    assert.equal(
      report.textContent,
      'x: 11 y: 21',
      'After a `mousemove` event, the `report` text should reflect mouse position x11y21.',
    );
  },
);


test(

  'The input field `newid` is meant for the user to type an ID of an HTML element; IDs cannot have spaces in them, so the field needs to report when the user has a space in there. Write a function `idValidationAttacher` that gives the `newid` input field an event handler that checks the value whenever it has changed (use the `input` event). If the value contains any space, the event handler will add a class `invalid` to the `newid` input element, so that an error message shows.',

  function (assert) {
    if (!assert.functionExists('idValidationAttacher')) return;

    window.newid.value = 'Obi van Kenobi';
    window.newid.dispatchEvent(new Event('input'));

    assert.ok(
      window.getComputedStyle(window.newiderror).display === 'none' &&
            !window.newid.classList.contains('invalid'),
      'Before calling `idValidationAttacher` the classlist should not contain `invalid`.',
    );

    /* global idValidationAttacher */

    idValidationAttacher();

    window.newid.dispatchEvent(new Event('input'));

    assert.ok(
      window.getComputedStyle(window.newiderror).display === 'inline' &&
            window.newid.classList.contains('invalid'),
      'After calling `idValidationAttacher` the classlist should contain `invalid`.',
    );

    window.newid.value = 'test';
    window.newid.dispatchEvent(new Event('input'));

    assert.ok(
      window.getComputedStyle(window.newiderror).display === 'none' &&
            !window.newid.classList.contains('invalid'),
      // "If the value does not have any spaces, the error should be hidden."
    );

    window.newid.value = ' Khaaaaan!';
    window.newid.dispatchEvent(new Event('input'));

    assert.ok(
      window.getComputedStyle(window.newiderror).display === 'inline' &&
            window.newid.classList.contains('invalid'),
      'Even with a space as the first character, the classlist should contain `invalid`.',
    );
  },
);
