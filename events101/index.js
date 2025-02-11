"use strict";

function targetTextToConsole(event) {
  console.log(event.target.textContent);
}

function tttcAttacher() {
  const button = document.querySelector("#button0");
  button.addEventListener("click", targetTextToConsole);
}

function lovelyParaAttacher() {
  const paragraph = document.querySelector("#thisisalovelyparagraph");
    paragraph.addEventListener("click", lovelyToggle);
  }

function lovelyButtonAttacher() {
  const button = document.querySelector("#button1");
    button.addEventListener("click", lovelyToggle);
  }

/*Create a function `concatAttacher` that attaches an event listener to the `in1` and `in2` input elements. Write an event handler function that fulfills the following requirement: when `in1` and `in2` change, their content should be joined together and placed inside the `out1` element, such that if you entered `Darth` and `Vader` the content of `out1` would be `DarthVader`. Rerun
*/
function concatAttacher() {
    const in1 = document.querySelector("#in1");
    const in2 = document.querySelector("#in2");
    const out1 = document.querySelector("#out1");
    function concat() {
        out1.textContent = in1.value + in2.value;
    }
    in1.addEventListener("change", concat);
    in2.addEventListener("change", concat);
}

/*The div `mousewatcher` contains a paragraph `snitch`. When the mouse is pointing at `mousewatcher`, the `snitch` paragraph should say `IN`, otherwise it should say `OUT`. Write a function `snitchAttacher`. `snitchAttacher` should associate the (provided) `snitchUpdater` function with the `mouseover` and `mouseout` events.*/

function snitchAttacher() {
    const mw = document.querySelector("#mousewatcher");

    mw.addEventListener("mouseover", snitchUpdater);
    mw.addEventListener("mouseout", snitchUpdater);
}

/*The div `mousereporter` contains a paragraph `report`. When the mouse is anywhere over `mousereporter`, the `report` paragraph should be updated to include the position of the mouse within the screen, thus `x: 000 y: 000`. Write a function `reportAttacher` that associates the mousemove event with a `reportUpdater` function. Also write the `reportUpdater` function (you may wish to base this on `snitchUpdater`) which receives a single event object parameter and used the data in this object to update the `report` element. Hint: there are screenX and screenY properties in the event object.*/

function reportAttacher() {
  const mousereporter = document.querySelector("#mousereporter");
      mousereporter.addEventListener("mousemove", reportUpdater);
}

function reportUpdater(event) {
  const report = document.querySelector("#report");
      report.textContent = `x: ${event.screenX} y: ${event.screenY}`;
  
}

/*The input field `newid` is meant for the user to type an ID of an HTML element; IDs cannot have spaces in them, so the field needs to report when the user has a space in there. Write a function `idValidationAttacher` that gives the `newid` input field an event handler that checks the value whenever it has changed (use the `input` event). If the value contains any space, the event handler will add a class `invalid` to the 
*/

function idValidationAttacher() {
  const newid = document.querySelector("#newid");
  if (newid) {
      newid.addEventListener("input", function () {
          if (newid.value.includes(" ")) {
              newid.classList.add("invalid");
          } else {
              newid.classList.remove("invalid");
          }
      });
  }
}
