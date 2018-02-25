import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PlayerSelector from './PlayerSelector'
import PlayerProfile from './PlayerProfile'
import players from './players'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => (
            <PlayerSelector players={players} />
          )}/>
          <Route path="/players/:id"
                 component={PlayerProfile} />
        </div>
      </Router>
    );
  }
}

export default App
