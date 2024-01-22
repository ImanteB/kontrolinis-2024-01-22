let marsrutai = [
   {
      marsrutas: "Vilnius - Kaunas",
      isvykimoLaikas: "2024-01-22 13:45",
      marsrutoTrukme: "1:09"
   },
   {
      marsrutas: "Vilnius - Varšuva",
      isvykimoLaikas: "2024-01-24 10:00",
      marsrutoTrukme: "6:00"
   },
   {
      marsrutas: "Kaunas - Klaipėda",
      isvykimoLaikas: "2024-01-22 08:15",
      marsrutoTrukme: "2:55"
   },
   {
      marsrutas: "Vilnius - Ryga",
      isvykimoLaikas: "2024-01-25 11:45",
      marsrutoTrukme: "4:25"
   },
   {
      marsrutas: "Kaunas - Talinas",
      isvykimoLaikas: "2024-01-30 22:00",
      marsrutoTrukme: "8:00"
   },
   {
      marsrutas: "Vilnius - Indija",
      isvykimoLaikas: "2024-02-01 08:00",
      marsrutoTrukme: "51:55"
   }
]

/* 1. funkcija. Atspausdinti visus vieno maršruto duomenis (bet kurio pasirinktinai) */
function printMarsrutras(traukinys) {
   console.log("Traukinys vyksta maršrutu: " + traukinys.marsrutas + " kuris išvyksta:" + traukinys.isvykimoLaikas + " kelionės trukmė: " + traukinys.marsrutoTrukme);
}
printMarsrutras(marsrutai[3]);

/* 2. funkcija. Atspausdinti visus maršrutus */
marsrutai.forEach((traukinys) =>
   console.log("Traukinys vyksta maršrutu: " + traukinys.marsrutas + " kuris išvyksta:" + traukinys.isvykimoLaikas + " kelionės trukmė: " + traukinys.marsrutoTrukme));

//arba//
marsrutai.forEach((traukinys) => printMarsrutras(traukinys));

/* 3. funkcija. maršrutų kiekis ats.6*/
function getMarsrutaiCount(marsrutai) {
   return marsrutai.length;
}
console.log(getMarsrutaiCount(marsrutai));

/*Papildomas.*/
/*a. Rasti trumpiausios kelionės duomenis(f)ir juos atspausdinti(visą informaciją apie maršrutą*/
function rastiTrumpiausiaMarsruta(marsrutai) {
   let trumpiausiasMarsrutas = marsrutai[0]; // Tiosiog pirmas marsrutas, kuri vėliau panaudosime

   for (let i = 1; i < marsrutai.length; i++) {
      let trukme1 = skaiciuotiMinutes(trumpiausiasMarsrutas.marsrutoTrukme);
      let trukme2 = skaiciuotiMinutes(marsrutai[i].marsrutoTrukme);

      // Lyginame trukmes 
      if (trukme2 < trukme1) {
         trumpiausiaKelione = marsrutai[i];
      }
   }

   return trumpiausiasMarsrutas;
}

// Konvertuojame trukmės laiką į minutes
function skaiciuotiMinutes(trukme) {
   let laikas = trukme.split(":");
   return parseInt(laikas[0]) * 60 + parseInt(laikas[1]);
}

let trumpiausiasMarsrutas = rastiTrumpiausiaMarsruta(marsrutai);
//pasitikrinimui
console.log("Trumpiausias maršrutas:");
console.log("Maršrutas: " + trumpiausiasMarsrutas.marsrutas);
console.log("Išvykimo laikas: " + trumpiausiasMarsrutas.isvykimoLaikas);
console.log("Kelionės trukmė: " + trumpiausiasMarsrutas.marsrutoTrukme);

//rastas trumpiausias maršrutas
console.log("Trumpiausias maršrutas: " + trumpiausiasMarsrutas.marsrutas + " Išvykimo laikas: " + trumpiausiasMarsrutas.isvykimoLaikas + " Kelionės trukmė: " + trumpiausiasMarsrutas.marsrutoTrukme)


/*b. Rasti ilgiausios kelionės duomenis(f)ir juos atspausdinti(visą informaciją apie maršrutą*/
let ilgiausiasMarsrutas = marsrutai.reduce((ilgiausias, esamas) => {
   let ilgiausioTrukme = ilgiausias ? ilgiausias.marsrutoTrukme.split(":") : [0, 0];
   let esamoTrukme = esamas.marsrutoTrukme.split(":");

   let ilgiausioLaikas = new Date(0, 0, 0, ilgiausioTrukme[0], ilgiausioTrukme[1]);
   let esamoLaikas = new Date(0, 0, 0, esamoTrukme[0], esamoTrukme[1]);

   return esamoLaikas > ilgiausioLaikas ? esamas : ilgiausias;
}, 0);

// Atspausdinta informaciją apie ilgiausią maršrutą
console.log("Ilgiausias maršrutas: " + ilgiausiasMarsrutas.marsrutas + " Išvykimo laikas: " + ilgiausiasMarsrutas.isvykimoLaikas + " Kelionės trukmė: " + ilgiausiasMarsrutas.marsrutoTrukme)


/*c. Rasti(f)ir atspausdinti(visą informaciją apie maršrutus)(f)tik tas keliones, kurios truko ilgiau nei para*/

function rastiIlgiauNeiPara(marsrutai) {
   let ilgiauNeiParaMarsrutai = marsrutai.filter(marsrutas => {
       let trukme = marsrutas.marsrutoTrukme.split(':');
       let trukmeValandos = parseInt(trukme[0]);
       let trukmeMinutes = parseInt(trukme[1]);
       let trukmeVisoMinutes = trukmeValandos * 60 + trukmeMinutes;

       return trukmeVisoMinutes > 24 * 60; // 24 valandos * 60 minutes = 1 diena
   });

   ilgiauNeiParaMarsrutai.forEach(marsrutas => {
      console.log("Maršrutai, kurie trunka ilgiau nei para: " + marsrutas.marsrutas + " Išvykimo laikas: " + marsrutas.isvykimoLaikas + " Kelionės trukmė: " + marsrutas.marsrutoTrukme);
   });
}

rastiIlgiauNeiPara(marsrutai);

/*ačiū, buvo labai sunku, bet įveikiama */