// document.addEventListener('DOMContentLoaded', function() {
//     const table = document.getElementById('playerStats');
//     const csvFilePath = 'statistiche.csv'; // Assicurati di specificare il percorso corretto del tuo file CSV

//     fetch(csvFilePath)
//         .then(response => response.text())
//         .then(data => {
//             const rows = data.split('\n');
//             rows.forEach((row, index) => {
//                 // Salta l'intestazione se presente (prima riga)
//                 if (index === 0) return;
                
//                 const cells = row.split(',');
//                 const tr = document.createElement('tr');
//                 cells.forEach(cell => {
//                     const td = document.createElement('td');
//                     td.textContent = cell.trim(); // Rimuove spazi bianchi intorno al testo
//                     tr.appendChild(td);
//                 });
//                 table.appendChild(tr);
//             });
//         })
//         .catch(error => console.error('Errore nel caricamento del file CSV', error));
// });
