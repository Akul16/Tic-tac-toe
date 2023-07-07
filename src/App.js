import './App.css';
import React,{useEffect, useState}  from 'react'
import Square from './Square';
const initialState = ["","","","","","","","",""]

function App() {
  const [gameState,setGameState] = useState(initialState);
  const [isXChance,setISXChance] = useState(false);

  const onSquareClicked = (index) => {
    let strings = Array.from(gameState);
    strings[index]= isXChance ? "X" : "0"
    setGameState(strings);
    setISXChance(!isXChance);
  }

  const clearGame = () => {
    setGameState(initialState)
}
useEffect(() => {
    let winner = checkWinner();
    if (winner) {
        clearGame();
        alert(`Ta da ! ${winner} won the Game !`)
    }
}, [gameState])

const checkWinner = () => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
        }
    }
    return null;
}

  return (
    <div className="app-header">
      <h1 className="header-text">tic tac toe</h1>
      <div className="row jc-center">
        <Square className="b-bottom-right" gameState={gameState[0]} onclick ={ () => {onSquareClicked(0)}}/>
        <Square className="b-bottom-right" gameState={gameState[1]} onclick={  () => {onSquareClicked(1)}}/>
        <Square className="b-bottom" gameState={gameState[2]} onclick={  () => {onSquareClicked(2)}}/>
      </div>

      <div className="row jc-center}">
        <Square className="b-bottom-right" gameState={gameState[3]} onclick={  () =>{onSquareClicked(3)}}/>
        <Square className="b-bottom-right" gameState={gameState[4]} onclick={  () => {onSquareClicked(4)}}/>
        <Square className="b-bottom" gameState={gameState[5]} onclick={ () => {onSquareClicked(5)}}/>
      </div>

      <div className="row jc-center}">
        <Square className="b-right" gameState={gameState[6]} onclick={  () => {onSquareClicked(6)}}/>
        <Square className="b-right" gameState={gameState[7]} onclick={  () => {onSquareClicked(7)}}/>
        <Square gameState={gameState[8]} onclick={ () => {onSquareClicked(8)}}/>
      </div>
      <button className="clear-button" onClick = {() =>setGameState(initialState)} >clear</button>
    </div>
    );
}

export default App;
