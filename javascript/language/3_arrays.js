// array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array of strings
var strings = ["Hello", "World"];

// array of booleans
var booleans = [true, false, true];

// array of mixed data types
var mixed = [1, "Hello", true];

// array of arrays
var arrays = [[1, 2, 3], ["Hello", "World"], [true, false, true]];

// array of objects
var objects = [{ name: "John", age: 30 }, { name: "Peter", age: 31 }];

// array of functions
var functions = [function () { }, function () { }, function () { }];

// array operators

// access element
console.log(numbers[0]); // 1

// change element
numbers[0] = 0;

// array length
console.log(numbers.length); // 10

// add element to the end of the array
numbers.push(11);

// remove element from the end of the array
numbers.pop();

// add element to the beginning of the array
numbers.unshift(0);

// remove element from the beginning of the array
numbers.shift();

// find the index of an element in the array
console.log(numbers.indexOf(5)); // 5

// remove element from the array
numbers.splice(5, 1);

// copy an array
var numbersCopy = numbers.slice();

// join two arrays
var numbersAndStrings = numbers.concat(strings);

// sort the array
numbers.sort();

// reverse the array
numbers.reverse();

// iterate over the array
numbers.forEach(function (number) {
    console.log(number);
}   
);

// filter the array
var evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
}   
);

// map the array
var numbersDoubled = numbers.map(function (number) {
    return number * 2;
}   
);

// reduce the array
var sum = numbers.reduce(function (accumulator, number) {
    return accumulator + number;
}
, 0);

// find the maximum value in the array
var max = numbers.reduce(function (a, b) {
    return Math.max(a, b);
}
);