// Test unitario:  Player Moves

  // Dodici variabili globali che rappresentano i tipi di movimento e i valori di ogni giocatore (3 tipi di movimento e 3 valori di movimento per ciascun giocatore).

  // Le variabili seguono uno schema di denominazione.
  // Inizializza le variabili come "undefined".
  // Cerca in [projectfolder] /js/test.js per vedere il blocco di prova "describe Player Moves", per le variabili e i valori.

  // Questi nomi di variabili dovrebbero essere i seguenti: playerOneMoveOneType, playerOneMoveOneValue

  // Le variabili di movimento del giocatore uno.
    // Movimenti:
    let playerOneMoveOneType, playerOneMoveTwoType, playerOneMoveThreeType;

    // Valori:
    let playerOneMoveOneValue, playerOneMoveTwoValue, playerOneMoveThreeValue;


  // Le variabili di movimento del giocatore due.
    // Movimenti:
    let playerTwoMoveOneType, playerTwoMoveTwoType, playerTwoMoveThreeType;

    // Valori:
    let playerTwoMoveOneValue, playerTwoMoveTwoValue, playerTwoMoveThreeValue;

// Test unitario:  setPlayerMoves() - Main Functionality

  // Una funzione chiamata setPlayerMoves, che prenderà una stringa che rappresenta un giocatore (nella forma di "Player One" o "Player Two"), tre tipi di movimento e tre valori di spostamento e imposta le variabili di spostamento globali corrette.

  // La firma del metodo per questa funzione dovrebbe essere la seguente: setPlayerMoves (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue).

  // "A function called setPlayerMoves should exist:"
  let setPlayerMoves = function(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {

    // Imposta le variabili globali in base all'input del giocatore.
    switch (player) {
      case 'Player One':
        playerOneMoveOneType = moveOneType;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeValue = moveThreeValue;
        break;

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