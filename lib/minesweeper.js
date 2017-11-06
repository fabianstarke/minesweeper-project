class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, colIndex) {
    this._board.flipTile(rowIndex, colIndex);

    if (this._board.playerBoard[rowIndex][colIndex] === 'B') {
      console.log('The Game is Over');
      this._board.print();
    } else if (!this._board.hasSafeTiles()) {
      console.log('Congratulations You Won');
    } else {
      console.log('Current Board:');
      this._board.print();
    }
  }
}

class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfColumns, numberOfRows);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  get playerBoard() {
    return this._playerBoard;
  }

  flipTile(rowIndex, colIndex) {
    if (this._playerBoard[rowIndex][colIndex] !== ' ') {
      console.log('This tile has already been flipped');
      return;
    } else if (this._bombBoard[rowIndex][colIndex] === 'B') {
      this._playerBoard[rowIndex][colIndex] = 'B';
    } else {
      this._playerBoard[rowIndex][colIndex] = this.getNumberOfNeighborBombs(rowIndex, colIndex);
      this._numberOfTiles--;
    }
  }

  getNumberOfNeighborBombs(rowIndex, colIndex) {
    const neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;

    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColIndex = colIndex + offset[1];
      if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColIndex >= 0 && neighborColIndex < numberOfColumns) {
        if (this._bombBoard[neighborRowIndex][neighborColIndex] === 'B') {
          numberOfBombs++;
        }
      }
    });
    return numberOfBombs;
  }

  hasSafeTiles() {
    return this._numberOfTiles !== this._numberOfBombs;
  }

  print() {
    console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
  }

  static generatePlayerBoard(numberOfRows, numberOfColumns) {
    let board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      let row = [];
      for (let colIndex = 0; colIndex < numberOfColumns; colIndex++) {
        row.push(' ');
      }
      board.push(row);
    }
    return board;
  }

  static generateBombBoard(numberOfRows, numberOfColumns, numberofBombs) {
    let board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      let row = [];
      for (let colIndex = 0; colIndex < numberOfColumns; colIndex++) {
        row.push(null);
      }
      board.push(row);
    }
    let numberOfBombsPlaced = 0;

    while (numberOfBombsPlaced < numberofBombs) {
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      if (board[randomRowIndex][randomColumnIndex] !== 'B') {
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
      }
    }
    return board;
  }
}

/*const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];
    for (let colIndex = 0; colIndex < numberOfColumns; colIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};*/

/*console.log(generatePlayerBoard(2,3));*/

/*const generateBombBoard = (numberOfRows, numberOfColumns, numberofBombs) => {
  let board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];
    for (let colIndex = 0; colIndex < numberOfColumns; colIndex++) {
      row.push(null)
    }
    board.push(row)
  }
let numberOfBombsPlaced = 0;

while (numberOfBombsPlaced < numberofBombs) {
  let randomRowIndex = Math.floor(Math.random() * numberOfRows);
  let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
  if(board[randomRowIndex][randomColumnIndex] !== 'B')
    {board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  }
};
    return board;
};*/

/*const getNumberOfNeighborBombs = (bombBoard, rowIndex, colIndex) => {
  const neighborOffsets = [
    [-1,-1],
    [-1,0],
    [-1,1],
    [0,-1],
    [0,1],
    [1,-1],
    [1,0],
    [1,1],
  ];
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  const numberOfBombs = 0;

  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColIndex = colIndex + offset[1];
    if(neighborRowIndex >= 0
      && neighborRowIndex < numberOfRows
      && neighborColIndex >= 0
      && neighborColIndex < numberOfColumns){
      if(bombBoard[neighborRowIndex][neighborColIndex] ==='B'){
        numberOfBombs++;
        }
      }
    });
  return numberOfBombs
};*/

/*const flipTile = (playerBoard, bombBoard, rowIndex, colIndex) => {
  if(playerBoard[rowIndex][colIndex] !== ' '){
    console.log('This tile has already been flipped')
    return
  } else if(bombBoard[rowIndex][colIndex] === 'B'){
      playerBoard[rowIndex][colIndex] = 'B'
    } else{playerBoard[rowIndex][colIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, colIndex);}

};*/
/*console.log(generateBombBoard(2,3,4));*/
/*
let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board:');
printBoard(bombBoard);
flipTile(playerBoard, bombBoard, 2,1)
console.log('Updated Player Board');
printBoard(playerBoard);*/