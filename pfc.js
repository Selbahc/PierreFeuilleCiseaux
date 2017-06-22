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

var computerNum = getRanNum(1, 3);
var userScore = 0;
var computerScore = 0;
var userNum;

for (var i = 0; i < 3; i++) {
  var userChoice = prompt("Choisissez entre Pierre, Feuille ou Ciseaux").toUpperCase();

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
  userNum > computerNum ? userScore++ : userNum < computerNum ? computerScore++ : false;
}

alert(userScore > computerScore ? `Bravo, vous avez gagné avec ${userScore} points contre ${computerScore} !` : userScore == computerScore ? `ÉGALITÉ (${userScore} points chacun...)` : `Désolé, vous avez perdu avec ${userScore} points contre ${computerScore}`);
alert(`Votre Score : ${userScore}\nScore de l'ordinateur : ${computerScore}`);
