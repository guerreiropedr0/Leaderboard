export default (players, leaderboard) => {
  players.result.sort(
    (previousPlayer, nextPlayer) => nextPlayer.score - previousPlayer.score,
  );
  players.result.forEach((player) => {
    leaderboard.innerHTML += `
      <li class="username">${player.user}:<span> ${player.score}</span></li>`;
  });
};
