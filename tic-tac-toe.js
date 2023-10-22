let board = ['','','','','','','','',''];
let currentPlayer = 'X';

window.onload = function() {
    let squares = document.querySelectorAll('#board div');
    squares.forEach((square, index) => {
        square.classList.add('square');

        square.addEventListener('click', function() {
            if (board[index] === '') {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                board[index] = currentPlayer;

                if (checkWinner(board)) {
                    document.getElementById('status').textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    document.getElementById('status').classList.add('you-won');
                }

                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });

        square.addEventListener('mouseover', function() {
            square.classList.add('hover');
        });
        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');
        });
    });

    document.querySelector('.btn').addEventListener('click', function() {
        squares.forEach((square) => {
            square.textContent = '';
            square.classList.remove('X', 'O', 'hover');
        });
        board = ['','','','','','','','',''];
        document.getElementById('status').textContent = 'Move your mouse over a square and click to play an X or an O.';
        document.getElementById('status').classList.remove('you-won');
    });
};

function checkWinner(board) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombinations.some(combination =>
        board[combination[0]] !== '' &&
        board[combination[0]] === board[combination[1]] &&
        board[combination[0]] === board[combination[2]]
    );
}
