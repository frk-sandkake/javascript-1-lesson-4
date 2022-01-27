// Select input and BTN

const input = document.querySelector('input');
const button = document.querySelector('button');

// Track if BTN is clicked

console.log(button);
button.onclick = function () {
    console.log('BTN clicked');
    const age = input.value;
    console.log(age, "age");

    const isAgeOk = checkAge(age);
    console.log(isAgeOk);

    if (isAgeOk) {
        console.log("Yes, you're old enough to enter our website");
        document.location.href = "welcome-page.html";
    } else {
        const errorBox = document.querySelector(".error");
        errorBox.innerHTML = `
        <p>Sorry, you're not old enough</p>
        `;
        console.log("Sorry, you're not old enough");
    }
};

// Create a function that checkAge is 13 or more

function checkAge(oldEnough) {
    if (oldEnough >= 13) {
        return true;
    }
    return false;
}