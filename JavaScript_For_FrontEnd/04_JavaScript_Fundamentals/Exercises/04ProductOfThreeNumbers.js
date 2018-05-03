// Problems for exercises and homework for the "JavaScript For Front-End Course @ SoftUni".

function typeOfProduct(x, y, z) {
    let negativeNumbers = 0;

    // Special case
    if (x == 0 || y == 0 || z == 0) {
        return "Positive";
    }

    // Count odd numbers
    if (x < 0) {
        negativeNumbers++;
    }
    if (y < 0) {
        negativeNumbers++;
    }
    if (z < 0) {
        negativeNumbers++;
    }

    // If they are odd number, the result will be negative
    if (negativeNumbers % 2 !== 0) {
        return "Negative";
    }
    else {
        return "Positive";
    }
}

console.log(typeOfProduct(-5, 0, -2));