import React, { Component } from 'react'
import PlayerCard from './PlayerCard'
import PlayerStats from './PlayerStats'
import players from './players'
import './PlayerProfile.css'

class PlayerProfile extends Component {
  render() {
    const player = this.props.player || players[this.props.match.params.id];
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
