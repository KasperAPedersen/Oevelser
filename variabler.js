console.log("---- 2 ----"); // Opgave 2
let mitFornavn = "Kasper"; // string
let mitEfternavn = "Pedersen"; // string
console.log("Navn: " + mitFornavn + " " + mitEfternavn); // printer navn

console.log("---- 3 ----"); // Opgave 3
let minAlder = 19; // int
console.log("Alder: " + minAlder); // printer alder

console.log("---- 4 ----"); // Opgave 4
let by = "Kastrup"; // string
console.log(by + "\nFejlen er at variables navn er skrevet forkert."); // printer by

console.log("---- 5 ----"); // Opgave 5
let x = 5; // int
let y = 10; // int
console.log(x+y);

console.log("---- 6 ----"); // Opgave 6
let z = x+y; // int
console.log(z);

console.log("---- 7 ----"); // Opgave 7
console.log('Hej, jeg hedder ' + mitFornavn + ' ' + mitEfternavn + ' og jeg er ' + minAlder + ' år');

console.log("---- 8 ----"); // Opgave 8
let moms = 1.25; // double
let prisUdenMoms = 400; // int
let prisMedMoms = prisUdenMoms*moms;
console.log(prisMedMoms);
let prisMedMoms2 = prisMedMoms/moms;
console.log(prisMedMoms2);

console.log("---- 9 ----"); // Opgave 9
let forste = 10; // int
let anden = 20; // int
let temp = anden;
anden = forste;
forste = temp;
console.log("Forste: " + forste + "\nAnden: " + anden);