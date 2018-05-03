// Problems for exercises and homework for the "JavaScript For Front-End Course @ SoftUni".

function printReversedNumbers(input) {
    input.reverse().forEach(function (element) {
        console.log(element)
    });
}

printReversedNumbers([35, 44, 5, 60, 45]);