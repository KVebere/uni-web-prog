QUnit.config.reorder = false;
const { test } = QUnit;

test('funcFeelGood',
  function (assert) {
    assert.ok(
      true,
      'This test always passes - it shows what a passing test looks like - now make them all pass! :-)',
    );
  },
);


test('Change the id method in index.js to return your student ID.',
  function (assert) {
    assert.ok(
      id(),
      'The function must return something.',
    );
    assert.notStrictEqual(
      id(),
      'Replace This With Your Student ID',
      'This test will pass as soon as the id function returns anything other than the default value.  You should make sure it returns your student ID!',
    );
    assert.notStrictEqual(
      id(),
      'UP654321',
      'This second test will pass as soon as the id function returns anything other than the other default value.',
    );
  },
);


test('Change the fn method in index.js to return your first name.',
  function (assert) {
    assert.ok(
      fn(),
      'The function must return something.',
    );
    assert.notStrictEqual(
      fn(),
      'Replace This With Your First Name',
      'This test will pass as soon as the fn function returns anything other than the default value.  You should make sure it returns your student first name!',
    );
  },
);

test('Change the sn method in index.js to return your surname (family name).',
  function (assert) {
    assert.ok(
      sn(),
      'The function must return something.',
    );
    assert.notStrictEqual(
      sn(),
      'Replace This With Your Surname',
      'This test will pass as soon as the sn function returns anything other than the default value.  You should make sure it returns your surname!',
    );
  },
);


test(
  'Create an add function that accepts two parameters called a and b, and returns their sum.',
  function (assert) {
    if (!assert.functionExists('add', ['a', 'b'])) return;
    assert.strictEqual(
      add(7, 17), 24,
    );
    assert.strictEqual(
      add(-7, -17), -24,
    );
    assert.ok(
      add(0.1, 0.2) > 0.299999,
    );
  },
);

test('Create a subtract function that accepts two parameters, a and b, and subtracts b from a and returns the result.',
  function (assert) {
    if (!assert.functionExists('subtract', ['a', 'b'])) return;
    assert.strictEqual(
      subtract(10, 5), 5,
    );
    assert.strictEqual(
      subtract(5, 10), -5,
    );
    assert.strictEqual(
      subtract(Infinity, 32), Infinity,
    );
  },
);


test(
  "Create a checkObject function that accepts an object called obj as a parameter and sets the object's property `checked` to `true`.",
  function (assert) {
    if (!assert.functionExists('checkObject', ['obj'])) return;

    const x = {};
    /// initially x.check should be undefined
    assert.strictEqual(x.checked, undefined);

    // after checkObject x.checked should be true
    checkObject(x);
    assert.strictEqual(x.checked, true);

    // we check a different variable now and ensure
    // that it's not modified in any other way than
    // setting `checked`
    const y = {
      a: 4,
      b: 5,
      c: [1, 3, 5],
    };
    checkObject(y);
    assert.deepEqual(
      y, {
        a: 4,
        b: 5,
        c: [1, 3, 5],
        checked: true,
      },
    );
  },
);

test(
  "Create a `checkObjectInside` function that accepts an object called `obj` as a parameter and if that object has an object value in its `data` property, it sets *that* inner object's property `checked` to `true`.",
  function (assert) {
    if (!assert.functionExists('checkObjectInside', ['obj'])) return;

    // object should have no properties before and after
    // because there is no inner object to be altered.
    const x = {};
    assert.deepEqual(x, {});
    checkObjectInside(x);
    assert.deepEqual(x, {});

    // we check a different variable now and ensure
    // that it's not modified in any other way than
    // setting `checked` within the object referred
    // to by the data property
    const y = {
      time: 12345,
      data: {
        name: 'Jack',
      },
    };
    checkObjectInside(y);
    assert.deepEqual(
      y, {
        time: 12345,
        data: {
          name: 'Jack',
          checked: true,
        },
      },
    );
  },
);

