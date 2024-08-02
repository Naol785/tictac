let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const statusDisplay = document.getElementById("status");

function makeMove(index) {
    if (board[index] !== "" || !gameActive) {
        return;
    }

    board[index] = currentPlayer;
    document.getElementById(`cell${index}`).innerText = currentPlayer;

    if (checkWin()) {
        statusDisplay.innerText = `${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    if (board.every(cell => cell !== "")) {
        statusDisplay.innerText = `It's a tie!`;
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerText = `It's ${currentPlayer}'s turn`;
}

function checkWin() {
    return winningConditions.some(condition => {
        const [a, b, c] = condition;
        return board[a] === currentPlayer && board[a] === board[b] && board[a] === board[c];
    });
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    statusDisplay.innerText = `It's ${currentPlayer}'s turn`;

    for (let i = 0; i < 9; i++) {
        document.getElementById(`cell${i}`).innerText = "";
    }
}

statusDisplay.innerText = `It's ${currentPlayer}'s turn`;
