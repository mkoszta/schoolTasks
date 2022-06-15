function DiakInfo(nev:string, csoport:number, típus:boolean):string{
    let valasz:string="";
    let megjelenitendoSzoveg:string
    megjelenitendoSzoveg=valasz.concat(nev);
    if (csoport<10){
        megjelenitendoSzoveg+=valasz.concat(" [Team0"+csoport+"]");
    }
    else {
        megjelenitendoSzoveg+=valasz.concat(" [Team"+csoport+"]");
    }

    if (típus==true){
        megjelenitendoSzoveg+=valasz.concat(" - Junior Frontend")
    }
    else {
        megjelenitendoSzoveg+=valasz.concat(" - Webprogramozó")
    }
    return megjelenitendoSzoveg
}
document.write(DiakInfo("Minta Márton", 8, true));

function SzovegesErtekeles(jegy:number): [string, string]{
    if (jegy==5){
        return ["Példás", "Példás"]
    }
    else if (jegy==4){
        return ["Jó", "Jó"]
    }
    else if (jegy==3){
        return ["Változó", "Változó"]
    }
    else if (jegy==2){
        return ["Hanyag", "Rossz"]
    }
    else {
    return ["Hibás érték", "Hibás érték!"]
}
}
var ertekeles:[string, string]=SzovegesErtekeles(2)
document.write("<br>A tanuló szorgalmi értékelése: "+ertekeles[0]+"<br>Magatartás jegye: "+ertekeles[1]);

function HarommalOszthatokSzama(tomb:number[]):number{
    let darab:number=0;
    for (let i=0; i<tomb.length; i++){
        if (tomb[i]%3==0){
            darab++
        }
    }
    return darab
}
document.write("<br>"+HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20 ]));

function Nyeroszamok(mennyiseg:number, alsoHatar:number, felsoHatar:number):number[]{
    let generaltSzamok:number[] = [];
    for (let i = 0; i < mennyiseg; i++) {
        let generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;  
        generaltSzamok.push(generaltSzam);
    }
    let nyeroSzamok:number[]=[];
    for (let j=0; j<generaltSzamok.length;j++){
        let szerepelE:boolean=false;
        for (let k=0; k<nyeroSzamok.length;k++){
            if (generaltSzamok[j]==nyeroSzamok[k]){
                szerepelE=true
            }
        }
        if (szerepelE==false){
            nyeroSzamok.push(generaltSzamok[j])
        }
    }
    return nyeroSzamok;
}
document.write("<br>"+ Nyeroszamok(5,1,90))