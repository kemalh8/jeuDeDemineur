document.getElementById('gameForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const playerName = document.getElementById('playerName').value;
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('cols').value;
    const mines = document.getElementById('mines').value;


      // Validate input values
      if (!playerName || isNaN(rows) || isNaN(cols) || isNaN(mines) || rows <= 0 || cols <= 0 || mines < 0) {
        alert('Please provide valid input values.');
        return;
    }


    // Fetch data using the fetchData function from gameLogic.js
    const gridData = await fetchData(rows, cols, mines);

    // Display grid and game UI elements
    displayGameGrid(gridData, cols); // Call the function from uiFunctions.js
    updateUI(playerName, mines); // Call the function from uiFunctions.js
    // You might also want to attach click event listeners to cells here


      // Attach click event listeners to cells
      const cells = document.querySelectorAll('.cell');
      cells.forEach(cell => {
          cell.addEventListener('click', () => handleCellClick(cell, gridData, cols));
      });

});



// Handle the click event on a cell
function handleCellClick(cell, gridData, cols) {
    const cellValue = cell.dataset.value;

    if (cellValue === '1') {
        // Handle mine click: game over
        console.log('Mine clicked! Game over.');
        // Optionally, reveal all cells to show the player the game state
    } else {
        // Handle non-mine cell reveal
        const adjacentMines = calculateAdjacentMines(cell, gridData, cols); // Call the function from gameLogic.js
        if (adjacentMines === 0) {
            // Reveal adjacent cells
            revealAdjacentCells(cell, gridData, cols); // Call the function from gameLogic.js
        } else {
            // Update cell appearance with adjacent mines count
            cell.textContent = adjacentMines;
        }

        // Check for game win condition (all non-mine cells revealed)
        const allCells = document.querySelectorAll('.cell');
        const revealedCells = Array.from(allCells).filter(c => c.textContent !== '');
        if (revealedCells.length === (allCells.length - mines)) {
            console.log('Congratulations! You won the game!');
        }
    }
}



