import React, { Component } from 'react'
import './PlayerBanner.css'

class PlayerBanner extends Component {
  render() {
    return (
      <div className="PlayerBanner">
        <div className="PlayerBanner-mugshot">
          
        </div>
        <div className="PlayerBanner-description">
          <h2 className="PlayerBanner-name">Lance <strong>Franklin</strong></h2>
          <h3 className="PlayerBanner-club">Sydney Swans</h3>
        </div>
      </div>
    )
  }
}

export default PlayerBanner
