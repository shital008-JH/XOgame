const cells = document.querySelectorAll('.cell');
const playerXInput = document.getElementById('playerX');
const playerOInput = document.getElementById('playerO');
const playerXName = document.getElementById('playerXName');
const playerOName = document.getElementById('playerOName');
const scoreX = document.getElementById('scoreX');
const scoreO = document.getElementById('scoreO');
const resetButton = document.getElementById('reset');

let board = Array(9).fill(null);
let currentPlayer = 'X';
let score = { X: 0, O: 0 };

function updateNames() {
    playerXName.textContent = playerXInput.value;
    playerOName.textContent = playerOInput.value;
}

playerXInput.addEventListener('input', updateNames);
playerOInput.addEventListener('input', updateNames);

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const index = cell.dataset.index;
        if (board[index] || checkWinner()) return;
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
        if (checkWinner()) {
            updateScore();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

resetButton.addEventListener('click', resetGame);

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

function updateScore() {
    const winner = checkWinner();
    if (winner) {
        score[winner]++;
        scoreX.textContent = score.X;
        scoreO.textContent = score.O;
        setTimeout(resetBoard, 1000);
    }
}

function resetBoard() {
    board.fill(null);
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}

function resetGame() {
    resetBoard();
    score = { X: 0, O: 0 };
    scoreX.textContent = score.X;
    scoreO.textContent = score.O;
    playerXInput.value = 'Player X';
    playerOInput.value = 'Player O';
    updateNames();
}
