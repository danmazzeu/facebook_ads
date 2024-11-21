const countdownElement = document.getElementById('countdown');
const timeElement = document.getElementById('time');
const url = "https://melhorenvio.com.br/p/NqJnd8uDqy";

let timeLeft = 3;

function updateCountdown() {
    if (timeLeft <= 0) {
        window.location.href = url;
    }
    
    timeLeft--;
    timeElement.textContent = timeLeft;
}

const countdownInterval = setInterval(updateCountdown, 1000);