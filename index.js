// Use reduce to turn the array of numbers into single number which is the sum of all the items in the array
function numbersToNumber(numbers) {}

// Use reduce to make a string containing each number in the array, repeated the number of times of its value
// e.g. [1,2,3] => "122333", [0] => ""
function numbersToString(numbers) {}

// Use reduce to make an array of the odd numbers multiplied by themselves, discard the even numbers.
// e.g. [1,2,3] => [1,9]

function numbersToArray(numbers) {}
// Use reduce to return an object with the keys the numbers in the array, and the values the number of times that number occurs.
// e.g. [1,2,3,3] => {1:1, 2:1, 3:2}
function numbersToObject(numbers) {}

// Use reduce to return the total of the length of all strings in the array
function stringsToNumber(strings) {}
 
// Use reduce to return a string containing each word repeated the number of times it is long
// e.g. ["ben", "is", "cool"] => "benbenbenisiscoolcoolcoolcool"
function stringsToString(strings) {}

// Use reduce to return an array of the just the even length strings capitalised.
// e.g. ["are", "you", "yelling?"] => ["YELLING?"]
function stringsToArray(strings) {}

// Should return an object with the keys the strings in the array, and the values the number of times that string occurs.
// e.g. ["ben"] => {ben:1}
function stringsToObject(strings) {}

// Use reduce to return the sum of the cost of all items
// e.g. [{type: bread, cost: 1.5}, {type: apple, cost:1.5}] => 3
function objectsToNumber(objects) {}

// Use reduce to return just the names of people with rating over 4
// e.g. [{name:"david",rating:5},{name:"billy",rating:1}] => ["david"]
function objectsToArray(objects) {}

// Use reduce to make one object with all the key value pairs from each object in the array.
// e.g. [{name:"Ben"},{type:"Beardy"}] => {name:"Ben",type:"Beardy"}
function objectsToObject(objects) {}

// Use reduce to return a number which is the sum of all the lengths of the arrays
// e.g. [[1,2,3], [100]] => 4
function arraysToNumber(arrays) {}

// Use reduce to return a string with the just the first item of the arrays with a length divisible by 3
// e.g. [[1,2,3],[4,5,6],[7,8,9,10]] => "14"
function arraysToString(arrays) {}

// Use reduce to return one array with all the items from the arrays that contain only strings
// e.g. [[1,2,3],["yes", "no"]] => ["yes", "no"]
function arraysToArray(arrays) {}

// Use reduce to return an object with the first item of each array as the keys and the second item in each array as the values
// e.g. [["name", "ben"]] => {name:"ben"}

function arraysToObject(arrays) {}

// Use reduce to remove all the items at even indexes, and return the items odd indexes' name property
// e.g. [{name:"miles"}, {name:"james"}, {name:"josh"}] => ["james"]
function removeOddIndexesAndExtractName(array) {}

// Use the array
// Use reduce to return an array without duplicates with all the words to lowercase
// e.g. ["YOU", "ARE", "ARE", "AMAZING"] => ["you", "are", "amazing"]
function removeDuplicatesAndLower(array) {}

module.exports = {
  numbersToNumber,
  numbersToString,
  numbersToArray,
  numbersToObject,
  stringsToNumber,
  stringsToString,
  stringsToArray,
  stringsToObject,
  objectsToNumber,
  objectsToArray,
  objectsToObject,
  arraysToNumber,
  arraysToString,
  arraysToArray,
  arraysToObject,
  removeOddIndexesAndExtractName,
  removeDuplicatesAndLower,
};
