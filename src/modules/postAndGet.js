import populate from './populate.js';

export const postData = (id, player, score) => {
  fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: player,
        score,
      }),
    },
  );
};

export const getData = async (id, leaderboard) => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`,
  );
  const dataText = await response.text();
  const parsedData = JSON.parse(dataText);
  populate(parsedData, leaderboard);
};