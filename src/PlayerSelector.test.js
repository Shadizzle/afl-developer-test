import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import PlayerSelector from './PlayerSelector'
import players from './players'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Router>
      <PlayerSelector players={players} />
    </Router>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
