import './style.css';

const leaderboard = document.querySelector('.leaderboard');
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
    FORM.reset();
  });
})();

const refreshLeaderboard = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hu7RDeMDKj2AivBi1yhx/scores'
  );
  const scoreText = await response.text();
  const score = JSON.parse(scoreText);
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
