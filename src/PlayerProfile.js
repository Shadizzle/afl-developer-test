import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import PlayerCard from './PlayerCard'
import PlayerStats from './PlayerStats'
import players from './players'
import './PlayerProfile.css'

class PlayerProfile extends Component {
  render() {
    const playerId = this.props.match.params.id
    const player = players[playerId]
    return (
      <div className="PlayerProfile">
        <div className="PlayerProfile-PlayerCard">
          <PlayerCard player={player} />
        </div>
        <div className="PlayerProfile-PlayerStats">
          <PlayerStats player={player} />
        </div>
      </div>
    )
  }
}

export default PlayerProfile
