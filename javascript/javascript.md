# Javascript

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png" width="200" height="200" />

Javascript is a programming language that is used to make web pages interactive. It is the most popular programming language in the world.

It was created by Brendan Eich in 1995. It was originally called Mocha, but was renamed to LiveScript. It was renamed to Javascript in 1996.

*Table of Contents*

* [How to install ?](#how-to-install-)
* [Example](#example)
* [Use it in HTML](#use-it-in-html)
* [Use it in a web browser console](#use-it-in-a-web-browser-console)
* [Import js file in HTML](#import-js-file-in-html)
* [Variables](#variables)
* [Data Types](#data-types)
* [String](#string)
* [Number](#number)
* [Boolean](#boolean)
* [Object](#object)
* [Array](#array)
* [Operators](#operators)
* [Conditions](#conditions)
* [Loops](#loops)
* [Functions](#functions)

## How to install ?

No installation is required. You can start coding in Javascript right away in a web page or in a web browser console.

## Example

This example shows how to display a message in the console.

```javascript
console.log("Hello World"); // Display a message in the console
```

## Use it in HTML

Javascript can be used directly in HTML with the `<script>` tag.

```html
<html>
<head>
    <title>My first Javascript</title>
    <script>
        function sayHello() {
            console.log("Hello World");
        }
    </script>
</head>
<body>
    <h1>My first Javascript</h1>
    <p>Click the button to display a message.</p>
    <button onclick="sayHello()">Click me</button>
</body>
</html>
```

> Hint
>
> Open [script_tag.js](html_usage/script_tag/script_tag.js) file with your web browser to test.

## Use it in a web browser console

Open the web browser console and type the following:

```javascript
console.log("Hello World");
```

## Import js file in HTML

You can also use an external Javascript file in HTML.

Create a file called `sayHello.js` and add the following code:

```javascript
function sayHello() {
    console.log("Hello World");
}
```

Then, add the following code in your HTML file:

```html 
<html>
<head>
    <title>My first Javascript</title>
</head>
<body>
    <h1>My first Javascript</h1>
    <p>Click the button to display a message.</p>
    <button onclick="sayHello()">Click me</button>
    <script src="sayHello.js"></script>
</body>
</html>
```

> Hint
>
> Open [import_script.html](html_usage/import/import_script.html) file with your web browser to test.

## Variables

Variables are containers for storing data values.

```javascript
var x = 5;
var y = 6;
var z = x + y;
```

[More info](https://www.w3schools.com/js/js_variables.asp)

## Data Types

In Javascript, there are 5 different data types that can contain values:

* String
* Number
* Boolean
* Object
* Array

## String

A string is a series of characters like "Hello World".

```javascript
var carName = "Volvo";
```

## Number

A number can be a positive or negative integer or floating point number.

```javascript
var x = 34.00;
```

## Boolean

A boolean can only have two values: true or false.

```javascript
var x = 5;
var y = 5;
var z = 6;
(x == y) // Returns true
(x == z) // Returns false
```

> Hint
>
> Open the file [language/2_variables.js](language/1_variables.js) to see more examples.

## Object

An object is a collection of properties, and a property is an association between a name (or key) and a value.

```javascript
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

> Hint
> 
> Open the file [language/2_objects.js](language/2_objects.js) to see more examples.

## Array

An array is a special variable, which can hold more than one value at a time.

```javascript
var cars = ["Saab", "Volvo", "BMW"];
```

> Hint
>
> Open the file [language/3_arrays.js](language/3_arrays.js) to see more examples.

## Operators

Operators are used to assign values, compare values, perform arithmetic operations, and more.

```javascript
var x = 5;
var y = 2;
var z = x + y; // z = 7
```

> Hint
>
> Open the file [language/4_operators.js](language/4_operators.js) to see more examples.

## Conditions

Conditions are used to perform different actions based on different conditions.

```javascript
var time = new Date().getHours();
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
```

> Hint
>
> Open the file [language/5_conditions.js](language/5_conditions.js) to see more examples.

## Loops

Loops are used to perform the same action over and over again, each time with a different value.

```javascript
var text = "";
var i;
for (i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}
```

> Hint
>
> Open the file [language/6_loops.js](language/6_loops.js) to see more examples.

## Functions

Functions are used to perform certain actions, and they are executed when "something" invokes them (calls them).

```javascript
function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
}
```

> Hint
>
> Open the file [language/7_functions.js](language/7_functions.js) to see more examples.