// Component imports
import React from 'react'

// Other imports

interface Props {}

const Story: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className="flex flex-col items-center gap-1">
      <img
        className="h-16 w-16 rounded-full border-2 border-red-500 object-cover p-0.5"
        src="https://images.unsplash.com/photo-1613429547334-553cddaa781f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      />
      <h2 className="font-regular text-sm">johndoe</h2>
    </div>
  )
}

export default Story
