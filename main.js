
const choiceButtons = document.querySelectorAll('.choice-btn');
const choiceDiv = document.getElementById('choiceContainer');
const resultDiv = document.getElementById('resultContainer')
const userPickedHand = document.querySelector('.choice-btn.youPicked ');
const cpuPicked = document.querySelector('.choice-btn.pcChose');
const actualResult = document.getElementById('resultDisplay');
const finalResultTxt = document.getElementById('resultText');
let userScore = document.getElementById('userScore')
let pcScore = document.getElementById('cpuScore')
const rulesModalBox = document.getElementById('rulesBox')
const rulesBtn = document.getElementById('rulesButton')
const playAgainBtn = document.querySelector('.playAgain');
const nextButton = document.querySelector(".nextBtn");
const closeRules = document.querySelector('.closeBtn')


const userPicked = (chosenHand) => {
    console.log('You Picked ' + chosenHand);
    choiceDiv.style.display = 'none';
    resultDiv.style.display = 'flex';
    rulesModalBox.style.display = 'none';
    document.querySelector('.pcSelected').style.display = 'none';
    // user picked hand display
    userPickedHand.innerHTML = `<div class=" choice-btn ${chosenHand}">
    <img src="assets/${chosenHand}.png" alt="${chosenHand}" > </div>`;
    actualResult.style.display = 'none';
    compPicked(chosenHand);

}

const compPicked = (userPicked) => {
    let options = ['rock', 'paper', 'scissor']
    let compHand = options[Math.floor(Math.random() * 3)];
    console.log('pc picked ', compHand);
    setTimeout(() => {
        cpuPicked.innerHTML = `<div class=" choice-btn ${compHand}">
        <img src="assets/${compHand}.png" alt="${compHand}" > </div>`;
        document.querySelector('.pcSelected').style.display = 'block';
        actualResult.style.display = 'block';
        let result = checkWinner(userPicked, compHand);
        finalResultTxt.textContent = result;
        updateScores(result);
    }, 1000)
}


const checkWinner = (player, computer) => {
    if ((player === 'rock' && computer === 'scissor') ||
        (player === 'scissor' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')) {
        return 'YOU WIN';
    }
    else if (player === computer) {
        return "TIE UP ";
    }
    else {
        return 'YOU LOST';
    }
};

let userPoints = parseInt(localStorage.getItem('userPoints')) || 0;
let compPoints = parseInt(localStorage.getItem('compPoints')) || 0;

// Function to update scores in local storage
function updateLocalStorageScores() {
    localStorage.setItem('userPoints', userPoints);
    localStorage.setItem('compPoints', compPoints);
}

function resetScores() {
    userPoints = 0;
    compPoints = 0;
    updateScoreDisplay();
}

function updateScoreDisplay() {
    userScore.textContent = userPoints;
    pcScore.textContent = compPoints;
}

// Call updateScoreDisplay initially to set scores from local storage
updateScoreDisplay();

function updateScores(result) {
    if (result === 'YOU WIN') {
        userPoints += 1
        nextButton.style.display = 'block';
        userPickedHand.classList.toggle("winnerAnimation");

    } else if (result === 'YOU LOST') {
        compPoints += 1
        cpuPicked.classList.toggle('winnerAnimation')
    }
    updateScoreDisplay();
    updateLocalStorageScores();
}

// add event listeners to the buttons

playAgainBtn.addEventListener('click', () => {
    window.location.reload();
});

rulesBtn.addEventListener('click', () => {
    rulesModalBox.style.display = 'block'
})
closeRules.addEventListener('click',()=>{
    rulesModalBox.style.display='none'
})




