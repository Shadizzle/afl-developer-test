import React from 'react'
import ReactDOM from 'react-dom'
import PlayerStats from './PlayerStats'
import players from './players'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PlayerStats player={players[0]} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
