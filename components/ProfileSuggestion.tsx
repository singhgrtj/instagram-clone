// Component imports
import React from 'react'

// Other imports

interface Props {}

const ProfileSuggestion: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className="mt-2 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <img
          className="h-10 w-10 rounded-full  object-cover"
          src="https://images.unsplash.com/photo-1613429547334-553cddaa781f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        />
        <div>
          <h1 className="text-sm font-semibold">johndoe</h1>
          <h2 className="text-xs font-normal text-gray-500">
            Sugerencia para ti
          </h2>
        </div>
      </div>
      <a href="#" className="text-xs font-semibold text-blue-500">
        Seguir
      </a>
    </div>
  )
}

export default ProfileSuggestion
