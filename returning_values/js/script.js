// Return values from a function

function multi(num1, num2) {
    const result = num1 * num2;
    return result;
}

multi(2, 5); // You can't call the function like this

// You have to make a variable and log it

const myOutput = multi(5, 2);

console.log("myOutput: ", myOutput);

// Create a function: calculateTheCommission
// function takes an argument called amount
// it takes a % of 40
// return commission
// use this function to calculate sum 2000
// variable to assign the function and log it
// commission = amount * (percentage/ 100)

function calculateTheCommission(amount) {
    const commission = amount * (40 / 100);
    return commission;
}

const theCommission = calculateTheCommission(2000);

console.log("The commission: ", theCommission);

// Function to check passwords
// create a function call it checkPassword
// takes a string passwords
// if string 10 or more return true
// else return false

function checkPassword(passwordToCheck) {
    const numberOfChars = passwordToCheck.length;
    if (numberOfChars >= 10) {
        return true;
    }
    return false; // else is not needed
}

const isPasswordValid = checkPassword("password123");

console.log(isPasswordValid);
