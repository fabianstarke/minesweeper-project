'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];
  for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    var row = [];
    for (var colIndex = 0; colIndex < numberOfColumns; colIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

generatePlayerBoard(3, 3);
/*
const generateBombBoard = (numberOfRows, numberOfColumns, numberofBombs) => {
  let board = [];
  for (let boardIndex = 0; boardIndex = board.numberOfRows; boardIndex++ ){
    let row = [];
    for (let rowIndex = 0, rowIndex = row.numberOfColumns; rowIndex++){
      row.push(null)
    }
    board.push(row)
  }
const numberOfBombsPlaced = 0

while (numberOfBombsPlaced < numberofBombs) {
  const randomRowIndex = Math.floor(Math.random() * numberOfRows);
  const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
  board[randomRowIndex][randomColumnIndex] = 'B';
  numberOfBombsPlaced = numberofBombs++;
  //An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
}
    return board;
};
/*
const printBoard = board => {
  board.map(row => row.join(' | ')).join('\n');
  console.log(board.map(row => row.join(' | ')).join('\n'));
}

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board:');
printBoard(bombBoard);
*/