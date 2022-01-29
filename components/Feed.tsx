// Component imports
import React from 'react'
import Stories from '../components/Stories'
import FeedSuggestions from './FeedSuggestions'
import Post from './Post'

// Other imports

interface Props {}

const Feed: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className="relative mx-auto flex max-w-5xl gap-5 sm:mt-4 sm:px-4">
      <div className="overflow-y-scroll lg:w-2/3">
        <Stories />
        <Post />
      </div>
      <div className="hidden w-1/3 lg:block">
        <FeedSuggestions />
      </div>
    </div>
  )
}

export default Feed
