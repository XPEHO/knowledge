// create a function to compute average of number array
function average(numbers) {
    var sum = 0;
    numbers.forEach(function (number) {
        sum += number;
    }   
    );
    return sum / numbers.length;
}

// compute average of numbers
var numbers = [1, 2, 3, 4, 5];
var averageOfNumbers = average(numbers);
console.log(averageOfNumbers); // 3