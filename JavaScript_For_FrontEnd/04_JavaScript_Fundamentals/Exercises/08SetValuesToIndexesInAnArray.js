// Problems for exercises and homework for the "JavaScript For Front-End Course @ SoftUni".

function setValues(length, value) {

    let array = [];

    for (let i = 0; i < value.length; i++) {

        let currentValue = value[i].toString();
        let tokens = currentValue.split('-');

        let index = tokens[0].substr(0, tokens[0].indexOf(' ')); // "72"
        let valueToIndex = tokens[1].substr(tokens[1].indexOf(' ') + 1);

        array[index] = valueToIndex;
    }

    // Print array
    for (let i = 0; i < length; i++) {
        if (array[i] == undefined || array[i] == null || array[i] == "") {
            array[i] = 0;
        }
        console.log(array[i])
    }
}

setValues(5, ["0 - 3", "3 - -1", "4 - 2"])