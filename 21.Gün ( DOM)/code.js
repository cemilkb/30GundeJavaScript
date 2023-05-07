/* Q1
todo: (using document.querySelector(tagname)) */

let firstParagraph = document.querySelector("p")
console.log(firstParagraph)

/* Q2
todo: (Get each of the the paragraph using document.querySelector('#id') and by their id) */

let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")
let p3 = document.querySelector("#p3")
let p4 = document.querySelector("#p4")
console.log(p1, p2.innerHTML, p3.innerHTML, p4)

/* Q3
todo: (Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name) */

let allParagraph = document.querySelectorAll("p")
console.log(allParagraph)

/* Q4
todo: (Loop through the nodeList and get the text content of each paragraph) */

allParagraph.forEach(e => console.log(e.innerHTML))

/* Q5
todo: (Set a text content to paragraph the fourth paragraph,Fourth Paragraph) */
allParagraph[3].textContent = 'Fourth Title'

/* Q6
todo: (Set id and class attribute for all the paragraphs using different attribute setting methods) */

allParagraph.forEach((e, i) => e.setAttribute("id", `p${i + 1}`))
allParagraph.forEach((e) => e.setAttribute("class", "txt"))


/*
! EXERCİSE LEVEL 2 */

/* Q1
todo: (Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)) */

allParagraph.forEach(e => e.classList.add("bg", "border", "font-size", "font-family"))

/* Q2
todo: (Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color) */

allParagraph.forEach((e, i) => {
    if (i % 2 == 0) {
        e.style.color = "red"
    } else {
        e.style.color = "greenyellow"
    }
})

/* Q3
todo: (Set text content, id and class to each paragraph) */

function set() {
    allParagraph.forEach((e, i) =>{
        e.setAttribute("id", `yeniP${i+1}`)
        e.setAttribute("class", "bg txt border")
        e.textContent = `Yeni ${i}. Paragraf`
        console.log(e)
    })
}
