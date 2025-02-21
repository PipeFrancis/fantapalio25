import { fantateams } from './data.js';

document.addEventListener("DOMContentLoaded", function() {
    const select = document.getElementById("teamDetails");
    const teamCardsContainer = document.getElementById("teamCardsContainer1");

    // Rimuovi eventuali opzioni esistenti
    select.innerHTML = '';

    // Sorta in ordine alfabetico
    fantateams.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    // Aggiungi nuove opzioni dal data.js
    fantateams.forEach(team => {
        const opt = document.createElement('option');
        opt.value = team.team_index;
        opt.textContent = team.name;
        select.appendChild(opt);
    });

    // Aggiungi un event listener per l'evento change sulla tendina
    select.addEventListener("change", function() {
        // Ottieni l'indice del team selezionato
        const teamIndex = parseInt(this.value);

        // Trova il team corrispondente nell'array fantateams
        const selectedTeam = fantateams.find(team => team.team_index === teamIndex);

        // Pulisci il contenitore delle carte
        teamCardsContainer.innerHTML = '';

        // Estrai i giocatori dal team e ordina in ordine decrescente in base a player.tot
        const players = [];
        for (let i = 1; i <= 5; i++) {
            players.push(selectedTeam['p' + i]);
        }
        players.sort((a, b) => b.tot - a.tot);

        // Aggiungi le schede per i giocatori p1, p2, p3, p4, p5 del team selezionato
        players.forEach(player => {
            // Crea una nuova scheda
            const card = document.createElement('div');
            card.classList.add('team-card1', `cardclass${player.team}`);
            // Usa encodeURIComponent per gestire caratteri speciali nel nome
            card.innerHTML = `
                <h3>${player.name}</a></h3>
                <p>#${player.number}</p>
                <p>Prezzo: ${player.cost}</p>
                <p>G1: ${player.g1}</p>
                <p>G2: ${player.g2}</p>
                <p>G3: ${player.g3}</p>
                <p>Semifinale: ${player.semi}</p>
                <p>Tiro da 3: ${player.td3}</p>
                <p>Finale: ${player.final}</p>
                <p class="total">Totale: <span class="totalpointsindex">${player.tot}</span></p>
            `;
            teamCardsContainer.appendChild(card);
        });

        // Aggiungi la scheda per il rione
        const rioneCard = document.createElement('div');
        rioneCard.classList.add('team-card1', `cardclass${selectedTeam.rione.name}`);
        rioneCard.innerHTML = `
            <h3>Rione: ${selectedTeam.rione.name}</h3>
            <p class="total">Punti finali: ${selectedTeam.rione.final_points}</p>
        `;
        teamCardsContainer.appendChild(rioneCard);

        // Aggiungi la scheda per i totali del team
        const totalCard = document.createElement('div');
        totalCard.classList.add('team-card1');
        totalCard.innerHTML = `
            <h3>Totale squadra</h3>
            <p>Prezzo totale: ${selectedTeam.total_cost}</p>
            <p>G1: ${selectedTeam.tot_g1}</p>
            <p>G2: ${selectedTeam.tot_g2}</p>
            <p>G3: ${selectedTeam.tot_g3}</p>
            <p>Semifinale: ${selectedTeam.tot_semi}</p>
            <p>Tiro da 3: ${selectedTeam.tot_td3}</p>
            <p>Finale: ${selectedTeam.tot_final}</p>
            <p class="total">Totale: <span class="totalpointsindex">${selectedTeam.tot_team}</span></p>
        `;
        totalCard.classList.add('bold-card');
        teamCardsContainer.appendChild(totalCard);
    });
});
