function DiakInfo(nev, csoport, típus) {
    var valasz = "";
    var megjelenitendoSzoveg;
    megjelenitendoSzoveg = valasz.concat(nev);
    if (csoport < 10) {
        megjelenitendoSzoveg += valasz.concat(" [Team0" + csoport + "]");
    }
    else {
        megjelenitendoSzoveg += valasz.concat(" [Team" + csoport + "]");
    }
    if (típus == true) {
        megjelenitendoSzoveg += valasz.concat(" - Junior Frontend");
    }
    else {
        megjelenitendoSzoveg += valasz.concat(" - Webprogramozó");
    }
    return megjelenitendoSzoveg;
}
document.write(DiakInfo("Minta Márton", 8, true));
function SzovegesErtekeles(jegy) {
    if (jegy == 5) {
        return ["Példás", "Példás"];
    }
    else if (jegy == 4) {
        return ["Jó", "Jó"];
    }
    else if (jegy == 3) {
        return ["Változó", "Változó"];
    }
    else if (jegy == 2) {
        return ["Hanyag", "Rossz"];
    }
    else {
        return ["Hibás érték", "Hibás érték!"];
    }
}
var ertekeles = SzovegesErtekeles(2);
document.write("<br>A tanuló szorgalmi értékelése: " + ertekeles[0] + "<br>Magatartás jegye: " + ertekeles[1]);
function HarommalOszthatokSzama(tomb) {
    var darab = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 3 == 0) {
            darab++;
        }
    }
    return darab;
}
document.write("<br>" + HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]));
function Nyeroszamok(mennyiseg, alsoHatar, felsoHatar) {
    var generaltSzamok = [];
    for (var i = 0; i < mennyiseg; i++) {
        var generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        generaltSzamok.push(generaltSzam);
    }
    var nyeroSzamok = [];
    for (var j = 0; j < generaltSzamok.length; j++) {
        var szerepelE = false;
        for (var k = 0; k < nyeroSzamok.length; k++) {
            if (generaltSzamok[j] == nyeroSzamok[k]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            nyeroSzamok.push(generaltSzamok[j]);
        }
    }
    return nyeroSzamok;
}
document.write("<br>" + Nyeroszamok(5, 1, 90));
