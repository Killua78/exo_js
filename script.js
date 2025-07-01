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


