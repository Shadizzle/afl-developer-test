import React from 'react'
import ReactDOM from 'react-dom'
import PlayerProfile from './PlayerProfile'
import players from './players'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PlayerProfile player={players[0]} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
