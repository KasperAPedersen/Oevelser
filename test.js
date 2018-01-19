console.log("---- 1 ----"); // punkt 1
var test = "string var"; // string
console.log(test); // printer test variable
test = "string var 1"; // overskriver test variable
console.log("overskrevet -> " + test); // printer test variable

console.log("---- 2 ----"); // punkt 2
var test1 = 123; // int
console.log(test1); //printer test1 variable
test1 = 321; // overskriver test1 variable
console.log("overskrevet -> " + test1); // printer test1 variable

console.log("---- 3 ----"); // punkt 3
var test2 = test + test1; // sammensætter test & test1
console.log("sammensat -> " + test2); // printer test2

console.log("---- 4 ----"); // punkt 4
var test3 = Array("ino", "on", "ipon");
console.log("array index 1 -> " + test3[1]); // printer test3

console.log("---- 5 ----"); // punkt 5
console.log("test variable: " + test + "\ntest1 variable: " + test1 + "\ntest2 variable: " + test2 + "\ntest3 variable: " + test3[0]); // printer alle variabler