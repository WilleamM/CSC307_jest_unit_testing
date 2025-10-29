import mut from './module.js'; // MUT = Module Under Test


// sum() tests
test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});


// div() tests
test('Testing div -- divide positive numbers', () => {
  const expected = 5;
  const got = mut.div(10, 2);
  expect(got).toBe(expected);
});

test('Testing div -- divide negative numbers', () => {
  const expected = -4.5;
  const got = mut.div(-9, 2);
  expect(got).toBe(expected);
});

test('Testing div -- divide resulting in decimal value', () => {
  const expected = 3;
  const got = mut.div(7.5, 2.5);
  expect(got).toBe(expected);
});

test('Testing div -- divide by zero (positive number)', () => {
  const expected = Infinity;
  const got = mut.div(5, 0);
  expect(got).toBe(expected);
});

test('Testing div -- divide by zero (negative number)', () => {
  const expected = -Infinity;
  const got = mut.div(-5, 0);
  expect(got).toBe(expected);
});

test('Testing div -- zero divided by zero should return NaN', () => {
  const got = mut.div(0, 0);
  expect(Number.isNaN(got)).toBe(true);
});

// containsNumbers() tests
test('Testing containsNumbers -- no numbers', () => {
  const expected = false;
  const got = mut.containsNumbers('cal poly');
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- with numbers', () => {
  const expected = true;
  const got = mut.containsNumbers('Currently in my 4th year');
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- empty string should return false', () => {
  const expected = false;
  const got = mut.containsNumbers('');
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- whitespace, should return false', () => {
  const expected = false;
  const got = mut.containsNumbers('   ');
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- special characters', () => {
  const expected = false;
  const got = mut.containsNumbers('!@#$%^&*()');
  expect(got).toBe(expected);
});

