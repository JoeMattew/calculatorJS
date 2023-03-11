const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

let calculations = [];
let result;


function calculate(button) {
    const value = button.textContent;

    if (value === "CLEAR") {

        calculations = [];
        screen.textContent = "0";
    } else if (value === "=") {
        screen.textContent = eval(result);
    } else {
        calculations.push(value);

        result = calculations.join("");
        screen.textContent = result;
    }

    // console.log(calculations);
}

buttons.forEach(button => button.addEventListener("click", () => calculate(button)));

