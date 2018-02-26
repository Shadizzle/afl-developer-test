import React from 'react'
import ReactDOM from 'react-dom'
import PlayerProfile from './PlayerProfile'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PlayerProfile />, div)
  ReactDOM.unmountComponentAtNode(div)
})
