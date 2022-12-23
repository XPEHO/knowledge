// create an object
var myObject = {
    name: "John",
    age: 30,
    city: "New York"
};

// access object properties
console.log(myObject.name); // John

// change object properties
myObject.name = "Peter";
console.log(myObject.name); // Peter

// add new properties
myObject.country = "USA";
console.log(myObject.country); // USA

// delete properties
delete myObject.city;

// check if property exists
console.log(myObject.hasOwnProperty("name")); // true
console.log(myObject.hasOwnProperty("city")); // false

// object constructor
var myObject2 = new Object();
myObject2.name = "John";
myObject2.age = 30;
myObject2.city = "New York";

// object constructor with properties
var myObject3 = new Object({
    name: "John",
    age: 30,
    city: "New York"
});

