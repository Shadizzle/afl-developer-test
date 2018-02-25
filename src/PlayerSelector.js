import React, { Component } from 'react'
import PlayerCard from './PlayerCard'
import './PlayerSelector.css'

class PlayerSelector extends Component {
  render() {
    const {players} = this.props
    const playerCards = players.map((player) =>
      <PlayerCard player={player} />
    )
    return (
      <div className="PlayerSelector">
        {playerCards}
      </div>
    )
  }
}

export default PlayerSelector
