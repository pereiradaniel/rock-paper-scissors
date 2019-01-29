// Test unitario:  Player Moves

  // Dodici variabili globali che rappresentano i tipi di movimento e i valori di ogni giocatore (3 tipi di movimento e 3 valori di movimento per ciascun giocatore).

  // Le variabili seguono uno schema di denominazione.
  // Inizializza le variabili come "undefined".
  // Cerca in [projectfolder] /js/test.js per vedere il blocco di prova "describe Player Moves", per le variabili e i valori.
  // Questi nomi di variabili dovrebbero essere i seguenti: playerOneMoveOneType, playerOneMoveOneValue

  // Variabili globali per il tipo di movimento del giocatore e il valore:

    // Le variabili di movimento del giocatore uno:
      // Movimenti:
      let playerOneMoveOneType, playerOneMoveTwoType, playerOneMoveThreeType,
      // Valori:
      playerOneMoveOneValue, playerOneMoveTwoValue, playerOneMoveThreeValue,
    
    // Le variabili di movimento del giocatore due:
      // Movimenti:
      playerTwoMoveOneType, playerTwoMoveTwoType, playerTwoMoveThreeType,
      // Valori:
      playerTwoMoveOneValue, playerTwoMoveTwoValue, playerTwoMoveThreeValue;


// Test unitario:  setPlayerMoves() - Main Functionality
// Test unitario:  setPlayerMoves() - Edge Cases

  // Una funzione chiamata setPlayerMoves, che prenderà una stringa che rappresenta un giocatore (nella forma di "Player One" o "Player Two"), tre tipi di movimento e tre valori di spostamento e imposta le variabili di spostamento globali corrette.
  // La firma del metodo per questa funzione dovrebbe essere la seguente: setPlayerMoves (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue).

  // TEST MAIN FUNCTIONALITY "A function called setPlayerMoves should exist:"
  const setPlayerMoves = function(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {

    // TEST EDGE CASE "Should not set moves if a move type is missing:"
    if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue) {
      return;
    }

    // TEST EDGE CASE "Shoud not set moves if an invalid move type is supplied:"
    // Vedi le funzioni "validTypes()" e "validType()" che sono stati creati per rilevare se i tipi di spostamento sono validi.
    if(!validTypes(moveOneType, moveTwoType, moveThreeType)) {
        return;
      }

    // TEST EDGE CASE "Should not set moves if any move values are less than one:"
    // TEST EDGE CASE "Should not set moves if any move values are greater than ninety-nine:"
    // TEST EDGE CASE "Should not set moves if move values sum to more than ninety-nine:"
    // Vedi la funzione "validValues()" che è stata creata per determinare se i valori soddisfano i requisiti per "casi limite".
    if (!validValues(moveOneValue, moveTwoValue, moveThreeValue)) {
      return;
    };

    // Imposta le variabili globali in base all'input del giocatore.
    switch (player) {
      // TEST MAIN FUNCTIONALITY "It should set player one's moves with valid inputs."
      // Imposta le variabili globali per il giocatore uno sull'input dal giocatore uno.
      case 'Player One':
        playerOneMoveOneType = moveOneType;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeValue = moveThreeValue;
        break;

      // TEST MAIN FUNCTIONALITY "It should set player one's moves with valid inputs."
      // Imposta le variabili globali per il giocatore due all'input del secondo giocatore.
      case 'Player Two':
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeValue = moveThreeValue;
        break;
    }
  };

  // Questa funzione è usata da "setPlayerMoves()". Invia le variabili del tipo di spostamento a 'validType ()' per determinare se sono valide.
  const validTypes = (moveOne, moveTwo, moveThree) => validType(moveOne) && validType(moveTwo) && validType(moveThree);

  // Questa funzione è utilizzata da 'validType()' per determinare la validità di un singolo tipo di spostamento.
  const validType = (move) => move === 'rock' || move === 'paper' || move === 'scissors';

  // Questa funzione è utilizzata da "setPlayerMoves()" e determina se i valori di spostamento soddisfano i requisiti dei casi limite.
  const validValues = (moveOneValue, moveTwoValue, moveThreeValue) => moveOneValue >= 1 && moveTwoValue >= 1 && moveThreeValue >= 1 && moveOneValue + moveTwoValue + moveThreeValue < 100;


