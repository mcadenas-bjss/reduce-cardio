/**
 * Use reduce to turn the array of numbers into single number which is the sum of all the items in the array
 * @param {*} numbers
 * @returns {number} Sum of all numbers
 */
function numbersToNumber(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

/**
 * Use reduce to make a string containing each number in the array, repeated the number of times of its value
 * e.g. [1,2,3] => "122333", [0] => ""
 * @param {*} numbers
 * @returns {string} string containing each number in the array, repeated the number of times of its value
 */
function numbersToString(numbers) {
  return numbers.reduce(
    (a, b) => a + Array.from({ length: b }, () => b).join(""),
    ""
  );
}

/**
 *  Use reduce to make an array of the odd numbers multiplied by themselves, discard the even numbers.
 *  e.g. [1,2,3] => [1,9]
 * @param {number[]} numbers
 * @returns {number[]} array of the odd numbers multiplied by themselves
 */
function numbersToArray(numbers) {
  return numbers.reduce((a, b) => (b & 1 ? a.concat(b * b) : a), []);
}

/**
 * Use reduce to return an object with the keys the numbers in the array, and the values the number of times that number occurs.
 * e.g. [1,2,3,3] => {1:1, 2:1, 3:2}
 * @param {number[]} numbers
 * @returns {object} object with the keys the numbers in the array, and the values the number of times that number occurs
 */
function numbersToObject(numbers) {
  return numbers.reduce((a, b) => ({ ...a, [b]: (a[b] ?? 0) + 1 }), {});
}

/**
 *  Use reduce to return the total of the length of all strings in the array
 * @param {string[]} strings
 * @returns {number} sum of string lengths
 */
function stringsToNumber(strings) {
  return strings.reduce((a, b) => a + b.length, 0);
}

/**
 * Use reduce to return a string containing each word repeated the number of times it is long
 *  e.g. ["ben", "is", "cool"] => "benbenbenisiscoolcoolcoolcool"
 * @param {string[]} strings
 * @returns {string} string containing each word repeated the number of times it is long
 */
function stringsToString(strings) {
  return strings.reduce(
    (a, b) => a + Array.from({ length: b.length }, () => b).join(""),
    ""
  );
}

/**
 * Use reduce to return an array of the just the even length strings capitalised.
 * e.g. ["are", "you", "yelling?"] => ["YELLING?"]
 * @param {string[]} strings
 * @returns {string[]} array of the just the even length strings capitalised
 */
function stringsToArray(strings) {
  return strings.reduce(
    (a, b) => (!(b.length & 1) ? a.concat(b.toUpperCase()) : a),
    []
  );
}

/**
 * Should return an object with the keys the strings in the array, and the values the number of times that string occurs.
 * e.g. ["ben"] => {ben:1}
 * @param {string[]} strings
 * @returns {object} object with the keys the strings in the array, and the values the number of times that string occurs
 */
function stringsToObject(strings) {
  return strings.reduce((a, b) => ({ ...a, [b]: (a[b] ?? 0) + 1 }), {});
}

/**
 * Use reduce to return the sum of the cost of all items
 * e.g. [{type: bread, cost: 1.5}, {type: apple, cost:1.5}] => 3
 * @param {{cost:number}[]} objects
 * @returns {number} cost of all items
 */
function objectsToNumber(objects) {
  return objects.reduce((a, b) => a + b["cost"], 0);
}

/**
 * Use reduce to return just the names of people with rating over 4
 * e.g. [{name:"david",rating:5},{name:"billy",rating:1}] => ["david"]
 * @param {{rating: number}[]} objects
 * @returns {string[]} array with names rated 4 or higher
 */
function objectsToArray(objects) {
  return objects.reduce((a, b) => (b.rating > 4 ? a.concat(b.name) : a), []);
}

/**
 * Use reduce to make one object with all the key value pairs from each object in the array.
 * e.g. [{name:"Ben"},{type:"Beardy"}] => {name:"Ben",type:"Beardy"}
 * @param {object} objects
 * @returns {object} object with all the key value pairs from each object in the array
 */
function objectsToObject(objects) {
  return objects.reduce((a, b) => ({ ...a, ...b }), {});
}

/**
 * Use reduce to return a number which is the sum of all the lengths of the arrays
 * e.g. [[1,2,3], [100]] => 4
 * @param {number[][]} arrays
 * @returns {number} sum of all the lengths of the arrays
 */
function arraysToNumber(arrays) {
  return arrays.reduce((a, b) => a + b.length, 0);
}

/**
 * Use reduce to return a string with the just the first item of the arrays with a length divisible by 3
 * e.g. [[1,2,3],[4,5,6],[7,8,9,10]] => "14"
 * @param {number[][]} arrays
 * @returns {string} string with the just the first item of the arrays with a length divisible by 3
 */
function arraysToString(arrays) {
  // alternative to modulus using bitwise operations
  const divis3 = (x) => {
    while (x & ~3) {
      sum = 0;
      while (x) {
        sum += x & 3;
        x >>= 2;
      }
      x = sum;
    }
    return x == 0 || x == 3;
  };

  return arrays.reduce((a, b) => a + (b.length % 3 === 0 ? b[0] : ""), "");
}

/**
 * Use reduce to return one array with all the items from the arrays that contain only strings
 * e.g. [[1,2,3],["yes", "no"]] => ["yes", "no"]
 * @param {*[]} arrays
 * @returns {string[]} array with all the items from the arrays that contain only strings
 */
function arraysToArray(arrays) {
  return arrays.reduce(
    (a, b) => (b.every((v) => typeof v === "string") ? [...a, ...b] : a),
    []
  );
}

/**
 * Use reduce to return an object with the first item of each array as the keys and the second item in each array as the values
 * e.g. [["name", "ben"]] => {name:"ben"}
 * @param {string[][]} arrays
 * @returns {object} object with the first item of each array as the keys and the second item in each array as the values
 */
function arraysToObject(arrays) {
  return arrays.reduce((a, b) => ({ ...a, [b[0]]: b[1] }), {});
}

/**
 * Use reduce to remove all the items at even indexes, and return the items odd indexes' name property
 * e.g. [{name:"miles"}, {name:"james"}, {name:"josh"}] => ["james"]
 * @param {{name:string}[]} array
 * @returns {string[]} array with names of all odd index items
 */
function removeOddIndexesAndExtractName(array) {
  return array.reduce((a, b, i) => (i & 1 ? a.concat(b.name) : a), []);
}

/**
 * Use the array
 * Use reduce to return an array without duplicates with all the words to lowercase
 * e.g. ["YOU", "ARE", "ARE", "AMAZING"] => ["you", "are", "amazing"]
 * @param {string[]} array
 * @returns {string[]} array without duplicates with all the words to lowercase
 */
function removeDuplicatesAndLower(array) {
  return Array.from(
    array.reduce((a, b) => a.add(b.toLocaleLowerCase()), new Set())
  );
}

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
