import React, { Component } from 'react'
import './PlayerCard.css'

class PlayerCard extends Component {
  render() {
    return (
      <div className="PlayerCard">
        <div className="PlayerCard-mugshot">
          
        </div>
        <div className="PlayerCard-description">
          <h2 className="PlayerCard-name">Lance <strong>Franklin</strong></h2>
          <h3 className="PlayerCard-club">Sydney Swans</h3>
        </div>
      </div>
    )
  }
}

export default PlayerCard
