let cName = document.getElementById("cname")
let cNumber = document.getElementById("cnumber")
let cDate = document.getElementById("cdate")
let cCvc = document.getElementById("ccvc")
let button = document.getElementById("submit")
let input = document.querySelectorAll("input")
let error = document.querySelectorAll(".data-input")
let form = document.getElementById("details")
let numberInputs = document.querySelectorAll(".numbers")
let message = document.getElementById("completed")
let letters = /^[A-Za-z ]*$/;


button.addEventListener("click", function(e){
    e.preventDefault()
    ifEmpty()
    validator()
    if(ifEmpty() && validator()){}
})

function ifEmpty(){
    for(let i=0; i<input.length; i++){
        if(input[i].value === ""){
            if(input[2] === "" && input[3] === ""){
                input[2].style.border = "2px solid hsl(0, 100%, 66%)"
                input[3].style.border = "2px solid hsl(0, 100%, 66%)"
                error[2].textContent = "Can't be blank"
                error[2].style.visibility = "visible";
                setTimeout(function(){
                    input[2].style.border = "1px solid hsl(270, 3%, 87%)"
                    input[3].style.border = "1px solid hsl(270, 3%, 87%)"
                    input[3].nextElementSibling.style.visibility = "hidden"
                    }, 4000)
            }else if(input[2] === ""){
                input[2].style.border = "2px solid hsl(0, 100%, 66%)"
                input[3].nextElementSibling.textContent = "Can't be blank"
                input[3].nextElementSibling.style.visibility = "visible"
                setTimeout(function(){
                    input[2].style.border = "1px solid hsl(270, 3%, 87%)"
                    input[3].nextElementSibling.style.visibility = "hidden"
                    }, 4000)
            }else if(input[3] === ""){
                input[3].style.border = "2px solid hsl(0, 100%, 66%)"
                error[2].lastElementChild.textContent = "Can't be blank"
                error[2].lastElementChild.style.visibility = "visible"
                setTimeout(function(){
                    input[3].style.border = "1px solid hsl(270, 3%, 87%)"
                    error[2].lastElementChild.style.visibility = "hidden"
                    }, 4000)
            }
            input[i].style.border = "2px solid hsl(0, 100%, 66%)"
            error[i].lastElementChild.textContent = "Can't be blank"
            error[i].lastElementChild.style.visibility = "visible"
            setTimeout(function(){
                input[i].style.border = "1px solid hsl(270, 3%, 87%)"
                input[4].style.border = "1px solid hsl(270, 3%, 87%)"
                error[i].lastElementChild.style.visibility = "hidden"
                }, 4000)
        }
    }
}

function ifCompleted(){
    ifEmpty()
    let nameEntered = input[0].value
    let numEntered = input[1].value
    let mmEntered = input[2].value
    let yyEntered = input[3].value
    let cvcEntered = input[4].value
    cName.textContent = nameEntered
    cDate.textContent = `${mmEntered}/${yyEntered}`
    cCvc.textContent = cvcEntered
    cNumber.textContent = numEntered
    form.style.display = "none"
    message.style.display = "flex"
}

function validator(){
    if(!input[0].value.match(letters) || /\D/.test(input[1].value) || /\D/.test(input[4].value)){
        if(!input[0].value.match(letters)){
            input[0].nextElementSibling.textContent = "Wrong format, letters only";
            input[0].style.border = "2px solid hsl(0, 100%, 66%)"
            input[0].nextElementSibling.style.visibility = "visible"
            setTimeout(function(){
                input[0].style.border = "1px solid hsl(270, 3%, 87%)"
                input[0].nextElementSibling.style.visibility = "hidden"
            }, 4000)
        }
        if(/\D/.test(input[1].value)){
            input[1].style.border = "2px solid hsl(0, 100%, 66%)"
            input[1].nextElementSibling.textContent = "Wrong format, numbers only"
            input[1].nextElementSibling.style.visibility = "visible"
            setTimeout(function(){
                input[1].style.border = "1px solid hsl(270, 3%, 87%)"
                input[1].nextElementSibling.style.visibility = "hidden"
                }, 4000)
        }
        if(/\D/.test(input[4].value)){
            input[4].style.border = "2px solid hsl(0, 100%, 66%)"
            input[4].nextElementSibling.textContent = "Wrong format, numbers only"
            input[4].nextElementSibling.style.visibility = "visible"
            setTimeout(function(){
                input[4].style.border = "1px solid hsl(270, 3%, 87%)"
                input[4].nextElementSibling.style.visibility = "hidden"
                }, 4000)
        }
    }else {
        ifCompleted()
    }
}