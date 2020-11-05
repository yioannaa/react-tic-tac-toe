import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const Square = (props)=>{
  const [value, setValue] = useState(null);
  return (
    <
    button className="square"
    onClick={()=> setValue('X')}
    >
      {value}
      </button>
  );
};

const Board = ()=>{
  const renderSquare = (i)=>{
    return(
      <Square/>
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
