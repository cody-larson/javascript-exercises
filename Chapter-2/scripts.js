var number = 1;
while (number <= 100) {
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