import React, { Component } from 'react'
import './PlayerCard.css'

class PlayerCard extends Component {
  render() {
    const {player} = this.props
    return (
      <div className="PlayerCard">
        <div className="PlayerCard-banner" data-club={player.club}>
          <img className="PlayerCard-clubBadge"
               src="/assets/Swans-rev.svg"
               alt="The club's badge" />
          <img className="PlayerCard-photo"
               src={player.imageUrl}
               alt="A waist-up shot of the player" />
          <span className="PlayerCard-guernseyNumber">{player.jumperNumber}</span>
        </div>
        <div className="PlayerCard-description">
          <h2 className="PlayerCard-name">
            {player.firstname} <span className="PlayerCard-lastName">{player.lastname}</span>
          </h2>
          <h3 className="PlayerCard-club">{player.club}</h3>
        </div>
      </div>
    )
  }
}

export default PlayerCard
