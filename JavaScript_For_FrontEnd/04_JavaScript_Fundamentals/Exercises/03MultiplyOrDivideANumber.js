// Problems for exercises and homework for the "JavaScript For Front-End Course @ SoftUni".

function multiplyOrDivideNumber(n, x) {
    if (x >= n) {
        return n * x;
    }
    else {
        return n / x;
    }
}

console.log(multiplyOrDivideNumber(2,3));