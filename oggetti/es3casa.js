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

// Esercizio 3: Crea una funzione che filtra gli utenti di una specifica regione (ad esempio "veneto")
// e restituisce un array di oggetti contenenti solo il nome e il cognome degli utenti di quella regione.
// Utilizza solamente i metodi degli array (es. .map(), .filter(), ecc.) senza usare cicli for o while.
// Scrivi funzioni pure (senza effetti collaterali).

// Esempio di output atteso per la regione "veneto":
// [
//   { nome: 'Mario', cognome: 'Rossi' },
//   { nome: 'Sara', cognome: 'Neri' },
//   { nome: 'Luca', cognome: 'Gialli' },
//   { nome: 'Francesca', cognome: 'Arancioni' },
// ]
function filtraUtentiPerRegione(utenti, regione) {
  return utenti
    .filter(utente => utente.regione === regione)
    .map(utente => ({ nome: utente.nome, cognome: utente.cognome }));
}
const utentiVeneto = filtraUtentiPerRegione(utenti, 'veneto');
console.log(utentiVeneto);
