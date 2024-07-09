
import '../styles/App.css';

//set up square component with passing props.value and props.onSquareClick
// eslint-disable-next-line react/prop-types
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
