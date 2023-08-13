document.getElementById('gameForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const playerName = document.getElementById('playerName').value;
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('cols').value;
    const mines = document.getElementById('mines').value;

    // Make API call using fetch
    const apiUrl = `https://minesweeper.js.apprendre-est.fun/generate_grid.php?rows=${rows}&cols=${cols}&mines=${mines}`;
    const response = await fetch(apiUrl);
    const gridData = await response.json();

    // Display grid and game UI elements
    displayGameGrid(gridData);
    updateUI(playerName, mines);
});

// Function to display the game grid
function displayGameGrid(gridData) {
    // Your code to create and display the grid
}

// Function to update the UI
function updateUI(playerName, remainingMines) {
    // Your code to update UI elements
}
