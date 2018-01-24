## **Functions**
En funktion er en kodeblok som man kan kalde hvilken enten returnere det samme resultat eller et forskelligt.
```
function functionsNavn(a){
    // Kode her
}
```
Man kalder funktionen via dens navn:
```
functionsNavn();
```
Hvis funktionen kræver argumenter så skrives de imellem parenteserne:
```
functionsNavn("argument");
```

## **Argumenter**
```
function functionsNavn(argument1, argument2, argument3...){
    // kode her
}
```
Argumenter er variabler brugt i funktionen, de skrives i parenteserne når man skriver og kalder funktionen
```
function functionsNavn(navn){
    console.log("Hej " + navn);
}
functionsNavn("Kasper");
```