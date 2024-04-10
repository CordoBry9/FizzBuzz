// entry point
function getInput() {

    //grabs Fizz value that user inputted, specifically the string they inputted instead of whole element with .value
    let fizzNumber = document.getElementById('fizzNumber').value;

    let buzzNumber = document.getElementById('buzzNumber').value;

    //turns strings into integers/Numbers
    fizzNumber = Number(fizzNumber);
    buzzNumber = Number(buzzNumber);

    if (isNaN(fizzNumber) || isNaN(buzzNumber)) { //NaN = Not a Number, isNaN checks if the value stored is not a number
        //display an error message
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Please enter valid numbers for FizzBuzz to use.',
            backdrop: false,
        });
    }

    else if ((fizzNumber < 1) || (fizzNumber > 100) || (buzzNumber > 100) || (buzzNumber < 1)) {

        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Please make sure that the numbers are between 1-100.',
            backdrop: false,
        });
    }

    else {
        // display numbers

        // calls generatefizzbuzz, makes its parameters values of 
        // fizzNumber nad buzzNumber and can be replaced in the generatedFizzBuzz 
        // Function as any other parameter
        let generatedFizzBuzz = generateFizzBuzz(fizzNumber, buzzNumber);
        displayFizzBuzz(generatedFizzBuzz);
    }
}


function generateFizzBuzz(fizz, buzz) {

    let numbers = [];

    for (let i = 1; i <= 100; i++) {



        if (i % fizz == 0 && i % buzz == 0) {
            numbers.push("fizzbuzz");
        }

        else if (i % fizz == 0) {

            numbers.push("fizz");

        }

        else if (i % buzz == 0) {

            numbers.push("buzz");
        }

        else {

            numbers.push(i);

        }
    }

    return numbers;
}


function displayFizzBuzz(fizzbuzzArray) {

    let fbTable = '';

    for (let index = 0; index < fizzbuzzArray.length; index += 1) {
        
        let className = '';
        let number = fizzbuzzArray[index];

        // if (number == 'fizz') {
        //     className = 'fizz';
        // }
        // else if (number == 'buzz') {
        //     className = 'buzz';

        // }

        // else if (number == 'fizzbuzz') {
        //     className = 'fizzbuzz';

        // }

        fbTable += `<tr class="${number}"><td class="${number}">${number}</td></tr>`;
    }

    let tresults = document.getElementById('results');
    tresults.innerHTML = fbTable;

}


