const utenti = [
  { nome: 'Mario', cognome: 'Rossi', regione: 'veneto' },
  { nome: 'Giulia', cognome: 'Verdi', regione: 'lombardia' },
  { nome: 'Luca', cognome: 'Bianchi', regione: 'piemonte' },
  { nome: 'Sara', cognome: 'Neri', regione: 'veneto' },
  { nome: 'Luca', cognome: 'Gialli', regione: 'veneto' },
  { nome: 'Gianluca', cognome: 'Blu', regione: 'lombardia' },
  { nome: 'Elena', cognome: 'Viola', regione: 'piemonte' },
  { nome: 'Francesca', cognome: 'Arancioni', regione: 'veneto' },
];

// Esercizio 2: Crea una funzione che, dato un array di utenti come quello sopra,
// restituisce un nuovo array di stringhe con il formato "Cognome, Nome - Regione" per ogni utente.
// Utilizza solamente i metodi degli array (es. .map(), .filter(), ecc.) senza usare cicli for o while.
// Scrivi funzioni pure (senza effetti collaterali).

// Esempio di output atteso:
// [
//   "Rossi, Mario - veneto",
//   "Verdi, Giulia - lombardia",
//   "Bianchi, Luca - piemonte",
//   ...
// ]
/*function formattazione(utenti) {
  return utenti.map(utente => `${utente.cognome}, ${utente.nome} - ${utente.regione}`);
}
const utentiFormattati = formattazione(utenti);
console.log(utentiFormattati);
*/
function trasformautente (utente) {
  return "" + utente.cognome + ", " + utente.nome + " - " + utente.regione
}
const result= utenti.map(trasformautente)
console.log(result)