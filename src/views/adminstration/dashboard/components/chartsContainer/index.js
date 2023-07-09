import React from 'react'
import LineChart from './charts/LineChart'
import PieChart from './charts/PieChart'

const ChartContainer = () => {
  return (
    <div className="row">
        <LineChart/>
        <PieChart/>
    </div>
  )
}

export default ChartContainer
