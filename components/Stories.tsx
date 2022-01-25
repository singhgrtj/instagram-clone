// Component imports
import React from 'react'
import Story from './Story'

// Other imports

interface Props {}

const name: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className="flex max-w-3xl items-center space-x-4 overflow-x-scroll border-b border-gray-300 bg-white px-4 py-3 sm:border">
      <Story />
      <Story />
    </div>
  )
}

export default name
