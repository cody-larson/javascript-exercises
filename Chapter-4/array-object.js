function arrayToObject(array) {

    var result = {
        strings: [],
        numbers: [],
        booleans: []
    };

    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] == "string") {
            result.strings.push(array[i]);
        } else if(typeof array[i] == "number") {
            result.numbers.push(array[i]);
        } else if(typeof array[i] == "boolean") {
            result.booleans.push(array[i]);
        }
    }
    console.log(result);
    return result;
}