import React, { Component } from 'react'
import PlayerSelector from './PlayerSelector'
import players from './players'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayerSelector players={players} />
      </div>
    );
  }
}

export default App
