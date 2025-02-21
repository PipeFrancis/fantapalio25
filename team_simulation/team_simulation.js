// Importa l'array di giocatori dal modulo esterno
import { players } from '../data.js';

// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Inizializza Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Variabili globali per tenere traccia dei giocatori selezionati e dei crediti totali
let selectedPlayers = [];
let totalCost = 0;
const maxCredits = 30; // Massimo credito disponibile per il team

// Funzione per aggiungere un giocatore al team
function addPlayer(player) {
    // Verifica se il numero di giocatori selezionati ha raggiunto il limite di 5
    if (selectedPlayers.length >= 5) {
        alert("Hai già selezionato il numero massimo di giocatori.");
        return;
    }

    // Verifica se il giocatore è già presente nel team
    if (selectedPlayers.some(p => p.name === player.name)) {
        alert("Questo giocatore è già stato selezionato.");
        return;
    }

    // Verifica se il totale dei crediti supera il limite
    if (totalCost + player.cost > maxCredits) {
        alert("Non hai abbastanza crediti per selezionare questo giocatore.");
        return;
    }

    // Aggiungi il giocatore al team
    selectedPlayers.push(player);
    totalCost += player.cost;

    // Aggiorna l'interfaccia del team
    renderTeam();
    updateCreditsCounter();
}

// Funzione per rimuovere un giocatore dal team
function removePlayer(index) {
    const removedPlayer = selectedPlayers.splice(index, 1)[0];
    totalCost -= removedPlayer.cost;

    // Aggiorna l'interfaccia del team
    renderTeam();
    updateCreditsCounter();
}

// Funzione per aggiornare l'interfaccia del team
function renderTeam() {
    const teamContainer = document.getElementById('teamContainer');
    teamContainer.innerHTML = '';

    const validMessage = document.getElementById('validMessage');
    const signupLink = document.getElementById('signupLink');

    if (selectedPlayers.length === 0) {
        teamContainer.innerHTML = '<p><em>Team vuoto</em></p>';
        if (validMessage) {
            validMessage.remove();
        }
        if (signupLink) {
            signupLink.remove();
        }
    } else {
        if (selectedPlayers.length === 5) {
            if (!validMessage) {
                const newValidMessage = document.createElement('p');
                newValidMessage.textContent = 'VALIDO';
                newValidMessage.classList.add('valid-message');
                newValidMessage.style.color = 'green';
                newValidMessage.style.fontWeight = 'bold';
                newValidMessage.id = 'validMessage';
                teamContainer.parentNode.insertBefore(newValidMessage, teamContainer);

                const newSignupLink = document.createElement('a');
                newSignupLink.href = "#";
                newSignupLink.textContent = "Ricorda di iscrivere la squadra!";
                newSignupLink.id = 'signupLink';
                newSignupLink.classList.add('registrationlink');
                newValidMessage.parentNode.insertBefore(newSignupLink, newValidMessage.nextSibling);
            }
        } else {
            if (validMessage) {
                validMessage.remove();
            }
            if (signupLink) {
                signupLink.remove();
            }
        }

        selectedPlayers.forEach((player, index) => {
            const playerCard = document.createElement('div');
            playerCard.classList.add('player-card1', `cardclass${player.team}`);
            playerCard.innerHTML = `
                <p>${player.name}</p>
                <p>${player.team} &emsp; $${player.cost}</p>
            `;
            // Aggiungi un evento per rimuovere il giocatore cliccando sulla card
            playerCard.addEventListener('click', () => removePlayer(index));
            teamContainer.appendChild(playerCard);
        });
    }
}

// Funzione per aggiornare i crediti rimanenti
function updateCreditsCounter() {
    const creditsCounter = document.getElementById('creditsCounter');
    creditsCounter.textContent = `Hai ancora: ${maxCredits - totalCost}$`;
}

// Funzione per popolare la lista dei giocatori disponibili
function populatePlayersList() {
    const playersContainer = document.getElementById('playersContainer');
    playersContainer.innerHTML = '';

    players.forEach((player) => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card1', `cardclass${player.team}`);
        playerCard.innerHTML = `
            <p>${player.name}</p>
            <p>${player.team} &emsp; $${player.cost}</p>
        `;
        // Aggiungi un evento per aggiungere il giocatore cliccando sulla card
        playerCard.addEventListener('click', () => addPlayer(player));
        playersContainer.appendChild(playerCard);
    });

    // Aggiungi l'elemento per i crediti rimanenti
    const creditsCounter = document.createElement('p');
    creditsCounter.id = 'creditsCounter';
    creditsCounter.textContent = `Hai ancora: ${maxCredits}$`;
    playersContainer.parentNode.insertBefore(creditsCounter, playersContainer.nextSibling);
}

// Funzione per inviare il team a Firestore
async function submitTeam() {
    const teamName = document.getElementById('teamName').value;
    const email = document.getElementById('email').value;

    if (!teamName || !email) {
        alert("Per favore inserisci sia il nome della squadra che la tua email.");
        return;
    }

    const teamData = {
        teamName: teamName,
        email: email,
        players: selectedPlayers,
        totalCost: totalCost,
        dateSubmitted: new Date(),
    };

    try {
        const teamsRef = collection(db, "teams");
        await addDoc(teamsRef, teamData);
        alert("La tua squadra è stata inviata con successo!");
    } catch (e) {
        alert("Errore nell'aggiungere il documento: " + e);
    }
}

// Inizializza la pagina
window.onload = () => {
    populatePlayersList();

    // Aggiungi l'evento per il submit della squadra
    document.getElementById('submitTeamButton').addEventListener('click', submitTeam);
};
