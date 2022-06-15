// Consegna
// L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
// Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce 
// con un messaggio di vittoria.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un
//  numero che non era una bomba.


// Indichiamo con un prompt il livello di difficoltà (1-3)
const userChoice = parseInt(prompt ('Scegli la difficoltà tramite un numero da 1 a 3'));
let gameDifficulties;

// Livello di difficoltà 1 -> 100 , 2 -> 81 , 3 -> 49
if (userChoice === 1) {
    gameDifficulties = 100;
} else if (userChoice === 2) {
    gameDifficulties  = 81;
} else if (userChoice === 3) {
    gameDifficulties  = 49;
}


// Darà il risultato della difficoltà impostata, quindi quante caselle abbiamo a disposizione
console.log('fuori scoop', gameDifficulties)

// Dichiariamo quante bombe ci sono nel gioco (16) e generiamole
const bombs = 16;
const numberOfBombs = generateBombs(gameDifficulties, 1, bombs)
console.log('fuori scoop', numberOfBombs)
// numero massimo di tentativi 
const maxAttempts = gameDifficulties - bombs;  
console.log(maxAttempts)
// Logica del gioco 
let gameContinues = true;
while (gameContinues) {
    const userNumbers = parseInt(prompt('Dimmi un numero'))
    if(numberOfBombs.includes(userNumbers)) {
        gameContinues = false;
        alert ('Hai perso')
    } else {
        // Pusho numero azzeccato in un array vuoto
       if(!succesfulNumber.includes(userNumbers)) {
            succesfulNumber.push(userNumbers);
       }

       if(succesfulNumber.length === maxAttempts) {
            gameContinues = false;
            alert('Hai vinto');
       }
    }
}


// Function 

// Generiamo un Array con X numero di bombe
// numberOfElements -> numero di elementi dell'array
// rangeMin -> Range minimo dei numeri generati (1)
// rangemax -> Range massimo dei numeri generati (16)
function generateBombs(numberOfElements,rangeMin, rangeMax) {
    const randomNumbersArray = []
        while (randomNumbersArray.length < rangeMax) {
            const randomNumbers = getRndInteger(rangeMin, numberOfElements);
            // Push solo se non è presente nell'array. Tutti numeri unici
            if (!randomNumbersArray.includes(randomNumbers)) {
                randomNumbersArray.push(randomNumbers)
            }
        }
  return randomNumbersArray
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }