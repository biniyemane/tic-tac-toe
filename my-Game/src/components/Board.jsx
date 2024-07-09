
import Square from './Square';
import calculateWinner from '../calculateWinner';

// eslint-disable-next-line react/prop-types
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    //check if there is winner or there is value in current square
    //if that is the case don't reteunr anything
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    
    // eslint-disable-next-line react/prop-types
    const nextSquares = squares.slice(); 
    /*nextSquares represent the new state of the board 
    after a player has made a move.
    It's an array of 9 elements, where each element is either 'X', 'O', or null.*/
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }
  //calculate winner and update status of game
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board;
