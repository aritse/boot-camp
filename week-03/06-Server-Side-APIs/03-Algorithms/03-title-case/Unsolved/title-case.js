// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    var strArr = str.split(" ");
    var resultsArr = [];
    for (let i = 0; i < strArr.length; i++) {
        // console.log(strArr[i][0].toUpperCase())
        // var thisWord = strArr[i];
        // thisWord[0] = thisWord[0].toUpperCase();
        // console.log(thisWord);
        var thisWordArr = strArr[i].split('');
        console.log(thisWordArr);
        thisWordArr[0] = thisWordArr[0].toUpperCase();
        resultsArr.push(thisWordArr.join(""));
        console.log(resultsArr);
    }
    var result = resultsArr.join(' ');
    console.log(result);
    return result;
};
