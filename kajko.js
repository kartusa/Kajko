var taliaGracza1 = [];
var taliaGracza2 = [];
var score1 = 0;
var score2 = 0;
var scoreBank1 = 0;
var scorebank2 = 0;

var moneta = {
    isMoneta: true,
    isHand: false,
    cardScore: 1,
    isZbojcerz: false,
    isPirat: false,
    isSzambelan: false,
    name: "Moneta"
};

var monetaHand = {
    isMoneta: true,
    isHand: true,
    cardScore: 1,
    isZbojcerz: false,
    isPirat: false,
    isSzambelan: false,
    name: "Moneta na dłoni"
};

var zbojcerz = {
    isMoneta: false,
    isHand: false,
    cardScore: 0,
    isZbojcerz: true,
    isPirat: false,
    isSzambelan: false,
    name: "Zbójcerz"
};

var pirat = {
    isMoneta: false,
    isHand: false,
    cardScore: 0,
    isZbojcerz: false,
    isPirat: true,
    isSzambelan: false,
    name: "Pirat"
};

var szambelan = {
    isMoneta: false,
    isHand: false,
    cardScore: 0,
    isZbojcerz: false,
    isPirat: false,
    isSzambelan: true,
    name: "Szambelan"
};

var skarb5 = {
    isMoneta: false,
    isHand: false,
    cardScore: 5,
    isZbojcerz: false,
    isPirat: false,
    isSzambelan: false,
    name: "Skarb warty 5 dukatów"
};

var skarb10 = {
    isMoneta: false,
    isHand: false,
    cardScore: 10,
    isZbojcerz: false,
    isPirat: false,
    isSzambelan: false,
    name: "Skarb warty 10 dukatów"
};

talie = [];

function losowankoTalia(x) {
    talie['talia' + x] = [];
    for (var i = 0; i < x; i++) {
        let j = Math.floor(Math.random() * 7) + 1,
            elems = [moneta, monetaHand, zbojcerz, pirat, szambelan, skarb5];

        talie['talia' + x].push(j in elems ? elems[j] : skarb10);
    }
    wypiszTalia(x);
}

function wypiszTalia(x) {
    console.log("Talia " + x + "-elementowa zawiera:");
    for (let i = 0; i < x; i++) {
        console.log(talie['talia' + x][i].name);
    }
    console.log("--------------------------");
}

function gra() {
    losowankoTalia(9);
    //losowankoTalia(9);
    losowankoTalia(8);
    //losowankoTalia(8);
    losowankoTalia(7);
    //losowankoTalia(7);
    losowankoTalia(6);
    //losowankoTalia(6);
    losowankoTalia(5);
    //losowankoTalia(5);
    wyborTalii_1(); //gracz nr 1
}


function wyborTalii_1() {
    let odp = prompt("Gracz 1. Z której talii ciągniesz kartę?");
    switch (odp) {
        case '9':
            wyborZ9a();
            break;
        case '8':
            wyborZ8a();
            break;
        case '7':
            wyborZ7a();
            break;
        case '6':
            wyborZ6a();
            break;
        case '5':
            wyborZ5a();
            break;
        default:
            alert("Nie ma takiej talii");
            wyborTalii_2();
    }
}

function wyborTalii_2() {
    let odp = prompt("Gracz 2. Z której talii ciągniesz kartę?");
    switch (odp) {
        case '9':
            wyborZ9b();
            break;
        case '8':
            wyborZ8b();
            break;
        case '7':
            wyborZ7b();
            break;
        case '6':
            wyborZ6b();
            break;
        case '5':
            wyborZ5b();
            break;
        default:
            alert("Nie ma takiej talii");
            wyborTalii_1();
    }
}

function wyborZ9a() {
    if (talie['talia' + 9].length == 0) {
        alert("Ta talia jest już pusta!");
    } else {
        var a = talie['talia' + 9].pop();
    }
    alert("Wylosowana karta to: " + a.name);
    taliaGracza1[taliaGracza1.length] = a.name;
    var card = a.name;
    console.log("Talia gracza 1 zawiera: " + taliaGracza1);
    console.log("Gracz1: " + card);
    sprawdzenie1(card);
    wyborTalii_2();
}

