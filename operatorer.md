# **Logiske operatører**

## **=**
```
variableNavn = "nyVærdi";
```
= ændrer værdien af en variable

## **==**
```
let variableNavn = nyVærdi;
if(variableNavn == "nyVærdi")
    console.log("sand");
```
== tjekker om værdien af variableNavn er den samme som nyVærdi

## **===**
```
let var1 = "string";
let var2 = 123;
if(var1 === var2) {
    console.log("Sand");
}
```
=== tjekker at var1 har den samme type og samme værdi som var2

## **!**
```
let bool1 = false;
if(!bool1) {
    console.log("sand");
}
```
! tjekker om bool1 er falsk

## **!=**
```
let var1 = 12;
if(var1 != 13) {
    console.log("sand");
}
```

## **<**
```
let var1 = 2;
if(var1 < 10) {
    console.log("sand");
}
```
< tjekker om var1 er mindre end 10

## **>**
```
let var1 = 12;
if(var1 > 10) {
    console.log("sand");
}
```
< tjekker om var1 er større end 10

## **<=**
```
let var1 = 12;
if(var1 <= 10) {
    console.log("sand");
}
```
<= tjekker om var1 er mindre eller samme som 10

## **>=**
```
let var1 = 12;
if(var1 >= 10) {
    console.log("sand");
}
```
>= tjekker om var1 er større eller samme som 10

## **+**
```
let var1 = 12;
var1 = var1 + 10;
```
+ plusser var1 med 10

## **-**
```
let var1 = 12;
var1 = var1 - 10;
```
- minusser var1 med 10

## *
```
let var1 = 12;
var1 = var1 * 10;
```
* ganger var1 med 10

## **/**
```
let var1 = 12;
var1 = var1/10;
```
/ dividere var1 med 10

## **%**
```
let var1 = 12;
var1 = var1 % var1;
```
% retunere det resterende

## **&&**
```
let var1 = 12;
if(var1 < 20 && var1 > 10) {
    console.log("sand");
}
```
&& betyder og

## **||**
```
let var1 = 12;
if(var1 < 100 || var1 == 2) {
    console.log("sand");
}
```
|| betyder eller