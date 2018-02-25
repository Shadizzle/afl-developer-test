import React, { Component } from 'react'
import './PlayerStats.css'

class PlayerStats extends Component {
  render() {
    const {player} = this.props
    return (
      <div className="PlayersStats">
        <div className="PlayerStats-totalStats">
          <h2></h2>
        </div>
        <div className="PlayerStats-seasonStats">
          <h2></h2>
        </div>
      </div>
    )
  }
}

export default PlayerStats
