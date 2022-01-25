// Component imports
import React from 'react'
import Stories from '../components/Stories'
import Post from './Post'

// Other imports

interface Props {}

const Feed: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className="mx-auto max-w-2xl overflow-y-scroll sm:mt-4">
      <Stories />
      <Post />
    </div>
  )
}

export default Feed
