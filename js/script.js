const startGame = document.querySelector('#play')
startGame.addEventListener('click', start);

function start() {
    // Manipoliamo il dom di #griglia - Funziona
    const mainGrid = document.querySelector('#griglia')
    mainGrid.innerHTML = ' '
    mainGrid.classList = ' '

    // Manipoliamo il dom di #gamechange
    const userChoice = document.querySelector('#gamechange').value;


    let gameDifficulties;
    let mainGridClass;
 

    // Livello di difficoltà 1 -> 100 , 2 -> 81 , 3 -> 49
    if (userChoice === '1') {
        gameDifficulties = 100;
        mainGridClass = 'easy';
    } else if (userChoice === '2') {
        gameDifficulties  = 81;
        mainGridClass = 'hard';
    } else if (userChoice === '3') {
        gameDifficulties  = 49;
        mainGridClass = 'crazy';
    }

    console.log(userChoice)

    // GRIGLIA 
    generateGrid();
   function generateGrid() {
        // Dare classe ad una griglia che decide dimensioni square
        mainGrid.classList.add(mainGridClass)


        // genero la griglia a seconda di gameDifficulties
        for ( i = 1; i <= gameDifficulties; i++) {
            // Creare cella
            const newCell = document.createElement('div');
            newCell.innerHTML = `<span>${parseInt(i)}</span>`;
            newCell.classList.add('square');
            newCell.addEventListener('click', cellClick);
            console.log(i)
            // Aggiungere il testo
            // Aggiungere una classe
            // Appendo l'elemento creato
            mainGrid.append(newCell);
        }

        function cellClick(){
            

        }
   }



    //  ------
    // Utility Function - BOMBE
    //  --------
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
        // const userNumbers = parseInt(prompt('Dimmi un numero')) EVENTO CLICK
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
}
 


// Function  - GENERAZIONE BOMBE

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

//  GENERAZIONE NUMERO CASUALE
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }