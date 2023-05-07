let eklenecekDiv = document.getElementById("ekle")

for (let i = 0; i < 102; i++) {
    paragraph = document.createElement("p")
    paragraph.textContent = i
    let a = i

    if (i % 2 == 0 && i != 2) {
        paragraph.style.backgroundColor = "green"
    }
    else {
        paragraph.style.backgroundColor = " red "
        
    }


    if (i > 3 && i%2 != 0) {
        for(let i = 3 ; i < a; i++){
            if(a%i == 0){
                paragraph.style.backgroundColor = " yellow "
            }
        }
    }

    if(i == 1){
       paragraph.style.backgroundColor = " yellow "
    }

    eklenecekDiv.append(paragraph)
}
