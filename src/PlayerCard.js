import React, { Component } from 'react'
import './PlayerCard.css'

class PlayerCard extends Component {
  render() {
    return (
      <div className="PlayerCard">
        <div className="PlayerCard-banner">
          <img className="PlayerCard-clubBadge"
               src="/assets/Swans-rev.svg"
               alt="The club's badge" />
          <img className="PlayerCard-photo"
               src="/assets/240399.png"
               alt="A waist-up shot of player" />
          <span className="PlayerCard-guernseyNumber">23</span>
        </div>
        <div className="PlayerCard-description">
          <h2 className="PlayerCard-name">
            Lance <span className="PlayerCard-lastName">Franklin</span>
          </h2>
          <h3 className="PlayerCard-club">Sydney Swans</h3>
        </div>
      </div>
    )
  }
}

export default PlayerCard
