console.log("\n---- 1 ----");
function multiply(x, y) {
    let result = x * y;
    console.log(x + " * " + y + " er lig med " + result);
}
multiply(123, 5);
multiply(3, 3);
multiply(1, 5);

console.log("\n---- 2 ----");
function multiply1(x, y) {
    let result = x * y;
    if(isNaN(x) || isNaN(y)) {
        console.log("Skal være et nummer");
    } else {
        console.log(x + " * " + y + " er lig med " + result);
    }
}
multiply1(12, 3);
multiply1(4, 2);
multiply1(3, "e");

console.log("\n---- 3 ----");
function multiply2(x, y) {
    let result = x * y;
    if((x == undefined || y == undefined) && (isNaN(x) || isNaN(y))) {
        console.log("Mangler input");
    } else {
        console.log(x + " * " + y + " er lig med " + result);
    }
}
multiply2(2, 3);
multiply2(66, 2);
multiply2(5);