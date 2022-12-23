// array of names
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// check of array is empty
if (names.length === 0) {
    console.log('The array is empty');
} else {
    console.log('The array is not empty');
}

// else if
if (names.length === 0) {
    console.log('The array is empty');
} else if (names.length === 1) {
    console.log('The array has one element');
} else {
    console.log('The array has more than one element');
}

var day = 1;
if (day === 1) {
    console.log('Monday');
} else if (day === 2) {
    console.log('Tuesday');
} else if (day === 3) {
    console.log('Wednesday');
} else if (day === 4) {
    console.log('Thursday');
} else if (day === 5) {
    console.log('Friday');
} else if (day === 6) {
    console.log('Saturday');
} else if (day === 7) {
    console.log('Sunday');
} else {
    console.log('Invalid day');
}

// switch
var day = 1;
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day');
}