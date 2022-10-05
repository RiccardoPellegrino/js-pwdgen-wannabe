// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// poi chiedi la sua età
// Infine scrivi sulla pagina nomecognomecolorepreferito21 (dove il 21 è in questo caso l'età)

const nome = prompt('Come ti chiami');
const cognome = prompt('quale è il tuo cognome?');
const colorePreferito = prompt('quale è il tuo colore preferito?');
const eta = prompt('quanti anni hai?');

const password = `<span class="red">${nome}${cognome}${colorePreferito}${eta}</span>`;
const fraseDaInserire =`La tua password generata automaticamente è: ` 

const frase=document.getElementById('frase');

const elemento = document.getElementById('password');

elemento.innerHTML = password;

frase.innerHTML=fraseDaInserire;
