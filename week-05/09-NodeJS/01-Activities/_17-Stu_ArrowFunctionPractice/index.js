// 1. funnyCase makes each letter in a string the opposite case as the one before
const funnyCase = s => {
  let t = "";
  for (let i = 0; i < s.length; i++) t += i % 2 > 0 ? s[i].toUpperCase() : s[i].toLowerCase();
  return t;
};
console.log(funnyCase("You can't just do whatever you want all the time!")); // `yOu cAn't jUsT Do wHaTeVeR YoU WaNt aLl tHe tImE!`

// --------------------------------------------------------------------------
// 2. Map lets you loop over an array and modify the elements inside
const map = (A, cb) => {
  const result = [];
  for (let i = 0; i < A.length; i++) result.push(cb(A[i], i));
  return result;
};

const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubled = map(n, element => element * 2);
console.log(doubled); // `[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]`

// --------------------------------------------------------------------------
// 3. filter lets you loop over an array and remove elements
const filter = (A, cb) => {
  const result = [];
  for (let i = 0; i < A.length; i++) {
    if (cb(A[i], i)) {
      result.push(A[i]);
    }
  }
  return result;
};

const even = filter(n, currentElement => currentElement % 2 === 0);
console.log(even); // `[ 2, 4, 6, 8, 10 ]`

// --------------------------------------------------------------------------
// 4. netflixQueue is an object for managing your netflix queue
const netflixQueue = {
  queue: ["Mr. Nobody", "The Matrix", "Eternal Sunshine of the Spotless Mind", "Fight Club"],
  watchMovie: function() {
    this.queue.pop();
  },

  addMovie: function(movie) {
    this.queue.unshift(movie);
  },

  printQueue: function() {
    let list = "";
    for (let i = this.queue.length - 1; i >= 0; i--) {
      const currentMovie = this.queue[i];
      list += this.queue.length - i + ". " + currentMovie + "\n";
    }
    console.log(list);
  }
};

console.log("Printing movie queue!\n");
netflixQueue.printQueue();
netflixQueue.watchMovie();
console.log("\nWatched a movie!\n");
console.log("Printing movie queue!\n");
netflixQueue.printQueue();
console.log("\nAdding a movie!\n");
netflixQueue.addMovie("Black Swan");
console.log("Printing movie queue!\n");
netflixQueue.printQueue();
