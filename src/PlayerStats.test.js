import React from 'react'
import ReactDOM from 'react-dom'
import PlayerStats from './PlayerStats'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PlayerStats />, div)
  ReactDOM.unmountComponentAtNode(div)
})
