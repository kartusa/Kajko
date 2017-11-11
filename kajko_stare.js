var talia5 = [];
var talia6 = [];
var talia7 = [];
var talia8 = [];
var talia9 = [];
//var talia = [];
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

//losowanko
function losowanko(x) { //x to wielkość talii
    for (var i = 0; i < x; i++) {
        var j = Math.floor(Math.random() * 7) + 1;
        switch (j) {
            case 1:
                talia5[i] = moneta;
                break;
            case 2:
                talia5[i] = monetaHand;
                break;
            case 3:
                talia5[i] = zbojcerz;
                break;
            case 4:
                talia5[i] = pirat;
                break;
            case 5:
                talia5[i] = szambelan;
                break;
            case 6:
                talia5[i] = skarb5;
                break;
            default:
                talia5[i] = skarb10;
        }
    }
    //console.log(talia5);
    wypisz(x);
}

//losowanko(7);

function wypisz(x) {
    for (var i = 0; i < x; i++) {
        console.log(talia5[i].name);
    }
}



talie = [];

function losowankoTalia(x) {
    talie['talia' + x] = [];
    for (var i = 0; i < x; i++) {
        let j = Math.floor(Math.random() * 7) + 1,
            elems = [moneta, monetaHand, zbojcerz, pirat, szambelan, skarb5];

        talie['talia' + x].push(j in elems ? elems[j] : skarb10);
    }
    //console.log(talie['talia'+x][i].name);
    wypiszTalia(x);
}

function wypiszTalia(x) {
    //console.log('talia'+x in talie ? talie['talia'+x][i].name : 'Pusto');
    for (let i = 0; i < x; i++) {
        console.log(talie['talia' + x][i].name);
    }
}

losowankoTalia(10);
