import {
    player_type,
    players
} from '../data.js';

document.addEventListener('DOMContentLoaded', function() {
    const playerCardsContainer = document.getElementById('playerCardsContainer');

    // Ordina i giocatori in ordine decrescente in base al campo 'tot'
    const sortedPlayers = players.slice().sort((a, b) => b.tot - a.tot);

    // Ciclo attraverso i giocatori ordinati e creo le schede
    sortedPlayers.forEach((player, index) => {
        const card = document.createElement('div');
        card.classList.add('player-card',`cardclass${player.team}`);
        card.innerHTML = `
            <h3>${index + 1}. ${player.name}</h3>
            <p>#${player.number}</p>
            <p>Prezzo: ${player.cost}</p>
            <p class="total">${player.tot.toFixed(2)}</p>
            <p>G1: ${player.g1}</p>
            <p>G2: ${player.g2}</p>
            <p>G3: ${player.g3}</p>
            <p>Semifinale: ${player.semi}</p>
            <p>Tiro da 3: ${player.td3}</p>
            <p>Finale: ${player.final}</p>
        `;
        playerCardsContainer.appendChild(card);
    });
});
