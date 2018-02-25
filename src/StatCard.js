import React, { Component } from 'react'
import './StatCard.css'

class StatCard extends Component {
  render() {
    const { title, stats } = this.props
    const statFields = stats.map(([ name, value ], i) =>
      <div className="StatCard-statField" key={i}>
        <div className="StatCard-statName">
          {name}
        </div>
        <div className="StatCard-statValue">
          {value}
        </div>
      </div>
    )

    return (
      <div className="StatCard">
        <h2 className="StatCard-statsTitle">{title}</h2>
        <div className="StatCard-statCollection">
          {statFields}
        </div>
      </div>
    )
  }
}

export default StatCard
