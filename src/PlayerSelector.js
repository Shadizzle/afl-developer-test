import React, { Component } from 'react'
import PlayerCard from './PlayerCard'
import './PlayerSelector.css'

class PlayerSelector extends Component {
  render() {
    return (
      <div className="PlayerSelector">
        <PlayerCard />
      </div>
    )
  }
}

export default PlayerSelector
