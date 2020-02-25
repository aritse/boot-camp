const result = binarySearch([1, 23, 43, 56, 77, 89, 211, 212, 789, 972, 1001, 4567, 4599, 83784], 77);
console.log(result);

function binarySearch(numbersArr, searchElement) {

  // Set some starting values.
  const currentElement;
  const currentIndex;
  const [minIndex, maxIndex] = [0, numbersArr.length - 1];

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = numbersArr[currentIndex];
    if (currentElement < searchElement) minIndex = currentIndex + 1;
    else if (currentElement > searchElement) maxIndex = currentIndex - 1;
    else return currentIndex;
  }
  return false;
}
