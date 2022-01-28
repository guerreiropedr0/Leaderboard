export default (players, leaderboard) => {
  players.result.sort((previousPlayer, nextPlayer) => nextPlayer.score - previousPlayer.score);
  players.result.forEach((player) => {
    leaderboard.innerHTML += `
      <li>${player.user}:<span> ${player.score}</span></li>`;
  });
};