function foo(a, b) {  if (typeof a !== 'number' || typeof b !== 'number') {    throw new Error('Both inputs must be numbers');  }  return a + b;}let x = foo(1, 2);console.log(x); // Output: 3let y = foo(1, '2'); // Throws an error