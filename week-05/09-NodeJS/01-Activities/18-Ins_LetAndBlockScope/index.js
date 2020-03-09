// 1. When using var, our counter exists after a for-loop is done
for (var i = 0; i < 5; i++) console.log(i);
console.log(i); // prints 5

// When using let, our counter is not defined outside of the for-loop block
let x = 42;
for (let j = 0; j < 5; j++) {
  console.log(j);
  console.log(x);
}
try {
  console.log(j);
} catch (error) {
  console.error("j is undefined");
}

// 2. When using while loops, any values we create inside exist outside of the while-loop block
var count = 0;
while (count < 5) {
  var tripled = count * 3;
  count++;
}
console.log(tripled); // Prints 12

// 3. When using let, values defined inside of the while-loop block don't exist outside of it
let c = 0;
while (c < 5) {
  let quadrupled = c * 4;
  c++;
}
try {
  console.log(quadrupled);
} catch (error) {
  console.error("quadrupled is undefined");
}

// 4. When writing conditionals, values defined inside the conditional block exist outside of it
if (true) {
  var favoriteColor = "red";
}
console.log(favoriteColor); // Prints red

// When using let, values defined inside of a conditional block don't exist outside
let favoriteFood;
if (true) {
  favoriteFood = "pizza";
}

// This works since favoriteColor is not defined inside of a block
console.log(favoriteFood); // Prints `pizza`

/* So, the point is that a set of curly braces indicate a block. There are 2 different kinds of block - statement and functions.
Statement such as 'if', 'while', and 'for'. Having said that, the difference between 'let' and 'var' is that the scope of 'var' is within
a function block whereas the scope of 'let' is within the innermost block whether it be a statement or a function.
Which is more intuitive? I'd say, 'let' is. 'var' behaves unintuitively. Therefore, please start using 'let' instead of 'var'
*/
