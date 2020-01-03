// 1. Copy the songs array into another array using spread and console.log what it returns.
const songs = ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];
const copy = [...songs];
console.log(copy);

// 2.  Modify the add function so that is uses the rest operator and maintains the same functionality.
// You should still be able to pass in any number of arguments. Run the code first in your console to see the functionality.

const add = (...nums) => nums.reduce((sum, n) => sum + n, 0);
console.log(add(1, 2, 3)); // 6
