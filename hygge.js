console.log("\n---- Fix koden 1: Fejlbeskeder tekststreng ----");
// Disse oplysninger kommer selvfølgelig typisk fra en formular
var navn = "";
var alder = "";
var adresse = "";

var fejlbeskeder = "";

if (navn == "") {
	fejlbeskeder = fejlbeskeder + "Du skal udfylde navn feltet\n";
}

if (alder == "") {
	fejlbeskeder = fejlbeskeder + "Du skal udfylde alder feltet\n";
}

if (adresse == "") {
	fejlbeskeder = fejlbeskeder + "Du skal udfylde adresse feltet\n";
}

console.log (fejlbeskeder);

// ---- ----

console.log("\n---- Fibonacci sekvens ----");
function fibonacci(endNumber){
    let numberA = .1; // new number
    let numberB = 0; // old number
    let temp = .1; // temp

    while(numberA <= endNumber){
        numberA = numberA + numberB; // setting new number
        numberB = temp; // setting old number
        temp = numberA; // setting temp number
        console.log(numberB); // printing old number
    }
}

fibonacci(1600); // calling function

// ---- ----

console.log("\n---- Palindromer ----");
function isPalindromer(string){
    console.log("Original: " + string); // printing original string
    string = string.split('').reverse().join(''); // splitting, reversing and joining all the characters back together
    console.log("Reversed: " + string); // printing reversed string
}

isPalindromer("hello"); // calling function

// ---- ----

console.log("\n---- Plum Bus ----");
let nCount = 1;

while(nCount <= 137) {
    if(nCount%3 == 0 && nCount%5 == 0) {
        console.log(nCount + " <- Plum Bus");
    } else if(nCount%5 == 0) {
        console.log(nCount + " <- Bus");
    } else if(nCount%3 == 0) {
        console.log(nCount + " <- Plum");
    } else {
        console.log(nCount);
    }
    nCount++;
}

// ---- ----

console.log("\n---- Fix koden 2: Fejlbeskeder array ----");
// Disse oplysninger kommer selvfølgelig typisk fra en formular
var brugernavn = "";
var password = "";
var email = "";

var fejlbeskeder = [];

if (brugernavn == "") {
	fejlbeskeder[0] = ["Du skal udfylde brugernavn feltet\n"];
}

if (password == "") {
	fejlbeskeder[1] = ["Du skal udfylde password feltet\n"];
}

if (email == "") {
	fejlbeskeder[2] = ["Du skal udfylde email feltet\n"];
}

console.log (fejlbeskeder);

// ---- ----

console.log("\n---- Fix koden 3: En simpelt funktion ----");
function sammensaetTekst (forste, anden) {
	return forste + " " + anden;
}
var resultat = sammensaetTekst ("Mickey", "Mouse");
console.log (resultat); // Forventede resultat: "Mickey Mouse"

// ---- ----

console.log("\n---- BMI ----");
function bmi(height, weight){
    result = weight / (height/100)^2; // Dividing weight with height^2
    if(result <= 18.5) {
        console.log("Undervægtig");
    } else if(result > 18.5 && result <= 24.9) {
        console.log("Normalvægt");
    } else if(result > 24.9 && result <= 29.9) {
        console.log("Overvægtig");
    } else if(result > 29.9 && result <= 39.9) {
        console.log("Fedme");
    } else if(result > 39.9) {
        console.log("Svær fedme");
    }
    console.log("BMI: " + result);
}
bmi(195, 95); // calling function

// ---- ----

console.log("\n---- Valuta format ----");
function valuta(value){
    console.log("kr. " + value);
}
valuta(120);

// ---- ----