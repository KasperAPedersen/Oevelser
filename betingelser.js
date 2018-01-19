console.log("\n---- 2 ----");
var bool1 = true;
if(bool1) {
    console.log("Hej verden");
}

console.log("\n---- 3 ----");
var randomTal = Math.floor(Math.random() * 10);
console.log(randomTal);

if(randomTal > 5) {
    console.log("Højere end 5");
} else {
    console.log("Lavere end 5");
}

console.log("\n---- 4 ----");
var randomTal1 = randomTal > 5 ? "Højere end 5" : "Lavere end 5";
console.log(randomTal1);

console.log("\n---- 5 ----");
var laeskedrik = "faxe kondi";
if(laeskedrik == "cola") {
    console.log("cola er sødt");
} else if(laeskedrik == "sprite") {
    console.log("Sprite er sødt");
} else if(laeskedrik == "fanta") {
    console.log("fanta er sødt");
} else if(laeskedrik == "faxe kondi") {
    console.log("faxe kondi er sødt");
}

console.log("\n---- 6 ----");
var laeskedrik1 = "sprite";
switch(laeskedrik1){
    case "cola":
        console.log("cola er sødt");
        break;
    case "sprite":
        console.log("sprite er sødt");
        break;
    case "fanta":
        console.log("fanta er sødt");
        break;
    case "faxe kondi":
        console.log("Faxe kondi er sødt");
        break;
}