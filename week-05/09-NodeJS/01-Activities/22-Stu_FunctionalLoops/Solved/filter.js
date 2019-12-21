const originalArray = [1, 3, 2, 5, 10];

const evenNumbers = originalArray.filter(n => n % 2 == 0);
const moreThan5Array = originalArray.filter(n => n > 5);

const primeNumbers = originalArray.filter(nnm => {
  for (let i = 2; i < nnm; i++) if (nnm % i === 0) return false;
  return nnm !== 1;
});

console.log("even numbers: ", evenNumbers);
console.log("more than 5:", moreThan5Array);
console.log("prime numbers:", primeNumbers);
console.log("original array:", originalArray);

// Complete the following

// 1. A filter that runs through the original array and creates a new array containing only its prime numbers (`primeArray`)
// Use the isPrime function provided to help with this

// 2. A filter that runs through the original array and creates a new array containing only its numbers larger than 5(`moreThan5Array`)

// Your code here

// Bonus: Use arrow functions as callbacks!
