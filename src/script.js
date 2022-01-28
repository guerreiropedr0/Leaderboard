import './style.css';
import { postData, getData } from './modules/postAndGet.js';

const UL = document.querySelector('.leaderboard');
const FORM = document.querySelector('form');
const NAME = FORM.querySelector('input');
const SCORE = FORM.querySelector('input[type="number"]');

FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  postData('hu7RDeMDKj2AivBi1yhx', NAME.value, SCORE.value);
  FORM.reset();
  FORM.focus();
});

document.getElementById('refresh').addEventListener('click', () => {
  UL.innerHTML = '';
  getData('hu7RDeMDKj2AivBi1yhx', UL);
});

window.onload = getData('hu7RDeMDKj2AivBi1yhx', UL);
