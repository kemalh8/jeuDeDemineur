

//function displayGameGrid
function displayGameGrid(gridData, cols) {
    const gameContainer = document.createElement('div');
    gameContainer.classList.add('game-container');

    for (let i = 0; i < gridData.length; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.value = gridData[i]; // Store cell value in dataset

        // Calculate data-row and data-col values
        const rowIndex = Math.floor(i / cols);
        const colIndex = i % cols;
        cell.dataset.row = rowIndex;
        cell.dataset.col = colIndex;

        // Attach click event listener to reveal cell
        cell.addEventListener('click', () => revealCell(cell, gridData, cols));

        gameContainer.appendChild(cell);
    }

    document.body.appendChild(gameContainer);
}

// Function to update the UI
function updateUI(playerName, remainingMines) {
    const playerInfoElement = document.getElementById('playerInfo');
    const remainingMinesElement = document.getElementById('remainingMines');

    // Set text content to display player info and remaining mines count
    playerInfoElement.textContent = `Player: ${playerName}`;
    remainingMinesElement.textContent = `Remaining Mines: ${remainingMines}`;
}


