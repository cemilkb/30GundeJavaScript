/* Q1
todo: (Word) */

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;


function tenMostFrequentWords(a, x) {
    let b = a.replace(/\./g, "");
    let arr = b.split(" ");
    let set = new Set(arr);
    let arr2 = [...set];
    let rtrn = Array();
    for (let i = 0; i < arr2.length; i++) {
        let pattern = arr2[i],
            flag = "g",
            regEx = new RegExp(pattern, flag),
            match = paragraph.match(regEx),
            length = match.length,
            obj = { word: `${pattern}`, count: `${length}` };
        if (arr2[i] == "an") {
            rtrn.push({ word: `${pattern}`, count: `1` })
        } else { rtrn.push(obj) }

    }
    let sorted = rtrn.sort((a, b) => b["count"] - a.count);
    let write = sorted.slice(0, x);


    return write;
}


console.log(tenMostFrequentWords(paragraph, 10)) 