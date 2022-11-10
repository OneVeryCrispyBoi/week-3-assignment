function add2(x) {
    console.log(x + 2);
    add3(x);
}

function add3(x) {
    console.log(x + 3);
}

console.log(add2(10));