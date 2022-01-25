// Component imports
import React from 'react'
import { NextPage } from 'next'
import Navbar from '../components/Navbar'

// Other imports

interface Props {}

const Home: NextPage<Props> = (props) => {
  const {} = props

  return (
    <div className="bg-gray-100">
      <Navbar />
    </div>
  )
}

export default Home