function wyborZ8a() {
    if (talie['talia8'].length == 0) {
        alert("Ta talia jest już pusta!");
    } else {
        var a = talie['talia' + 8].pop();
    }
    alert("Wylosowana karta to: " + a.name);
    var card = a.name;
    taliaGracza1[taliaGracza1.length] = a.name;
    console.log("Talia gracza 1 zawiera: " + taliaGracza1);
    console.log("Gracz1: " + card);
    sprawdzenie1(card);
    wyborTalii_2();
}

function wyborZ7a() {
    if (talie['talia' + 7].length == 0) {
        alert("Ta talia jest już pusta!");
    } else {
        var a = talie['talia' + 7].pop();
    }
    alert("Wylosowana karta to: " + a.name);
    taliaGracza1[taliaGracza1.length] = a.name;
    var card = a.name;
    console.log("Talia gracza 1 zawiera: " + taliaGracza1);
    console.log("Gracz1: " + card);
    sprawdzenie1(card);
    wyborTalii_2();
}

function wyborZ6a() {
    if (talie['talia' + 6].length == 0) {
        alert("Ta talia jest już pusta!");
    } else {
        var a = talie['talia' + 6].pop();
    }
    alert("Wylosowana karta to: " + a.name);
    taliaGracza1[taliaGracza1.length] = a.name;
    var card = a.name;
    console.log("Talia gracza 1 zawiera: " + taliaGracza1);
    console.log("Gracz1: " + card);
    sprawdzenie1(card);
    wyborTalii_2();
}

function wyborZ5a() {
    if (talie['talia' + 5].length == 0) {
        alert("Ta talia jest już pusta!");
    } else {
        var a = talie['talia' + 5].pop();
    }
    alert("Wylosowana karta to: " + a.name);
    taliaGracza1[taliaGracza1.length] = a.name;
    var card = a.name;
    console.log("Talia gracza 1 zawiera: " + taliaGracza1);
    console.log("Gracz1: " + card);
    sprawdzenie1(card);
    wyborTalii_2();
}

function wyborZ9b() {
    if (talie['talia' + 9].length == 0) {
        alert("Ta talia jest już pusta!");
    } else {
        var a = talie['talia' + 9].pop();
    }
    alert("Wylosowana karta to: " + a.name);
    taliaGracza2[taliaGracza2.length] = a.name;
    var card = a.name;
    console.log("Talia gracza 2 zawiera: " + taliaGracza2);
    console.log("Gracz2: " + card);
    sprawdzenie2(card)
    wyborTalii_1();
}

function wyborZ8b() {
    if (talie['talia8'].length == 0) {
        alert("Ta talia jest już pusta!");
    } else {
        var a = talie['talia' + 8].pop();
    }
    alert("Wylosowana karta to: " + a.name);
    var card = a.name;
    taliaGracza2[taliaGracza2.length] = a.name;
    console.log("Talia gracza 2 zawiera: " + taliaGracza2);
    console.log("Gracz2: " + card);
    sprawdzenie2(card);
    wyborTalii_1();
}

function wyborZ7b() {
    if (talie['talia' + 7].length == 0) {
        alert("Ta talia jest już pusta!");
    } else {
        var a = talie['talia' + 7].pop();
    }
    alert("Wylosowana karta to: " + a.name);
    var card = a.name;
    taliaGracza2[taliaGracza2.length] = a.name;
    console.log("Talia gracza 2 zawiera: " + taliaGracza2);
    console.log("Gracz2: " + card);
    sprawdzenie2(card);
    wyborTalii_1();
}

function wyborZ6b() {
    if (talie['talia' + 6].length == 0) {
        alert("Ta talia jest już pusta!");
    } else {
        var a = talie['talia' + 6].pop();
    }
    alert("Wylosowana karta to: " + a.name);
    taliaGracza2[taliaGracza2.length] = a.name;
    var card = a.name;
    console.log("Talia gracza 2 zawiera: " + taliaGracza2);
    console.log("Gracz2: " + card);
    sprawdzenie2(card);
    wyborTalii_1();
}

function wyborZ5b() {
    if (talie['talia' + 5].length == 0) {
        alert("Ta talia jest już pusta!");
    } else {
        var a = talie['talia' + 5].pop();
    }
    alert("Wylosowana karta to: " + a.name);
    taliaGracza2[taliaGracza2.length] = a.name;
    var card = a.name;
    console.log("Talia gracza 2 zawiera: " + taliaGracza2);
    console.log("Gracz2: " + card);
    sprawdzenie2(card);
    wyborTalii_1();
}

//............gramy..........
gra();
//...........................

