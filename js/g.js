const gameArea = document.querySelector('.game-area');
const scoreDisplay = document.getElementById('score');
let score = 0;

function createBall() {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.left = Math.random() * (gameArea.offsetWidth - 50) + 'px';
    ball.style.top = '-50px'; // Mulai dari atas layar
    ball.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`; // Warna acak

    gameArea.appendChild(ball);

    let speed = Math.random() * 3 + 1; // Kecepatan jatuh acak

    function fall() {
        let currentTop = parseInt(ball.style.top);
        ball.style.top = currentTop + speed + 'px';

        if (currentTop > gameArea.offsetHeight) {
            ball.remove(); // Hilangkan bola jika mencapai dasar
        } else {
            requestAnimationFrame(fall);
        }
    }

    fall();

    ball.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = score;
        ball.remove();
    });
}

setInterval(createBall, 1000); // Buat bola setiap 1 detik

