import {
    fantateam_type,
    NORD, SUD, EST, WEST,
    fantateams
} from '../data.js';

document.addEventListener('DOMContentLoaded', function() {
    const teamCardsContainer = document.getElementById('teamCardsContainer');

    // Ordina le squadre per punteggio in ordine decrescente
    fantateams.sort((a, b) => b.tot_team - a.tot_team);

    // Ciclo attraverso le squadre e creo le schede
    fantateams.forEach((team, index) => {
        // Estrai i giocatori dal team e ordina in ordine decrescente in base a player.tot
        const players = [team.p1, team.p2, team.p3, team.p4, team.p5];
        players.sort((a, b) => b.tot - a.tot);

        const card = document.createElement('div');
        card.classList.add('team-card', `cardclasssoft${team.rione.name}`);

        const playerInfoHTML = `
            <div class="player-info"> ${players[0].name} (${players[0].tot})</div>
            <div class="player-info"> ${players[1].name} (${players[1].tot})</div>
            <div class="player-info"> ${players[2].name} (${players[2].tot})</div>
            <div class="player-info"> ${players[3].name} (${players[3].tot})</div>
            <div class="player-info"> ${players[4].name} (${players[4].tot})</div>
        `;

        card.innerHTML = `
            <div class="team-card-header">${index + 1}. ${team.name}</div>
            <div class="team-card-body">
                <div class="punteggio-info"><strong>${team.tot_team.toFixed(2)}</strong></div>
                ${playerInfoHTML}
                <div>${team.rione.name} (${team.rione.final_points})</div>
            </div>
        `;
        teamCardsContainer.appendChild(card);
    });
});
