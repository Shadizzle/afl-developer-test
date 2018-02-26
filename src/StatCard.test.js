import React from 'react'
import ReactDOM from 'react-dom'
import StatCard from './StatCard'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const testStats = [
    ["notARealStat", 42]
  ]
  ReactDOM.render(
      <StatCard title="Test" textColor="red" stats={testStats} />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
