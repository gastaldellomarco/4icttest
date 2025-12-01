const corsi = [
  { titolo: 'JavaScript Base', ore: 20, iscritti: 120 },
  { titolo: 'React Avanzato', ore: 35, iscritti: 80 },
  { titolo: 'Python per principianti', ore: 25, iscritti: 150 },
  { titolo: 'Machine Learning', ore: 50, iscritti: 60 },
  { titolo: 'HTML & CSS', ore: 15, iscritti: 200 },
];
//es1 Dato l’array dei corsi crea un nuovo array contenente i corsi che hanno più di 100 iscritti e almeno 20 ore di lezioni.
function corsi_nuovo(corsi) {
    return corsi.filter(corso => corso.iscritti > 100 && corso.ore > 20);
}
    
console.log(corsi_nuovo(corsi));

//es2 1- Dato l’array delle recensioni trova la media di tutte le recensioni
//Dato l’array delle recensioni crea un array con solo le recensioni “negative” 
// (numero di stelle inferiore alla media)


const recensioni = [
  { utente: 'Anna', stelle: 5, commento: 'Fantastica!' },
  { utente: 'Luca', stelle: 3, commento: 'Carina ma migliorabile' },
  { utente: 'Sara', stelle: 4, commento: 'Molto utile' },
  { utente: 'Marco', stelle: 2, commento: 'Troppi bug' },
  { utente: 'Elisa', stelle: 4, commento: 'Bella interfaccia!' },
  { utente: 'Paolo', stelle: 5, commento: 'La uso ogni giorno!' },
];


//1- Dato l’array delle recensioni trova la media di tutte le recensioni
//2- Dato l’array delle recensioni crea un array con solo le recensioni “negative” (numero di stelle inferiore alla media)


function media_recensioni(recensione){
    const sommaVoti = recensioni.reduce((acc, stella) => acc + stella, 0);
    return sommaVoti / recensioni.length;
}
console.log(media_recensioni(recensioni));
function recensioninegative(utenti, recensioni) {
    return utenti
    .filter(utenti => utenti.stelle < 3)
    .map(utenti => ({utente: utenti.utente, stelle: utenti.stelle}))
}
console.log(recensioninegative(recensioni))