import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PlayerCard from './PlayerCard'
import './PlayerSelector.css'

class PlayerSelector extends Component {
  render() {
    const {players} = this.props
    const playerCards = players.map((player, i) =>
      <Link to={"/players/" + i} key={i}
            className="PlayerSelector-PlayerCard">
        <PlayerCard player={player} />
      </Link>
    )
    return (
      <div className="PlayerSelector">
        {playerCards}
      </div>
    )
  }
}

export default PlayerSelector
