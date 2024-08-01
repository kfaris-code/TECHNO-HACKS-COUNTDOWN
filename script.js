let countdown;
let isRunning = false;
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let countdownTime = 60 * 5; // Set the countdown time in seconds (5 minutes)

function updateDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    countdown = setInterval(() => {
        countdownTime--;
        updateDisplay(countdownTime);
        if (countdownTime <= 0) {
            clearInterval(countdown);
            isRunning = false;
            alert('Time is up!'); // Replace with sound notification if needed
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
    isRunning = false;
}

function resetTimer() {
    clearInterval(countdown);
    countdownTime = 60 * 5; // Reset to initial countdown time
    updateDisplay(countdownTime);
    isRunning = false;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay(countdownTime); // Initialize display
