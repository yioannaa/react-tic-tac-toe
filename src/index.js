import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const Square = (props)=>{
  return (
    <
    button className="square"
    onClick={()=> {}}
    >
      {props.value}
      </button>
  );
};

const Board = ()=>{
  const initialSquares = [
    null, null, null,
    null, null, null,
    null, null, null
  ];
  const [squares, setSquares] = useState(initialSquares);
  const renderSquare = (i)=>{
    return(
      <Square value={squares[i]}/>
    );
  };
  return (
    <div style={{
      backgroundColor: 'skyblue',
      margin: 10,
      padding:20,
    }}>
      Board
      <div className="boardRow">
      {renderSquare()}{renderSquare()}{renderSquare()}
      </div>
      <div className="boardRow">
      {renderSquare()}{renderSquare()}{renderSquare()}
      </div>
      <div className="boardRow">
      {renderSquare()}{renderSquare()}{renderSquare()}
      </div>
    </div>
  );
};

const Game = () => {
  return (
    <div className="game">
      Game
      <Board />
    </div>
  );
};

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