function sprawdzenie1(karta) {
    this.karta = karta;
    console.log("do funkcji przekazano: " + arguments[0]);
    if (karta == "Zbójcerz") {
        for (let i = 0; i < taliaGracza1.length; i++) {
            if (taliaGracza1[i].name == "Zbójcerz") {
                console.log("Zbójcerze zabrali wszystkie Twoje skarby!");
                czyszczenie1();
            }
        }
    } else if (karta == "Pirat") {
        for (let i = 0; i < taliaGracza1.length; i++) {
            if (taliaGracza1[i].name == "Zbójcerz") {
                console.log("Zbójcerze pobili się z piratami. Masz szczęście, nic nie tracisz.");
            } else {
                console.log("Piraci zabrali wszystkie Twoje skarby");
                czyszczenie1();
            }
        }
    } else if (karta == "Szambelan") {
        if (taliaGracza1.length !== 0) {
            for (let i = 0; i < taliaGracza1.length; i++) {
                if (taliaGracza1[i].cardScore == 10) {
                    let a = taliaGracza1.splice(i, 1);
                    console.log("Szambelan zabiera Twój najcenniejszy skrab!" + a);
                    break;
                }
            }
            for (let i = 0; i < taliaGracza1.length; i++) {
                if (taliaGracza1[i].cardScore == 5) {
                    let a = taliaGracza1.splice(i, 1);
                    console.log("Szambelan zabiera Twój najcenniejszy skrab!" + a);
                    break;
                }
            }
            for (let i = 0; i < taliaGracza1.length; i++) {
                if (taliaGracza1[i].cardScore == 1) {
                    let a = taliaGracza1.splice(i, 1);
                    console.log("Szambelan zabiera Twój najcenniejszy skrab!" + a);
                    break;
                }
            }
        } else {
            console.log("Nic nie masz. Szambelan nie ma co Ci odebrać.");
        }
    } else if (karta == "Moneta") {
        score1 += 1;
    } else if (karta == "Skarb warty 5 dukatów") {
        score1 += 5;
    } else if (karta == "Skarb warty 10 dukatów") {
        score1 += 10;
    } else if (karta == "Moneta na dłoni") {
        score1 += 1;
    }
}

function sprawdzenie2(karta) {
    this.karta = karta;
    console.log("do funkcji przekazano: " + arguments[0]);
    if (karta == "Zbójcerz") {
        for (let i = 0; i < taliaGracza2.length; i++) {
            if (taliaGracza2[i].name == "Zbójcerz") {
                console.log("Zbójcerze zabrali wszystkie Twoje skarby!");
                czyszczenie2();
            }
        }
    } else if (karta === "Pirat") {
        for (let i = 0; i < taliaGracza2.length; i++) {
            if (taliaGracza2[i].name == "Zbójcerz") {
                console.log("Zbójcerze pobili się z piratami. Masz szczęście, nic nie tracisz.");
            } else {
                console.log("Piraci zabrali wszystkie Twoje skarby");
                czyszczenie2();
            }
        }
    } else if (karta == "Szambelan") {
        if (taliaGracza2.length !== 0) {
            for (let i = 0; i < taliaGracza2.length; i++) {
                if (taliaGracza2[i].cardScore == 10) {
                    let a = taliaGracza2.splice(i, 1);
                    console.log("Szambelan zabiera Twój najcenniejszy skrab!" + a);
                    break;
                }
            }
            for (let i = 0; i < taliaGracza2.length; i++) {
                if (taliaGracza2[i].cardScore == 5) {
                    let a = taliaGracza2.splice(i, 1);
                    console.log("Szambelan zabiera Twój najcenniejszy skrab!" + a);
                    break;
                }
            }
            for (let i = 0; i < taliaGracza2.length; i++) {
                if (taliaGracza2[i].cardScore == 1) {
                    let a = taliaGracza2.splice(i, 1);
                    console.log("Szambelan zabiera Twój najcenniejszy skrab!" + a);
                    break;
                }
            }
        } else {
            console.log("Nic nie masz. Szambelan nie ma co Ci odebrać.");
        }
    } else if (karta == "Moneta") {
        score2 += 1;
    } else if (karta == "Skarb warty 5 dukatów") {
        score2 += 5;
    } else if (karta == "Skarb warty 10 dukatów") {
        score2 += 10;
    } else if (karta == "Moneta na dłoni") {
        score2 += 1;
    }
}

function czyszczenie1() {
    score1 = 0;
}

function czyszczenie2() {
    score2 = 0;
}
