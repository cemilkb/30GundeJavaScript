// body pick and give css

let body = document.body

body.style.width = "1200px"
body.style.margin = "0 auto"

// create header adn add element

let header = document.createElement("header")
header.style.textAlign = "center"
body.append(header)

// h1

let h1 = document.createElement("h1")
h1.innerHTML = " Asabeneh Yetayeh Challenge  in <span id='yil'>2020</span> "

header.append(h1)

let yil = document.getElementById("yil")

yil.style.fontSize = "70px"
let rgb = () => {
    let random = Math.floor(Math.random() * 720)
    let hsl = `hsl(${random}, 100%, 30%)`
    yil.style.color = hsl
}
setTimeout(rgb, 0)
setInterval(rgb, 500)

// h3
let h3 = document.createElement("h3")

h3.textContent = "30DaysOfJavascript Challenge"
h3.style.textDecoration = "underline"

header.append(h3)

// span  date

let span = document.createElement("p")

let addSpan = () => {

    let random = Math.floor(Math.random() * 720)
    let hsl = `hsl(${random}, 100%, 30%)`
    let date = new Date()
    let now = date.toLocaleString()
    span.textContent = now
    span.style.backgroundColor = hsl
    span.style.color = "white"
    span.style.fontSize = "22px"
    span.style.marginTop = "22px"
    span.style.width = "220px"
    span.style.margin = " 0 auto 22px auto "
    header.append(span)
}
setTimeout(addSpan, 0)
setInterval(addSpan, 1000)


// div for challenges

data.challenges.forEach(e => {
    // creating

    let challengesDiv = document.createElement("div")
    let paragraphLeft = document.createElement("p")
    let details = document.createElement("details")
    let paragraphRight = document.createElement("p")
    let summary = document.createElement("summary")


    // challengesDiv

    challengesDiv.style.display = " grid "
    challengesDiv.style.color = " white "
    challengesDiv.style.backgroundColor = " red "
    challengesDiv.style.marginBottom = " 5px "
    challengesDiv.style.marginTop = " 5px "
    challengesDiv.style.gridTemplateColumns = " 1fr 1fr 1fr"
    challengesDiv.style.borderRadius = " 50px "

    // paragparphLeft

    paragraphLeft.style.marginLeft = "25px"
    paragraphLeft.textContent = e.name

    // details

    details.style.textAlign = "center"
    details.style.margin = " auto 0 "

    // paragraphRight

    paragraphRight.style.marginRight = "25px"
    paragraphRight.style.textAlign = "end"
    paragraphRight.textContent = e.status

    // summary

    summary.textContent = e.name.slice(11)

    // topics

    e.topics.forEach(e => {
        let topics = document.createElement("p")
        topics.textContent = e
        details.append(topics)
    })

    // append section

    challengesDiv.append(paragraphLeft)
    challengesDiv.append(details)
    challengesDiv.append(paragraphRight)
    details.append(summary)


    body.append(challengesDiv)

    if (e.status == "Done") {
        challengesDiv.style.backgroundColor = " green "
    } else if (e.status == "Ongoing") {
        challengesDiv.style.backgroundColor = " yellow "
        challengesDiv.style.color = " black "
    }

})

// Name, Icons And Explanation

// Create

let nameIconExp = document.createElement("div")
let name = document.createElement("h1")
let icons = document.createElement("div")
let summary = document.createElement("p")


// Div

nameIconExp.style.textAlign = "center"

// Name 
name.textContent = "Asabeneh yetayeh"

// icons

icons.style.display = "flex"
icons.style.justifyContent = "center"
icons.style.columnGap = "20px"

// Summary

summary.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa, at, consectetur, 
perferendis totam ab consequatur aut accusamus eaque aliquam architecto vero. Temporibus adipisci eligendi ab debitis quaerat fuga minus!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa, at, consectetur, 
perferendis totam ab consequatur aut accusamus eaque aliquam `
summary.style.width = "80%"
summary.style.margin = " 0 auto "

// Appends

nameIconExp.append(name)
// Icons

for (let i = 0; i < 3; i++) {
    let get = data.author.socialLinks[i]
    let anchor = document.createElement("a")
    anchor.setAttribute("href", `${get.url}`)
    anchor.innerHTML = get.fontawesomeIcon
    anchor.style.fontSize = "40px"
    anchor.style.color = "black"
    icons.append(anchor)

}
nameIconExp.append(icons)
nameIconExp.append(summary)
body.append(nameIconExp)


// Titles Qualifications Skills

let tqs = document.createElement("div")

// tqs

tqs.style.display = "flex"
tqs.style.width = "80%"
tqs.style.margin = "50px auto 0px auto"
tqs.style.columnGap = "20px"

// Titles
let titlesUl = document.createElement("ul")
let titles = document.createElement("li")
//  titelsUl
titlesUl.style.listStyle = "none "
// titels
titles.textContent  = "Titles"
titles.style.marginLeft = "10px"
titles.style.fontSize = "25px"
// li
data.author.titles.forEach(e => {
    let li = document.createElement("li")
    li.textContent = `${e[0]} ${e[1]}`
    titlesUl.append(li)
})
titlesUl.prepend(titles)

// skilss
let skillsUl = document.createElement("ul")
let skills = document.createElement("li")
//  skillsUl
skillsUl.style.listStyle = "none "
// skils
skills.textContent  = "Skills"
skills.style.marginLeft = "10px"
skills.style.fontSize = "25px"
// li
data.author.skills.forEach(e => {
    let li = document.createElement("li")
    li.textContent = "🔥" +  e
    skillsUl.append(li)
})
skillsUl.prepend(skills)

// qualifications
let qualificationsUl = document.createElement("ul")
let qualifications = document.createElement("li")
//  qualificationsUl
qualificationsUl.style.listStyle = "none "
// skils
qualifications.textContent  = "Qualifications"
qualifications.style.marginLeft = "10px"
qualifications.style.fontSize = "25px"
// li
data.author.qualifications.forEach(e => {
    let li = document.createElement("li")
    li.textContent = "🔥" +  e
    qualificationsUl.append(li)
})
qualificationsUl.prepend(qualifications)


// Append

tqs.append(titlesUl)
tqs.append(skillsUl)
tqs.append(qualificationsUl)
body.append(tqs)

// Keys

let div =  document.createElement("div")
let keysDiv = document.createElement("div")
let str = document.createElement("p")

// keysDiv

keysDiv.style.display = "flex"
keysDiv.style.gap = "10px"
keysDiv.style.flexWrap = "wrap"
keysDiv.style.width = "1170px"
keysDiv.style.marginLeft = "auto"

// str

str.textContent = "KEYWORDS.."
str.style.fontStyle = "italic"
str.style.fontWeight = "bolder"

// append

//span
div.append(str)
data.keywords.forEach (e => {
    let random = Math.floor(Math.random()*361)
    let hsl = `hsl(${random}, 70%, 80%)`
    let span = document.createElement("span")
    span.textContent = "#" + " " + e
    span.style.backgroundColor = hsl
    span.style.padding = "10px"
    span.style.borderRadius = "50px"
    keysDiv.append(span)
})

div.append(keysDiv)
body.append(div)








