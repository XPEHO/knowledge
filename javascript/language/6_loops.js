// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do while loop
var i = 0;
do {
    console.log(i);
    i++;
}
while (i < 5);

// for in loop
var person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for (var key in person) {
    console.log(key + ': ' + person[key]);
}

// for of loop
var numbers = [1, 2, 3, 4, 5];
for (var number of numbers) {
    console.log(number);
}

// break
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // this is bad, do not reproduce this at home
    }
    console.log(i);
}

// continue
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue; // this is also bad, do not reproduce this at home
    }
    console.log(i);
}

// nested loops
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) { // nest multiple loops can be very hard to read and maintain, avoid this
        console.log(i + ',' + j);
    }
}