let body = document.body
let sec = document.getElementById("sec")
let div2 = document.getElementById("ekle")
let div3 = document.getElementById("ksks")

body.addEventListener("keydown", (e) =>{
    sec.innerHTML = `You Pressed <span style = "color: red;">${e.key}</span>   `
    div2.textContent = `${e.keyCode}`
    div3.style.visibility = "visible"

} )



