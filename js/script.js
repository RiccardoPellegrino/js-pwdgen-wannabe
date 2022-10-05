// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// poi chiedi la sua età
// Infine scrivi sulla pagina nomecognomecolorepreferito21 (dove il 21 è in questo caso l'età)

const nome = prompt('Come ti chiami');
const cognome = prompt('quale è il tuo cognome?');
const colorePreferito = prompt('quale è il tuo colore preferito?');
const eta = prompt('quanti anni hai?');

const saluto = ` <span class="red">Benvenuto ${nome}  ${cognome} !</span> 
il tuo colore preferito è il  ${colorePreferito} e hai ${eta} anni`;





const elemento = document.getElementById('saluto');
elemento.innerHTML = saluto;





console.log('Ciao ti chiami ' + nome +' '+ cognome, 'il tuo colore preferito è il' + colorePreferito +' hai ' + eta + ' anni');