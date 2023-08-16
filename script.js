let total1 = 501;
let total2 = 501;

function calculate() {
    let score1 = parseInt(document.getElementById('score1').value);
    let score2 = parseInt(document.getElementById('score2').value);

    if (isNaN(score1) || isNaN(score2)) {
        alert("Veuillez entrer des scores valides pour les deux équipes.");
        return;
    }

    total1 -= score1;
    total2 -= score2;

    if (total1 < 0) {
        alert("Score trop élevé pour l'Équipe 1! Réessayez.");
        total1 += score1;
    } else if (total1 === 0) {
        alert("Félicitations! L'Équipe 1 a gagné!");
        total1 = 501;
        total2 = 501;
    }

    if (total2 < 0) {
        alert("Score trop élevé pour l'Équipe 2! Réessayez.");
        total2 += score2;
    } else if (total2 === 0) {
        alert("Félicitations! L'Équipe 2 a gagné!");
        total1 = 501;
        total2 = 501;
    }

    document.getElementById('total1').innerText = total1;
    document.getElementById('total2').innerText = total2;
}
