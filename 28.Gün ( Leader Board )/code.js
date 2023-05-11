let submit = document.getElementById("submit")
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let country = document.getElementById("country")
let point = document.getElementById("point")
let error = document.querySelector("#error")

submit.addEventListener("click", () => {

    if(lastName.value.length == 0 || firstName.value.length == 0 || country.value.length == 0 || point.value.length == 0 ) {
        error.style.display = "block"
    }
    else {
        error.style.display = "none"
    }
   
})