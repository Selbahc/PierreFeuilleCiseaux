// Un point pour le choix le plus fort, selon:
// ciseaux > feuille (les ciseaux coupent la feuille)
//pierre > ciseaux (la pierre casse les ciseaux)
//feuille > pierre (la feuille enveloppe la pierre)
// Sinon, aucun point n'est accordé.
// Le gagnant est déterminé après 3 manches.

//Get a random integer number between min and max inclusives
function getRanNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var userNum;

var userScore = 0;
var computerScore = 0;

var resultArr = [];

for (var i = 0; i < 3; i++) {
  var computerNum = getRanNum(1, 3);
  var userChoice = prompt('Choisissez entre "Pierre", "Feuille" ou "Ciseaux"').toUpperCase();
  //CISEAUX = 1 ; FEUILLE = 2 ; PIERRE = 3
  switch (userChoice) {
    case "CISEAUX":
      userNum = 1;
      break;
    case "FEUILLE":
      userNum = 2;
      break;
    case "PIERRE":
      userNum = 3;
      break;
  }
  resultArr.push([userNum, computerNum]);
}

for (var i = 0; i < resultArr.length; i++) {
  if (resultArr[i].indexOf(1) === -1) { //SI PAS CISEAUX : 2 > 3
    switch (resultArr[i].indexOf(2)) {
      case 0:
        userScore++;
        break;
      case 1:
        computerScore++;
        break;
    }
  } else if (resultArr[i].indexOf(2) === -1) { //SI PAS FEUILLE : 3 > 1
    switch (resultArr[i].indexOf(3)) {
      case 0:
        userScore++;
        break;
      case 1:
        computerScore++;
        break;
    }
  } else {
    switch (resultArr[i].indexOf(1)) { //SI PAS PIERRE : 1 > 2
      case 0:
        userScore++;
        break;
      case 1:
        computerScore++;
        break;
    }
  }
}

//RESULT
var recapScores = `Votre Score : ${userScore}\nScore de l'ordinateur : ${computerScore}`;
alert(userScore > computerScore ? `Bravo, vous avez gagné avec ${userScore} points contre ${computerScore} !\n${recapScores}` : userScore == computerScore ? `ÉGALITÉ (${userScore} points chacun...)\n${recapScores}` : `Désolé, vous avez perdu avec ${userScore} points contre ${computerScore}\n${recapScores}`);
