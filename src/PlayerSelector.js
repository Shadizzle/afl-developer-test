import React, { Component } from 'react'
import PlayerBanner from './PlayerBanner'
import './PlayerSelector.css'

class PlayerSelector extends Component {
  render() {
    return (
      <div className="PlayerSelector">
        <PlayerBanner />
      </div>
    )
  }
}

export default PlayerSelector
