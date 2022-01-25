import './style.css';
let leaderboard = document.querySelector('.leaderboard');
const FORM = document.querySelector('form');
const NAME = FORM.querySelector('input');
const SCORE = FORM.querySelector('input[type="number"]');

(() => {
  FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hu7RDeMDKj2AivBi1yhx/scores',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: NAME.value,
          score: SCORE.value,
        }),
      }
    );
  });
})();

const refreshLeaderboard = async () => {
  let response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hu7RDeMDKj2AivBi1yhx/scores'
  );
  let scoreText = await response.text();
  let score = JSON.parse(scoreText);
  score.result.forEach((player) => {
    leaderboard.innerHTML += `<tr>
      <td>${player.user}: ${player.score}</td>
    </tr>`;
  });
};

document.getElementById('refresh').addEventListener('click', () => {
  leaderboard.innerHTML = '';
  refreshLeaderboard();
});
