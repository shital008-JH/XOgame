# Tic-Tac-Toe Web App

A simple and interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript.  
Supports two players with customizable player names, score tracking, and reset functionality.

---

## Features

- Two-player gameplay (Player X and Player O) with the ability to enter custom player names.
- Visual 3x3 grid game board with clickable cells.
- Real-time score tracking for both players.
- Automatic detection of a winner.
- Option to reset the current board or reset the entire game (scores and player names).
- Responsive and clean UI with hover effects and smooth transitions.

---


## How to Use

1. **Open `index.html`** in your browser.
2. **Enter player names** (optional) for Player X and Player O in the input fields.
3. Click on any empty cell to place the current player's mark (X or O).
4. The game automatically switches turns between players.
5. When one player wins (3 marks in a horizontal, vertical, or diagonal row), their score increments.
6. The board resets automatically after a short delay to start a new round.
7. Use the **Reset Game** button to clear scores, reset player names to default, and start fresh.

---

## Project Structure

├── index.html # Main HTML structure of the app
├── styles.css # CSS styling for layout and appearance
├── script.js # JavaScript logic for game mechanics
└── README.md # This documentation file

---

## Technologies Used

- **HTML5** for markup and structure
- **CSS3** for styling and layout with grid and transitions
- **JavaScript (ES6+)** for game logic, DOM interaction, and event handling

---

## Code Highlights

- The game board is represented as an array of 9 elements internally in `script.js`.
- Winning combinations are predefined to check for wins efficiently.
- Score is tracked dynamically and updated in the UI.
- Player names are interactive and update immediately when changed.
- Reset functionality allows for clearing both the current game board and the ongoing scores.

---

## Author

Developed by : Shital Singh

---

## License

This project is for educational purposes. Feel free to use and modify it for your personal projects.

---

Feel free to customize and enhance this template as needed for your presentation !
