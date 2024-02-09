
const rulesModalBox = document.getElementById('rulesBox')
const rulesButton = document.querySelector('.rulesBtn')
const playAgainBtn = document.querySelector('.playAgain');
const nextButton = document.querySelector(".nextBtn");
const closeRules = document.querySelector('.closeBtn');

rulesButton.addEventListener('click',() => {
    rulesModalBox.style.display = 'block';
})

closeRules.addEventListener('click',() => {
    rulesModalBox.style.display = 'none';
})
