/* Q1
todo: (Clean function) */

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`


function cleanText(a) {
    let cleanText = a.replace(/[%@$&#;!]/g, "");
    return `${cleanText}`;
}

function three(a) {
    let b = a.replace(/[,\.\?]/g, "");
    let arr = b.split(" ");
    let set = new Set(arr);
    let arr2 = [...set];
    let rtrn = Array();
    for (let i = 0; i < arr2.length; i++) {
        let pattern = arr2[i],
            flag = "g",
            regEx = new RegExp(pattern, flag),
            match = a.match(regEx),
            length = match.length,
            obj = { word: `${pattern}`, count: `${length}` };
        rtrn.push(obj);

    }
    let sorted = rtrn.sort((a, b) => b["count"] - a.count);
    let write = sorted.slice(0, 3);


    return write;
}





console.log(`Clean Text: ${cleanText(sentence)}
Most 3 Wod:`);
console.log(three(cleanText(sentence)))
