// listelere renk ekeleme

let done = document.querySelectorAll(".done")
done.forEach(e => e.style.backgroundColor = "green")

let ongoing = document.querySelectorAll(".ongoing")
ongoing.forEach(e => e.style.backgroundColor = "yellow")

let coming = document.querySelectorAll(".coming")
coming.forEach(e => e.style.backgroundColor = "red")

// h2 text dekorasyon ekleme

let h2 = document.getElementById("row")
h2.style.textDecoration = "underline"

// senenin rengini değiştirme

let yıl = document.getElementById("yıl")

function random() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let color = `rgb(${red}, ${green}, ${blue})`

    yıl.style.color = `${color}`;
    yıl.style.fontSize = `70px`
}

setTimeout(random,0)
setInterval(random, 1000)

// tarih ve saat

let tarih = document.getElementById("tarih")

let zaman = () => { 
    let red = Math.floor(Math.random() * 360)
    let color = `hsl(${red}, 100%, 70%)`
    let date = new Date();
    let day = date.toLocaleString()

    tarih.textContent = `${day}`
    tarih.style.fontSize = "25px"
    tarih.style.backgroundColor = `${color}`
    tarih.style.padding = "10px"
    tarih.style.marginTop = "10px"
}

setTimeout(zaman,0)
setInterval(zaman,1000)



