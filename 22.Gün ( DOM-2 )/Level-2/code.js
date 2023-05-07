


data.forEach(e =>{
let grid = document.getElementById("main")
let div = document.createElement("div");
let paragraph = document.createElement("p")


div.classList.add("border")
paragraph.textContent = e.name

div.append(paragraph)
grid.append(div)

})

let h2 = document.getElementById("h2")

h2.textContent = `Total Numbers Of Countries: ${data.length}`