// Test Unitario:  getRoundWinner() - Main Functionality
// Test Unitario:  getRoundWinner() - Edge Cases

  // Una funzione chiamata getRoundWinner, che prende un numero tondo (1, 2 o 3), confronta i tipi di movimento e i valori di entrambi i giocatori per quel round e restituisce il vincitore appropriato ('Player One', 'Player Two' o 'Tie')

  // TEST MAIN FUNCTIONALITY "A function called getRoundWinner shoud exist:"
  const getRoundWinner = function(round) {
    // Invia le informazioni sulla partita a 'getMoveWinner ()' e riceve i dati che specificano il vincitore.
    // Vedi la funzione 'getMoveWinner()' che è stata creata per determinare il vincitore di una partita specifica.
    switch (round) {
      case 1:
      return getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);
        break;

      case 2:
      return getMoveWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);
        break;

      case 3:
      return getMoveWinner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);
        break;

      // TEST EDGE CASE "Should return null if any move types or values are missing:"
      default:
        return null;
    }
  }

  // Questa funzione è utilizzata da "getRoundWinner()" e determina i resulti, e determina il vincitore di una partita confrontando le variabili che sono state passate alla funzione.
  const getMoveWinner = function(playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) {

    // TEST EDGE CASE "Should return null if any move types or values are missing:"
    if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue) {
      return null;
    }

    // Confronta le variabili passate in questa funzione e restituisci il risultato.
    if (playerOneMoveType === playerTwoMoveType) {
      // TEST MAIN FUNCTIONALITY "Should return the correct winner with two of the same move type and different values:"
      if (playerOneMoveValue > playerTwoMoveValue) {
        return 'Player One';
      } else if (playerOneMoveValue < playerTwoMoveValue) {
        return 'Player Two'
      } else {
        // TEST MAIN FUNCTIONALITY "Should return the correct winner with two of the same move type and same value:"
        return 'Tie';
      }
    } else if (playerOneMoveType === 'rock') {
      if (playerTwoMoveType === 'scissors') {
        // TEST MAIN FUNCTIONALITY "Should return the correct winner with rock versus scissors:"
        return 'Player One';
      } else if (playerTwoMoveType === 'paper') {
        // TEST MAIN FUNCTIONALITY "Should return the correct winner with rock versus paper:"
        return 'Player Two';
      }
    } else if (playerOneMoveType === 'paper') {
      if (playerTwoMoveType === 'rock') {
        // TEST MAIN FUNCTIONALITY "Should return the correct winner with rock versus paper:"
        return 'Player One';
      } else if (playerTwoMoveType === 'scissors') {
        // TEST MAIN FUNCTIONALITY "Should return the correct winner with paper versus scissors:"
        return 'Player Two';
      }
    } else if (playerOneMoveType === 'scissors') {
      if (playerTwoMoveType === 'rock') {
        // TEST MAIN FUNCTIONALITY "Should return the correct winner with rock versus scissors:"
        return 'Player Two';
        // TEST MAIN FUNCTIONALITY "Should return the correct winner with paper versus scissors:"
      } else if (playerTwoMoveType === 'paper') {
        return 'Player One';
      }
    }
  }


// Test Unitario:  getGameWinner() - Main Functionality

  // Una funzione chiamata getGameWinner, che confronta sia i tipi di movimento del giocatore che i valori per l'intero gioco e restituisce il vincitore appropriato ("Player One", "Player Two" o "Tie")

  // TEST MAIN FUNCTIONALITY "A function called getGameWinner should exist:"
  const getGameWinner = () => {
    // TEST MAIN FUNCTIONALITY "Should return null if not all values are set:"
    // Determina se esistono tutti i tipi di mosse giocatore uno e due, o restituisce nulla.
    if (!playerOneMoveOneType || !playerOneMoveTwoType || !playerOneMoveThreeType || 
        !playerTwoMoveOneType || !playerTwoMoveTwoType || !playerTwoMoveThreeType ||
        !playerOneMoveOneValue || !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
        !playerTwoMoveOneValue || !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
      return null;
    }

    // Queste variabili memorizzano il numero di partite che ogni giocatore vince. Sono inizializzati a 0.
    playerOnePts = 0;
    playerTwoPts = 0;

    // Conta i punti per ogni giocatore usando 'getRoundWinner ()' per determinare il vincitore di ogni incontro.
    addWin(getRoundWinner(1));
    addWin(getRoundWinner(2));
    addWin(getRoundWinner(3));

    // Determina quale giocatore ha più punti o se il risultato è un pareggio.
    if (playerOnePts > playerTwoPts) {
      // TEST MAIN FUNCTIONALITY "Should declare when player one wins:"
      return 'Player One';
    } else if (playerOnePts < playerTwoPts) {
      // TEST MAIN FUNCTIONALITY "Should declare when player one wins:"
      return 'Player Two';
    } else {
      // TEST MAIN FUNCTIONALITY "Should declare when the game is a tie:"
      return 'Tie';
    }
  }

  // Questa funzione è utilizzata da "getGameWinner()" ed è stata creata per i punti di ciascun giocatore.
  const addWin = (winner) => {
    if (winner === 'Player One') {
      playerOnePts = (playerOnePts + 1) || 1;
    } else if (winner === 'Player Two') {
      playerTwoPts = (playerTwoPts + 1) || 1;
    }
  }


// Test Unitario:  BONUS: setComputerMoves()

  // Bonus: una funzione chiamata setComputerMoves, che sceglie tre mosse casuali per il giocatore due. Il tipo di spostamento per ogni mossa dovrebbe essere completamente casuale, ei valori di mossa dovrebbero essere casuali, ma aggiungere fino a 99.

  // TEST BONUS "A function called setComputerMoves should exist:"
  const setComputerMoves= () => {
    // L'array 'move' viene utilizzato all'interno di questa funzione per selezionare casualmente un tipo di mossa valido per il Giocatore Due.
    const moves = ['rock', 'paper', 'scissors'];

    // Queste variabili saranno passate da questa funzione alla funzione 'setPlayerMoves()'.
      // TEST BONUS "Should set player two's move types to valid move types:"
      // Imposta i tipi di movimento per tutte le mosse del giocatore due scegliendo casualmente un tipo dall'array chiamato 'mosse'.
      const moveOneType = moves[Math.floor(Math.random() * 3)];
      const moveTwoType = moves[Math.floor(Math.random() * 3)];
      const moveThreeType = moves[Math.floor(Math.random() * 3)];

      // TEST BONUS "Should set player two's move values to three values that sum to ninety-nine:"
      // Seleziona valori casuali per le mosse del giocatore due. Sono necessari tre passaggi per garantire che la somma di tutti e tre sia uguale a novantanove.
      const moveOneValue = Math.floor(Math.random() * 96) + 1;
      const moveTwoValue = Math.floor(Math.random() * (97 -moveOneValue)) + 1;
      const moveThreeValue = 99 - moveOneValue - moveTwoValue;

    // TEST BONUS "Should set player two's move types to valid move types:"
    // Usa la funzione 'setPlayerMoves()' per impostare le variabili globali per il Giocatore Due usando le variabili che sono state impostate su valori casuali.
    setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue);
  }