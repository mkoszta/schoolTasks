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
    var szorgalomSzovegesErtekeles = "";
    var magatartasSzovegesErtekeles = "";
    if (jegy == 5) {
        szorgalomSzovegesErtekeles = "Példás";
        magatartasSzovegesErtekeles = "Példás";
    }
    else if (jegy == 4) {
        szorgalomSzovegesErtekeles = "Jó";
        magatartasSzovegesErtekeles = "Jó";
    }
    else if (jegy == 3) {
        szorgalomSzovegesErtekeles = "Változó";
        magatartasSzovegesErtekeles = "Változó";
    }
    else if (jegy == 2) {
        szorgalomSzovegesErtekeles = "Hanyag";
        magatartasSzovegesErtekeles = "Rossz";
    }
    return [szorgalomSzovegesErtekeles, magatartasSzovegesErtekeles];
}
document.write("<br>" + SzovegesErtekeles(2));
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