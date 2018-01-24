console.log("---- 2 ----");
for(let x = 1; x <= 25; x++){
    console.log(x);
}

console.log("---- 3 ----");
let y = 0;
do{
    y++;
}while(y < 5);

console.log("---- 4 ----");
for(let z = 2017; z >= 1917; z--) {
    console.log(z);
}

console.log("---- 5 ----");
let weekDays = Array("Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag");
for(let c = 0; c <= weekDays.length - 1; c++) {
    console.log(weekDays[c]);
}

console.log("---- 7 ----");
let navne = Array("Navn1", "Navn2", "Navn3", "Navn4", "Navn5", "Navn6", "Navn7", "Navn8");
navne.forEach(function(navn){
    console.log(navn);
});

console.log("---- 8 ----");
let kunstnere = Array("Kunstner1", "Kunstner2", "Kunstner3", "Kunstner4");
kunstnere.forEach(function(kunstner, index){
    console.log(index + " -> " + kunstner);
});

console.log("---- 9 ----");
let randomNumbers = Array("19", "81", "24", "84", "47", "91", "64", "3", "86", "1");
randomNumbers.forEach(function(nummer, index){
    if(nummer > randomNumbers[index + 1]) {
        console.log(nummer + " is greater than " + randomNumbers[index + 1]);
    } else {
        console.log(nummer + " is less than " + randomNumbers[index + 1]);
    }
});