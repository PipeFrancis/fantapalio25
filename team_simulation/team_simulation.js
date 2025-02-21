// Import Firebase functions (Firebase v9+ modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAwYuAbzv7NesCtrT7LgQag3C9h3U4v-2w",
  authDomain: "fantapalio25test.firebaseapp.com",
  projectId: "fantapalio25test",
  storageBucket: "fantapalio25test.appspot.com",
  messagingSenderId: "257433039752",
  appId: "1:257433039752:web:b0a4055ea0a61a7169403d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Import the players data (from data.js)
import { players } from '../data.js';

// Variables to track selected players and total cost
let selectedPlayers = [];
let totalCost = 0;
const maxCredits = 30; // Max budget available for the team

// Function to add a player to the team
function addPlayer(player) {
    if (selectedPlayers.length >= 5) {
        alert("You have already selected the maximum number of players.");
        return;
    }

    if (selectedPlayers.some(p => p.name === player.name)) {
        alert("This player is already selected.");
        return;
    }

    if (totalCost + player.cost > maxCredits) {
        alert("You don't have enough credits to select this player.");
        return;
    }

    // Add the player
    selectedPlayers.push(player);
    totalCost += player.cost;

    // Update team interface
    renderTeam();
    updateCreditsCounter();
}

// Function to remove a player from the team
function removePlayer(index) {
    const removedPlayer = selectedPlayers.splice(index, 1)[0];
    totalCost -= removedPlayer.cost;

    // Update team interface
    renderTeam();
    updateCreditsCounter();
}

// Function to render the team on the page
function renderTeam() {
    const teamContainer = document.getElementById('teamContainer');
    teamContainer.innerHTML = '';

    // Show "VALID" when team is complete
    if (selectedPlayers.length === 5) {
        if (!document.getElementById('validMessage')) {
            const validMessage = document.createElement('p');
            validMessage.textContent = 'VALIDO';
            validMessage.classList.add('valid-message');
            validMessage.style.color = 'green';
            validMessage.style.fontWeight = 'bold';
            validMessage.id = 'validMessage';
            teamContainer.parentNode.insertBefore(validMessage, teamContainer);
        }

        // Add the button for submitting the team
        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit Team';
        submitButton.addEventListener('click', submitTeam);
        teamContainer.parentNode.appendChild(submitButton);
    }

    // Display selected players
    selectedPlayers.forEach((player, index) => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card', `cardclass${player.team}`);
        playerCard.innerHTML = `
            <p>${player.name}</p>
            <p>${player.team} &emsp; $${player.cost}</p>
        `;
        playerCard.addEventListener('click', () => removePlayer(index));
        teamContainer.appendChild(playerCard);
    });
}

// Function to update credits counter
function updateCreditsCounter() {
    const creditsCounter = document.getElementById('creditsCounter');
    creditsCounter.textContent = `You have ${maxCredits - totalCost} credits left`;
}

// Function to populate the players list on the page
function populatePlayersList() {
    const playersContainer = document.getElementById('playersContainer');
    playersContainer.innerHTML = '';

    players.forEach((player) => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card', `cardclass${player.team}`);
        playerCard.innerHTML = `
            <p>${player.name}</p>
            <p>${player.team} &emsp; $${player.cost}</p>
        `;
        playerCard.addEventListener('click', () => addPlayer(player));
        playersContainer.appendChild(playerCard);
    });

    // Add the credits counter below players list
    const creditsCounter = document.createElement('p');
    creditsCounter.id = 'creditsCounter';
    creditsCounter.textContent = `You have ${maxCredits} credits`;
    playersContainer.appendChild(creditsCounter);
}

// Function to submit the team to Firestore
async function submitTeam() {
    // Get team name and email from user input
    const teamName = prompt("Enter your team name:");
    const email = prompt("Enter your email address:");

    if (!teamName || !email) {
        alert("Please enter both a team name and email.");
        return;
    }

    // Prepare team data to be saved
    const teamData = {
        teamName: teamName,
        email: email,
        players: selectedPlayers,
        totalCost: totalCost,
        dateSubmitted: new Date(),
    };

    try {
        // Save team data to Firestore
        const teamsRef = collection(db, "teams");
        await addDoc(teamsRef, teamData);
        alert("Your team has been submitted successfully!");
    } catch (e) {
        alert("Error adding document: " + e);
    }
}

// Initialize the page by populating the players list
window.onload = () => {
    populatePlayersList();
};
