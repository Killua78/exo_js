// === Exo 1 : variables ===

/**

let prenom ="Nacime";

let age = 25;   

let ville = "Achères";

console.log(`Bonjour je m'appelle ${prenom}, j'ai ${age} ans et j'habite à ${ville}`);

**/

// === Exo 2 : conditions ===

/**

let age = 20;

if(age >= 0 && age < 18){
    console.log("Tu es mineur");
}else if(age >= 18){
    console.log("Tu es majeur");
}else{
    console.log("Âge invalide");
}

**/

// pour gérer le cas où âge n'est pas un nombre : typeof age !== "number" || age < 0

// === Exo 3 : boucle FOR ===
/** 
 * 
for(let i = 1; i <= 5; i++){
    if(i === 5){
        console.log("dernier tour");
        
    }else{
        console.log(`tour numéro ${i}`);
    }
}

// === Exo 3.1 : boucle FOR inversé ===

for(let i = 5; i >= 1; i--){
    if(i === 1){
        console.log("Décollage !");
    }else{
        console.log(`Compte à rebours : ${i}`);
        
    }
}

*/

// === Exo 3.2 : boucle et vérification parité ===

/**
for(let i = 1; i <= 20; i++){
    if (i % 2 === 0){
        console.log(`${i} est pair`);
    }else{
        console.log(`${i} est impair`);
    }
}
*/

// === Exo 4 : Table de multiplication ===

/** 
for(let i = 1; i <= 10; i++){
    let result = i * 5
    console.log(`${i} x 5 = ${result}`);
}
*/

// === Exo 5 : devine le nombre ===

// Math.floor(Math.random() * 10) + 1 

/**
💡 Décomposition :
Math.random()
→ donne un nombre entre 0 (inclus) et 1 (exclu)
Exemple : 0.342, 0.99, etc.

Math.random() * 10
→ donne un nombre entre 0 et 9.999...

Math.floor(...)
→ arrondit à l'entier inférieur
Donc ça donne un entier entre 0 et 9

+ 1
→ décalage → résultat final entre 1 et 10
 */

/** 
let supposition = 8;
let nombre = (Math.floor(Math.random() * 10) + 1);

if(supposition === nombre){
    console.log(`Bravo tu as trouvé que le nombre était ${supposition}`);
}else{
    console.log(`Raté, c'était le nombre ${nombre}`);
}
*/

let nombre = (Math.floor(Math.random() * 10) + 1);
let proposition = prompt("Devine un nombre entre 1 et 10");

if(nombre === parseInt(proposition)){
    console.log(`Bravo le nombre était ${proposition}`);
}else if(isNaN(proposition) || parseInt(proposition) < 1 || parseInt(proposition > 10)){
    console.log("Veuillez entrer un nombre entier entre 1 et 10");
}else{
    console.log(`C'est raté, le nombre était ${nombre}`);
}




