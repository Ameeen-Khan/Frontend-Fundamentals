const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");

let timeLeft = 10;
let intervalId = null;

startBtn.addEventListener("click", () => {
    // Prevent multiple intervals
    if (intervalId !== null) return;

    intervalId = setInterval(() => {
        if (timeLeft === 0) {
            clearInterval(intervalId);
            intervalId = null;
            timerDisplay.textContent = "Time's up!";
            return;
        }

        timeLeft--;
        timerDisplay.textContent = timeLeft;
    }, 1000);
});
