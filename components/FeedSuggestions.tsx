// Component imports
import React from 'react'
import ProfileSuggestion from './ProfileSuggestion'

// Other imports

interface Props {}

const FeedSuggestions: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-5">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1613429547334-553cddaa781f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          />
          <div>
            <h1 className="text-sm font-semibold">johndoe</h1>
            <h2 className="text-sm font-normal text-gray-500">John Doe</h2>
          </div>
        </div>
        <a href="#" className="text-sm font-semibold text-blue-500">
          Cambiar
        </a>
      </div>
      <h2 className="text-sm font-semibold text-gray-400">
        Sugerencias para ti
      </h2>
      <div className="mt-4">
        <ProfileSuggestion />
        <ProfileSuggestion />
        <ProfileSuggestion />
        <ProfileSuggestion />
        <ProfileSuggestion />
      </div>
    </div>
  )
}

export default FeedSuggestions
