import React, { Component } from 'react'
import StatCard from './StatCard'
import './PlayerStats.css'

function sumProperty(collection, prop) {
  return collection.reduce((acc, val) => acc + val[prop], 0)
}

function maxProperty(collection, prop) {
  return collection.reduce((acc, val) => Math.max(acc, val[prop]), 0)
}

class PlayerStats extends Component {
  render() {
    const {player} = this.props
    // NOTE: Using arrays of tuples (also arrays) instead of objects
    // because it preserves order.
    const totalStats = [
      [
        'disposals',
        sumProperty(player.games, "handballs") + sumProperty(player.games, "kicks")
      ],
      ['handballs', sumProperty(player.games, "handballs")],
      ['kicks', sumProperty(player.games, "kicks")],
      ['tackles', sumProperty(player.games, "tackles")],
      ['marks', sumProperty(player.games, "marks")],
      ['score', sumProperty(player.games, "score").toFixed(1)]
    ]
    const bestStats = [
      [
        'disposals',
        player.games.reduce((acc, game) => {
          return Math.max(acc, game.handballs + game.kicks)
        }, 0)
      ],
      ['handballs', maxProperty(player.games, "handballs")],
      ['kicks', maxProperty(player.games, "kicks")],
      ['tackles', maxProperty(player.games, "tackles")],
      ['marks', maxProperty(player.games, "marks")],
      ['score', maxProperty(player.games, "score")]
    ]
    return (
      <div className="PlayersStats">
        <div className="PlayerStats-totalStats">
          <StatCard title="Total" stats={totalStats} />
        </div>
        <div className="PlayerStats-bestStats">
          <StatCard title="Best of Season" stats={bestStats} />
        </div>
      </div>
    )
  }
}

export default PlayerStats
