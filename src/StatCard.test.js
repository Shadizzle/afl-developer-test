import React from 'react'
import ReactDOM from 'react-dom'
import StatCard from './StatCard'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<StatCard />, div)
  ReactDOM.unmountComponentAtNode(div)
})
