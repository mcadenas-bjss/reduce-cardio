const functions = require("./");

describe("numbers", () => {
  it("should return total of numbers in array", () => {
    const tests = [
      { arr: [1, 2, 3, 4, 5], expected: 15 },
      { arr: [5, 5], expected: 10 },
      { arr: [100], expected: 100 },
    ];
    tests.forEach(({ arr, expected }) => {
      expect(functions.numbersToNumber(arr)).toBe(expected);
    });
  });
  it("should return string with each number repeated by its value", () => {
    const tests = [
      { arr: [1, 2, 3, 4, 5], expected: "122333444455555" },
      { arr: [5, 5], expected: "5555555555" },
      { arr: [1, 0, 0], expected: "1" },
    ];
    tests.forEach(({ arr, expected }) => {
      expect(functions.numbersToString(arr)).toBe(expected);
    });
  });
  it("should return array with odd numbers multiplied by themselves", () => {
    const tests = [
      { arr: [1, 2, 3, 4, 5], expected: [1, 9, 25] },
      { arr: [5, 5], expected: [25, 25] },
      { arr: [1, 0, 0], expected: [1] },
    ];
    tests.forEach(({ arr, expected }) => {
      expect(functions.numbersToArray(arr)).toEqual(expected);
    });
  });

  it("should return an object with count of each number", () => {
    const tests = [
      { arr: [1, 2, 3, 4, 5], expected: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 } },
      { arr: [5, 5], expected: { 5: 2 } },
      { arr: [1, 0, 0], expected: { 1: 1, 0: 2 } },
    ];
    tests.forEach(({ arr, expected }) => {
      expect(functions.numbersToObject(arr)).toEqual(expected);
    });
  });
});
describe("strings", () => {
  it("should return total number of characters in all strings", () => {
    const tests = [
      { arr: ["my", "name", "is", "slim", "shady"], expected: 17 },
      { arr: ["christmas", "time"], expected: 13 },
      { arr: ["who", "let", "the", "dogs", "out"], expected: 16 },
    ];
    tests.forEach(({ arr, expected }) => {
      expect(functions.stringsToNumber(arr)).toBe(expected);
    });
  });
  it("should return string with each item repeated by is length", () => {
    const tests = [
      {
        arr: ["my", "name", "is", "slim", "shady"],
        expected:
          "mymynamenamenamenameisisslimslimslimslimshadyshadyshadyshadyshady",
      },
      {
        arr: ["christmas", "time"],
        expected:
          "christmaschristmaschristmaschristmaschristmaschristmaschristmaschristmaschristmastimetimetimetime",
      },
      { arr: ["yay"], expected: "yayyayyay" },
    ];
    tests.forEach(({ arr, expected }) => {
      expect(functions.stringsToString(arr)).toBe(expected);
    });
  });
  it("should return an array of the just the even length strings capitalised", () => {
    const tests = [
      {
        arr: ["my", "name", "is", "slim", "shady"],
        expected: ["MY", "NAME", "IS", "SLIM"],
      },
      {
        arr: ["christmas", "time"],
        expected: ["TIME"],
      },
      { arr: ["yay"], expected: [] },
    ];
    tests.forEach(({ arr, expected }) => {
      expect(functions.stringsToArray(arr)).toEqual(expected);
    });
  });
  it("should return an object with the count of each string", () => {
    const tests = [
      {
        arr: ["my", "name", "is", "slim", "shady"],
        expected: { my: 1, name: 1, is: 1, slim: 1, shady: 1 },
      },
      {
        arr: ["duck", "duck", "duck", "greygoose"],
        expected: { duck: 3, greygoose: 1 },
      },
      { arr: ["yay"], expected: { yay: 1 } },
    ];
    tests.forEach(({ arr, expected }) => {
      expect(functions.stringsToObject(arr)).toEqual(expected);
    });
  });
});
describe("objects", () => {
  it("should return the total cost of the objects", () => {
    const objects = [
      { type: "cheese", cost: 3 },
      { type: "sausage", cost: 5 },
      { type: "bread", cost: 1.5 },
    ];
    expect(functions.objectsToNumber(objects)).toEqual(9.5);
  });
  it("should return just the names of people with rating over 4", () => {
    const objects = [
      { name: "Ben", rating: 2 },
      { name: "Liz", rating: 5 },
      { name: "Tao", rating: 5 },
      { name: "Mell", rating: 5 },
      { name: "James", rating: 5 },
      { name: "Tim", rating: 5 },
    ];
    expect(functions.objectsToArray(objects)).toEqual([
      "Liz",
      "Tao",
      "Mell",
      "James",
      "Tim",
    ]);
  });
  it("should return one object with key/value pairs from all objects", () => {
    const objects = [
      { height: "6ft" },
      { length: "7ft" },
      { wings: true },
      { type: "flying/mythical" },
      { name: "Bondiwando" },
    ];
    expect(functions.objectsToObject(objects)).toEqual({
      height: "6ft",
      length: "7ft",
      wings: true,
      type: "flying/mythical",
      name: "Bondiwando",
    });
  });
});
describe("arrays", () => {
  it("should sum the lengths of the arrays", () => {
    const arrays = [[1, 2, 3, 4, 55], [1], [99, 999, 99], [100]];
    expect(functions.arraysToNumber(arrays)).toBe(10);
  });
  it("should return a string with the just the first item of the arrays with a length divisible by 3", () => {
    const arrays = [[1, 2, 3, 4, 55], [1], [99, 999, 99], [100]];
    expect(functions.arraysToString(arrays)).toBe("99");
  });
  it("should return a string with the just the first item of the arrays with a length divisible by 3", () => {
    const arrays = [
      ["You", "are", "cool"],
      ["WIN", "WIN", "WIN"],
      ["nothing..."],
    ];
    expect(functions.arraysToString(arrays)).toBe("YouWIN");
  });
  it("should return one array with all the items from the arrays that contain only strings", () => {
    const arrays = [
      [1, 2, 3, 4, 55],
      [1],
      [99, 999, 99],
      [100],
      ["You", "are", "cool"],
      ["WIN", "WIN", "WIN"],
      ["nothing..."],
    ];
    expect(functions.arraysToArray(arrays)).toEqual([
      "You",
      "are",
      "cool",
      "WIN",
      "WIN",
      "WIN",
      "nothing...",
    ]);
  });
  it("should return an object with the first item of each array as the keys and the second item in each array as the values", () => {
    const arrays = [
      ["name", "Ben"],
      ["size", "Big"],
      ["likesChocolate", true],
    ];
    expect(functions.arraysToObject(arrays)).toEqual({
      name: "Ben",
      size: "Big",
      likesChocolate: true,
    });
  });
});

describe("extras", () => {
  it("should remove all the items at even indexes, and return the items odd indexes' name property", () => {
    const array = [{ name: "Joe" }, { name: "Chris" }, { name: "Patrick" }];
    expect(functions.removeOddIndexesAndExtractName(array)).toEqual(["Chris"]);
  });
  it("should return an array without duplicates with all the words to lowercase", () => {
    const array = ["YES", "YES", "YES", "YES", "NO"];
    expect(functions.removeDuplicatesAndLower(array)).toEqual(["yes", "no"]);
  });
});
