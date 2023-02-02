import { useState } from 'react';
import './App.css';
import Dice from './Dice';

function App() {
  const [gameDice, setGameDice] = useState(resetGame())

  function resetGame() {
    let gameArr = []

    for (let i = 0; i < 10; i++) {
      gameArr.push({
        value: Math.floor(Math.random() * 6) + 1,
        chosen: false,
        id: i + 1
      })
    }
    return gameArr
  }

  function ChoosenRolls(id) {
    setGameDice(gameDice.map((dice) => {
      if (dice.id === id) {
        return { ...dice, chosen: !dice.chosen }
      }
      return { ...dice }
    }))
  }

  function rollDice() {
    setGameDice(gameDice.map((dice) => {
      if (!dice.chosen) {
        return { ...dice, value: Math.floor(Math.random() * 6) + 1 }
      }
      return { ...dice }
    }))
  }

  return (
    <div className="App">
      <div className='game'>
        <div className='instructions'>
          <h1>Tenzies</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
        <div className='diceContainer'>
          {gameDice.map(({ id, chosen, value }) =>
            <Dice
              onChose={() => ChoosenRolls(id)}
              chosen={chosen}
              value={value}
            />
          )}
        </div>
        <button onClick={rollDice} className='roolBtn'>Roll</button>
      </div>
    </div>
  );
}

export default App;
