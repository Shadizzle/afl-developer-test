import React, { Component } from 'react'
import './StatCard.css'

class StatCard extends Component {
  render() {
    const { title, textColor, stats } = this.props
    const statFields = stats.map(([ name, value ], i) =>
      <div className="StatCard-statField" key={i}>
        <div className="StatCard-statName">
          {name}
        </div>
        <div className="StatCard-statValue" data-text-color={textColor}>
          {value}
        </div>
      </div>
    )

    return (
      <div className="StatCard">
        <h2 className="StatCard-statsTitle" data-text-color={textColor}>
          {title}
        </h2>
        <div className="StatCard-statCollection">
          {statFields}
        </div>
      </div>
    )
  }
}

export default StatCard
