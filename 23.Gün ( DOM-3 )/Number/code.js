let btn = document.getElementById("sbmt")
let inp = document.getElementById("number")
let container = document.getElementById("container")


btn.addEventListener("click", function (e) {
    if (inp.value.match(/[A-Za-z\W]/g)) {
        alert("ZOOOORRTTT!!!!!")
    } else {
        container.innerHTML = ""
        let max = inp.value
        for (let i = 0; i < max-(-1) ; i++) {
            let div = document.createElement("div")
            div.classList.add("box")
            div.textContent = i
            if (i % 2 != 0 && i > 3) {
                div.style.backgroundColor = "red"
                div.style.color = "black"

                for (let j = 3; j < i; j++) {
                    if (i % j == 0) {
                        div.style.backgroundColor = "yellow"
                        div.style.color = "green"
                    }
                }

            }
            if (i == 2 || i == 3) {
                div.style.backgroundColor = "red"
                div.style.color = "black"
            }
            container.append(div)
            inp.value = ""
            inp.setAttribute('placeholder', 'Add more number...')
        }
    }


    e.preventDefault()
})




