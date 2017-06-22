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

var computerNum = getRanNum(0, 100);
