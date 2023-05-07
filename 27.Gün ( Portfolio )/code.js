let down = document.querySelector("#kaydir")
let kelime = ["cem", "ali", "cemil"]
let i = 0
let isimler = () => {
    setTimeout(gel, 1)
    let isim = kelime[i]
    i++
    down.textContent = isim
    if (i == kelime.length){
        i = 0
    }
    setTimeout(git2, 1500)
    setTimeout(git, 2500)
    setTimeout(git3, 3000)
}

let gel = () => {
    down.classList.add("animeGirl")
}
let git = () => {
    down.classList.remove("animeGirl")
}
let git2 = () => {
    down.classList.add("vanish")
}
let git3 = () => {
    down.classList.remove("vanish")
}


setInterval(isimler,3000)