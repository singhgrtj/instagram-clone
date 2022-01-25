// Component imports
import React from 'react'
import { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Feed from '../components/Feed'

// Other imports

interface Props {}

const Home: NextPage<Props> = (props) => {
  const {} = props

  return (
    <div className="min-h-screen bg-zinc-50 pb-40">
      <Navbar />
      <Feed />
    </div>
  )
}

export default Home
