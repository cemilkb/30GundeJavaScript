
    const a = [4, 5, 8, 9]
    const b = [3, 4, 5, 7]

    /* Q1
    todo: (a union b) */

    let A = new Set(a);
    let B = new Set(b);
    let C = new Set([...A,...B]);

/* Q2
todo: (a intersection b) */

let ins = [...A].filter(num => B.has(num));

/* Q3
todo: (a with b) */

let wit = [...A].filter(num => !B.has(num));