test(
  'Create an arraySet function that accepts three parameters `arr`, `i` and `n`.  The first one is an array and the second one an index.  The function should place the value of the third parameter into the array at an index specified by the second parameter, if (and only if) such an index is already in the array.  Note that your function does not need to return a value because the array is modified directly.',
  function (assert) {
    if (!assert.functionExists('arraySet', ['arr', 'i', 'n'])) return;

    let x = [1, 2, 3];
    arraySet(x, 2, 'a');
    assert.deepEqual(
      x,
      [1, 2, 'a'],
      'the number three should be replaced with a because it is at position 2 in the array',
    );

    x = [1, 2, 3];
    arraySet(x, 0, 'a');
    assert.deepEqual(
      x,
      ['a', 2, 3],
      'the number 1 should be replaced with a because it is at position 0 in the array',
    );

    x = [1, 2, 3];
    arraySet(x, 3, 'a');
    assert.deepEqual(
      x, [1, 2, 3],
      'arraySet should do nothing if the index is outside the array',
    );

    x = [1, 2, 3];
    arraySet(x, -1, 'a');
    assert.deepEqual(
      x, [1, 2, 3],
      'arraySet should do nothing if the index is outside the array',
    );

    x = [1, 2, 3];
    arraySet(x, 'not a number', 'a');
    assert.deepEqual(
      x, [1, 2, 3],
      'arraySet should do nothing if the index is not a number',
    );

    x = [1, 2, 3];
    arraySet(x, 1.3, 'a');
    assert.deepEqual(
      [x, x[1.3]], [
        [1, 2, 3], undefined,
      ],
      'arraySet should do nothing if the index is not an integer number',
    );
  },
);

test(
  'Create a function `addAll` that accepts an array `arr` as a single parameter.  Assuming an array of numbers is passed, return the result of adding all those numbers.'
  ,
  function (assert) {
    if (!assert.functionExists('addAll', ['arr'])) return;

    assert.strictEqual(
      addAll([1]),
      1,
      'An array of 1 adds up to 1.',
    );
    assert.strictEqual(
      addAll([1, 1]),
      2,
      'Two ones add up to two.',
    );
    assert.strictEqual(
      addAll([1, 1, 1]),
      3,
      'Three ones add up to three.');
    assert.strictEqual(
      addAll([1, 2, 3, 4, 5]),
      15,
      'Adding 1,2,3,4,& 5 should equal 15.',
    );
    assert.strictEqual(
      addAll([1.1, 1.2, 1.3, 1.5]),
      5.1,
      'Adding decimals should work.',
    );
    assert.strictEqual(
      addAll([-100, -200, -300]),
      -600,
      'Adding negative numbers should work.');
    assert.strictEqual(
      addAll(
        [-200, 400]), 200, 'Adding positive and negative numbers should work');
  },
);


test('Create a function called `larger` that accepts two numbers `a` and `b`, and returns the larger.',
  function (assert) {
    if (!assert.functionExists('larger', ['a', 'b'])) return;

    assert.strictEqual(
      larger(1, 2),
      2,
      "2 should be returned because it's larger than 1",
    );
    assert.strictEqual(
      larger(1, 2),
      2,
      '2 is larger than 1 again',
    );
    assert.strictEqual(
      larger(1, 3),
      3,
      '3 is larger than 1',
    );
    assert.strictEqual(
      larger(2, 2),
      2,
      'Always 2',
    );
    assert.strictEqual(
      larger(3, -5),
      3,
      '3 is larger than -5',
    );
    assert.strictEqual(
      larger(-3, 5),
      5,
      '5 is larger than -3',
    );
  },
);


test('Create a function called `largest` that accepts an array `arr` of numbers and returns the largest number in the array.',
  function (assert) {
    if (!assert.functionExists('largest', ['arr'])) return;

    assert.strictEqual(largest([1, 2]), 2);
    assert.strictEqual(largest([0, 1, 2]), 2);
    assert.strictEqual(largest([1, 1, 3]), 3);
    assert.strictEqual(largest([2, 2, 2]), 2);
    assert.strictEqual(largest([-2, -32, -1.5]), -1.5);
    assert.strictEqual(largest([1, 2, 3, 4, 5, 6, 7, 8, 3, -5]), 8);
    assert.strictEqual(largest([1]), 1);
    assert.strictEqual(largest([]), null);

    assert.strictEqual(largest([1, 2, 22, 3]), 22, "If you use sort and then take the end number from the array, it's likely to go wrong and tell you that three is the largest number, not 22");

    const candidate = [1, 2, 22, 3];
    assert.strictEqual(largest(candidate), 22);
    assert.deepEqual(candidate, [1, 2, 22, 3], "You must not alter the candidate array.  After the test, the array should be the same as when it began.");

    try {
      const candidate = Object.freeze([1, 2, 22, 3]);
      largest(candidate)
    } catch (error) {
      assert.ok( false, "You must not alter the candidate array at all.  In this test the array is frozen so your code will crash out if you do anything other than read from it." );
    }

  },
);


