document.addEventListener("DOMContentLoaded", function() {
    
/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyCost = 35;

let daysSelected = 0;

let mondayButton = document.getElementById("monday");
let tuesdayButton = document.getElementById("tuesday");
let wednesdayButton = document.getElementById("wednesday");
let thursdayButton = document.getElementById("thursday");
let fridayButton = document.getElementById("friday");

const days = [mondayButton, tuesdayButton, wednesdayButton, thursdayButton, fridayButton];

let fullButton = document.getElementById("full");
let halfButton = document.getElementById("half");
let clearButton = document.getElementById("clear-button");

let cost = document.getElementById("calculated-cost");



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function clickDay(day) {
    day.classList.toggle("clicked");
    calculate();
}

for (let day of days) {
    day.addEventListener("click", function(){clickDay(day);});
}





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clear() {
    for (let day of days) {
        day.classList.remove("clicked");
    }
    calculate();
}

clearButton.addEventListener("click", clear);






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfClick() {
    fullButton.classList.remove("clicked");
    halfButton.classList.add("clicked");
    calculate();
}

halfButton.addEventListener("click", halfClick);




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullClick() {
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    calculate();
}

fullButton.addEventListener("click", fullClick);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {

    if (fullButton.classList.contains("clicked")) {
        dailyCost = 35;
    }
    else if (halfButton.classList.contains("clicked")) {
        dailyCost = 20;
    }

    daysSelected = 0;
    for (let day of days) {
        if (day.classList.contains("clicked")) {
            daysSelected += 1;
        }
    }

    cost.innerHTML = dailyCost * daysSelected;
}


});