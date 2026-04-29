// Données des matchs
const matches = [
  { home: 'Real Madrid', away: 'Barcelona', score: '2-1', date: '2026-04-25' },
  { home: 'Manchester City', away: 'Liverpool', score: '3-0', date: '2026-04-26' },
  { home: 'PSG', away: 'Marseille', score: '1-1', date: '2026-04-27' },
  { home: 'Bayern Munich', away: 'Borussia Dortmund', score: '2-2', date: '2026-04-28' },
];

// Charger les matchs au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  loadMatches();
  setupFormHandler();
  setupCardClickHandler();
});

// Fonction pour charger et afficher les matchs
function loadMatches() {
  const matchList = document.getElementById('matchList');
  matchList.innerHTML = '';

  matches.forEach(match => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>${match.home} vs ${match.away}</strong><br>
      Score: <span style="color: #2a5298; font-weight: bold;">${match.score}</span><br>
      Date: ${match.date}
    `;
    matchList.appendChild(listItem);
  });
}

// Fonction pour gérer la soumission du formulaire
function setupFormHandler() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nom = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    if (nom && email && message) {
      alert(`Merci ${nom} ! Votre message a été envoyé.\nNous vous recontacterons à ${email}`);
      form.reset();
    } else {
      alert('Veuillez remplir tous les champs !');
    }
  });
}

// Fonction pour gérer les clics sur les cartes d'équipes
function setupCardClickHandler() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', function() {
      const teamName = this.textContent;
      alert(`Vous avez sélectionné : ${teamName}`);
    });
  });
}

// Fonction pour ajouter un nouveau match (optionnel)
function addMatch(home, away, score, date) {
  matches.push({ home, away, score, date });
  loadMatches();
}