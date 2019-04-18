function heeHaw($number) {
    var number = 1;
    if (typeof $number != "number") {
        console.error('Error. Please enter a number.');
    } else {
        while (number <= $number) {
            if (number % 5 == 0 && number % 3 == 0) {
                console.log('Hee Haw!');
            } else if (number % 3 == 0) {
                console.log('Hee!');
            } else if (number % 5 == 0) {
                console.log('Haw!');
            } else {
                console.log(number);
            }
            number++;
        }
    }
}