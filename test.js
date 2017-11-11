var scores = [
    60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44
];

//var wynik = "";

function punktacja() {
    for (var i = 0; i < scores.length; i++) {
        console.log("Płyn do baniek nr " + i + " wynik: " + scores[i]);
    }
    console.log("Liczba testów: " + scores.length);
    checkScore();
    //console.log("Największa liczba wytworzonych baniek: " + scoreMax);
    //console.log("Płyny z największym wynikiem: " + scoresMax);
}
function checkScore() {
    var highScore = 0;
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    console.log("Największa liczba wytworzonych baniek: " + highScore);
    var newScores = [];
    for (var j = 0; j < scores.length; j++) {
        if (scores[j] == highScore) {
            newScores.push(j);
        }
    }
    console.log("Płyny z największym wynikiem: " + newScores);
}