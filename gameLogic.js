// gameLogic.js

function revealCell(event) {
    const cell = event.target;
    const cellValue = cell.dataset.value;
    
    if (cellValue === '1') {
        // Handle mine click: game over
        console.log('Mine clicked! Game over.');
        // Optionally, reveal all cells to show the player the game state
    } else {
        // Handle non-mine cell reveal
        const adjacentMines = calculateAdjacentMines(cell);
        if (adjacentMines === 0) {
            // Reveal adjacent cells
            revealAdjacentCells(cell);
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

function calculateAdjacentMines(cell, gridData, cols) {
    const rowIndex = parseInt(cell.dataset.row);
    const colIndex = parseInt(cell.dataset.col);
    let adjacentMines = 0;

    for (let i = rowIndex - 1; i <= rowIndex + 1; i++) {
        for (let j = colIndex - 1; j <= colIndex + 1; j++) {
            if (i >= 0 && i < gridData.length && j >= 0 && j < cols) {
                if (gridData[i * cols + j] === '1') {
                    adjacentMines++;
                }
            }
        }
    }

    return adjacentMines;
}

function revealAdjacentCells(cell, gridData, cols) {
    const rowIndex = parseInt(cell.dataset.row);
    const colIndex = parseInt(cell.dataset.col);

    for (let i = rowIndex - 1; i <= rowIndex + 1; i++) {
        for (let j = colIndex - 1; j <= colIndex + 1; j++) {
            if (i >= 0 && i < gridData.length && j >= 0 && j < cols) {
                const index = i * cols + j;
                const adjacentCell = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);
                
                if (adjacentCell && adjacentCell.textContent === '' && gridData[index] === '0') {
                    adjacentCell.click();
                }
            }
        }
    }
}



// kemal you've to adapt this code to avoid repetition
// gameLogic.js

// Function to calculate the number of adjacent mines for a cell
/*function calculateAdjacentMines(cellRow, cellCol, gridData, cols) {
    let adjacentMines = 0;

    for (let i = cellRow - 1; i <= cellRow + 1; i++) {
        for (let j = cellCol - 1; j <= cellCol + 1; j++) {
            if (i >= 0 && i < gridData.length && j >= 0 && j < cols) {
                if (gridData[i * cols + j] === '1') {
                    adjacentMines++;
                }
            }
        }
    }

    return adjacentMines;
}*/

// Function to check if the game is won or lost
function checkGameStatus(gridData, cols) {
    const allCells = document.querySelectorAll('.cell');
    const revealedCells = Array.from(allCells).filter(cell => cell.textContent !== '');

    const totalCells = gridData.length;
    const totalMines = gridData.filter(cell => cell === '1').length;
    const totalRevealed = revealedCells.length;

    if (totalRevealed === (totalCells - totalMines)) {
        return 'win';
    } else {
        return 'ongoing';
    }
}


// Fetch data from the API provided
async function fetchData(rows, cols, mines) {
    try{
        const apiUrl = `https://minesweeper.js.apprendre-est.fun/generate_grid.php?rows=${rows}&cols=${cols}&mines=${mines}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('API call failed.');
        }
        const gridData = await response.json();
        return gridData;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        alert('An error occurred while fetching data. Please try again later.');
        throw error; // Rethrow the error to handle it at a higher level if needed
    }
   
}


// Export functions if needed
//export { calculateAdjacentMines, checkGameStatus };
