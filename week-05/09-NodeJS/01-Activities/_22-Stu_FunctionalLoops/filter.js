const originalArray = [1, 3, 2, 5, 10];
const evenNumbers = originalArray.filter(n => n % 2 === 0);
const moreThan5Array = originalArray.filter(n => n > 5);
const primeNumbers = originalArray.filter(n => {
  for (let i = 2; i < n; i++) if (n % i === 0) return false;
  return n !== 1;
});

console.log("original array:", originalArray);
console.log("even numbers: ", evenNumbers);
console.log("more than 5:", moreThan5Array);
console.log("prime numbers:", primeNumbers);
