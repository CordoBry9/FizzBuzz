// entry point
function getInput() {

    //grabs Fizz value that user inputted, specifically the string they inputted instead of whole element with .value
    let fizzNumber = document.getElementById('fizzNumber').value;

    let buzzNumber = document.getElementById('buzzNumber').value;

    let numberLimit = document.getElementById('numberLimit').value;

    //turns strings into integers/Numbers
    fizzNumber = Number(fizzNumber);
    buzzNumber = Number(buzzNumber);
    numberLimit = Number(numberLimit)

    if (isNaN(fizzNumber) || isNaN(buzzNumber)) { //NaN = Not a Number, isNaN checks if the value stored is not a number
        //display an error message
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Please enter valid numbers for FizzBuzz to use.',
            backdrop: false,
        });
    }

    else if ((fizzNumber < 1) || (fizzNumber > 1000) || (buzzNumber > 1000) || (buzzNumber < 1)) {

        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Please make sure that the numbers are between 1-1000.',
            backdrop: false,
        });


    }
    else if (numberLimit < 0 || numberLimit > 1000) {

        swal.fire({
            icon: 'error',
            title: 'Oops!',
            backdrop: false,
            text: 'Please make sure that the numbers are between 1-1000.',
        });
    }
    else if (numberLimit < fizzNumber || numberLimit < buzzNumber) {
        swal.fire({
            icon: 'error',
            title: 'Oops!',
            backdrop: false,
            text: `Please set a limit greater than the fizzbuzz values.`
        });
    }
    else {
        // display numbers

        // calls generatefizzbuzz, makes its parameters values of 
        // fizzNumber nad buzzNumber and can be replaced in the generatedFizzBuzz 
        // Function as any other parameter
        let generatedFizzBuzz = generateFizzBuzz(fizzNumber, buzzNumber, numberLimit);
        displayFizzBuzz(generatedFizzBuzz);
    }
}


function generateFizzBuzz(fizz, buzz, limit) {

    let numbers = [];

    for (let i = 1; i <= limit; i++) {



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


