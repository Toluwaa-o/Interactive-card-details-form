let cName = document.getElementById("cname");
let cNumber = document.getElementById("cnumber");
let cDate = document.getElementById("cdate");
let cCvc = document.getElementById("ccvc");
let button = document.getElementById("submit");
let inputs = document.querySelectorAll("input");
let errors = document.querySelectorAll(".error");
let form = document.getElementById("details");
let message = document.getElementById("completed");

button.addEventListener("click", function(e) {
    e.preventDefault();
    checkEmpty();
    validator()
    checkCompleted();
});

function checkEmpty() {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            inputs[i].style.border = "2px solid hsl(0, 100%, 66%)";
            errors[i].textContent = "Can't be blank";
            errors[i].style.visibility = "visible";
            setTimeout(function() {
                inputs[i].style.border = "1px solid hsl(270, 3%, 87%)";
                inputs[4].style.border = "1px solid hsl(270, 3%, 87%)";
                errors[i].style.visibility = "hidden";
            }, 4000);
        }
    }
}

function checkCompleted() {
    let isCompleted = true;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            isCompleted = false;
        }
    }
    if (isCompleted) {
        let nameEntered = inputs[0].value;
        let numEntered = inputs[1].value;
        let mmEntered = inputs[2].value;
        let yyEntered = inputs[3].value;
        let cvcEntered = inputs[4].value;
        cName.textContent = nameEntered;
        cDate.textContent = `${mmEntered}/${yyEntered}`;
        cCvc.textContent = cvcEntered;
        cNumber.textContent = numEntered;
        form.style.display = "none";
        message.style.display = "flex";
    }
}

function validator() {
    // check if the name input only contains letters
    let nameInput = document.getElementById("card-name");
    let nameRegex = /^[A-Za-z ]*$/;
    if (!nameRegex.test(nameInput.value)) {
        nameInput.style.border = "2px solid hsl(0, 100%, 66%)";
        errors[0].textContent = "Name must only contain letters";
        errors[0].style.visibility = "visible";
        setTimeout(function() {
            nameInput.style.border = "1px solid hsl(270, 3%, 87%)";
            errors[0].style.visibility = "hidden";
        }, 4000);
    }

    // check if the card number input is a valid credit card number
    let cardNumInput = document.getElementById("card-num");
    let cardNumRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/;
    if (!cardNumRegex.test(cardNumInput.value)) {
        cardNumInput.style.border = "2px solid hsl(0, 100%, 66%)";
        errors[1].textContent = "Invalid card number";
        errors[1].style.visibility = "visible";
        setTimeout(function() {
            cardNumInput.style.border = "1px solid hsl(270, 3%, 87%)";
            errors[1].style.visibility = "hidden";
        }, 4000);
    }
}