test(
  'Create a function called compare that accepts two arrays of numbers (`a` and `b`) and compares the contents.  It should return true if the arrays are identical and false otherwise.',

  function (assert) {
    if (!assert.functionExists('compare', ['a', 'b'])) return;

    assert.ok(
      compare([1], [1]),
      'two arrays with 1, should pass',
    );

    assert.ok(
      compare([1, 2, 3], [1, 2, 3]),
      'two identical arrays, should pass',
    );

    assert.ok(
      compare([4, 7, 11, 17], [4, 7, 11, 17]),
      'two arrays, for idential elements each, should pass',
    );

    assert.notOk(
      compare([1, 2], [2, 1]),
      'expect to return false because 1!=2 and 2!=1',
    );

    assert.notOk(
      compare([4, 7, 11, 17], [109]),
      'totally false',
    );

    assert.notOk(
      compare([1, 2, 3], [1, 4, 3]),
      'return false because more than just the first or last index should be compared.',
    );

    assert.ok(
      compare([], []),
      "Two empty arrays should be the same"
    );

    assert.notOk(
      compare([], [1,2,3]),
      "An empty array is not the same as a filled array"
    );

  },
);


test(
  'Create a function `addToAll` that accepts an array `arr` and a number `n` as parameters.  Assuming an array of numbers is passed, return the same array with the second parameter added to each number within the array - such that ([1,2,3], 1) should return [2,3,4].',
  function (assert) {
    if (!assert.functionExists('addToAll', ['arr', 'n'])) return;

    const numbers = [1,2,3];
    const numbersAfter = addToAll(numbers, 1);
    assert.strictEqual(
      numbers,
      numbersAfter,
      "You must alter the numbers in the original array; not create a new array that looks the same with the new numbers within it."
    );

    assert.ok(
      compare(
        [2, 2],
        addToAll([1, 1], 1),
      ),
    );

    assert.ok(
      compare(
        [2, 3, 4],
        addToAll([1, 2, 3], 1),
      ),
    );

    assert.ok(
      compare(
        [55, 66, 77],
        addToAll([11, 22, 33], 44),
      ),
    );
  }
);


test(
  "Create a function `rememberThis` with one parameter `keepsake` which should be stored in a global variable called 'remembered' (which you need to declare).  Each subsequent call to rememberThis should overwrite the value of 'remembered'.",
  function (assert) {
    if (!assert.functionExists('rememberThis', ['keepsake'])) return;

    assert.ok(
      typeof rememberThis === 'function',
    );

    rememberThis('Apple');
    assert.strictEqual(remembered, 'Apple');

    rememberThis('Banana');
    assert.strictEqual(remembered, 'Banana');

    rememberThis(1337);
    assert.strictEqual(remembered, 1337);
  },
);


test(
  'Write a function `nArray` that takes a parameter `n` and returns an array with `n` numbers. The numbers in the array should increase from 1 to `n`.',
  function (assert) {
    if (!assert.functionExists('nArray', ['n'])) return;

    assert.deepEqual(nArray(1), [1]);
    assert.deepEqual(nArray(3), [1, 2, 3]);
    assert.deepEqual(nArray(6), [1, 2, 3, 4, 5, 6]);
  },

);

test(
  'Create a function `addAllOpt` that sums an array (`arr`). If the array is not present or empty, return 0',
  function (assert) {
    if (!assert.functionExists('addAllOpt', ['arr'])) return;

    assert.strictEqual(
      addAllOpt([3, 2, 1]), 6,
      'Function should return the sum of the array if it is present',
    );

    assert.strictEqual(
      addAllOpt(), 0,
      'Function should return 0 if it is not present',
    );

    assert.strictEqual(
      addAllOpt([]), 0,
      'Function should return 0 if the array is empty',
    );
  },
);


test(
  'Write a function `divisors` that takes takes two parameters `arr` and `div`, an array of numbers and a divisor.  Return a new array containing only the numbers in the first array that are exactly divisible by the second parameter.',
  function (assert) {
    if (!assert.functionExists('divisors', ['arr', 'div'])) return;

    assert.deepEqual(
      divisors([1, 2, 3, 4, 5, 6, 7, 8, 9], 3),
      [3, 6, 9],
      'Should be three, six and nine',
    );

    assert.deepEqual(
      divisors([51, 100, 101, 102, 103, 104], 51),
      [51, 102],
      'Should be 51 and 102 only',
    );
  },
);


test(
  'Write a function `multiples` that takes two parameters `n` and `m`.  It should return a new array of length `n`  where the numbers inserted increase from 1*m to n*m.',
  function (assert) {
    if (!assert.functionExists('multiples', ['n', 'm'])) return;

    assert.deepEqual(
      multiples(5, 2),
      [2, 4, 6, 8, 10],
    );

    assert.deepEqual(
      multiples(9, 3),
      [3, 6, 9, 12, 15, 18, 21, 24, 27],
    );
  },
);
