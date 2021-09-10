let cells = document.querySelectorAll('.row > div');

console.log(cells);

let isPlayer1 = false;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', gameOver);
    cells[i].addEventListener('click', cellClicked);
    cells[i].addEventListener('click', winIdentifier);
}

function cellClicked () {   
    if (isPlayer1) {
        goPlayer2();
    } else {
        goPlayer1();
    }
}

function goPlayer1 () {
    event.target.textContent = 'X';
    isPlayer1 = true;
}

function goPlayer2 () {
    event.target.textContent = 'O';
    isPlayer1 = false;
}

let game = '';
let winner = '';

function winIdentifier () {
    if ((cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X') || (cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X') || (cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X') || (cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X') || (cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X') || (cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X') || (cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X') || (cells[2].textContent === 'X' && cells[4].textContent === 'X' && cells[6].textContent === 'X')) {   
        winner = 'Player 1';
        announceWinner(winner);
        return game = 'over';
    } else if ((cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O') || (cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O') || (cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O') || (cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O') || (cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O') || (cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O') || (cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O') || (cells[2].textContent === 'O' && cells[4].textContent === 'O' && cells[6].textContent === 'O')) {
        winner = 'Player 2';
        announceWinner(winner);
        return game = 'over';
    } else if ((cells[0].textContent === 'X' || cells[0].textContent === 'O') && (cells[1].textContent === 'X' || cells[1].textContent === 'O') && (cells[2].textContent === 'X' || cells[2].textContent === 'O') && (cells[3].textContent === 'X' || cells[3].textContent === 'O') && (cells[4].textContent === 'X' || cells[4].textContent === 'O') && (cells[5].textContent === 'X' || cells[5].textContent === 'O') && (cells[6].textContent === 'X' || cells[6].textContent === 'O') && (cells[7].textContent === 'X' || cells[7].textContent === 'O') && (cells[8].textContent === 'X' || cells[8].textContent === 'O')) {
        winner = 'Tie';
        announceWinner(winner);
        return game = 'over';
    } 
}

function announceWinner (winner) {
    if (winner === 'Player 1') {
        document.getElementById('gameOver').innerHTML = 'Congratulations! Player 1 wins!';
    } else if (winner === 'Player 2') {
        document.getElementById('gameOver').innerHTML = 'Congratulations! Player 2 wins!';
    } if (winner === 'Tie') {
        document.getElementById('gameOver').innerHTML = 'It\'s a tie!';
    } 
}

function gameOver () {
    if (game === 'over') {
        location.reload();   
        }
    }
