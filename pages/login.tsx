// Component imports
import React from 'react'
import { NextPage } from 'next'
import LoginForm from '../components/LoginForm'

// Other imports

interface Props {}

const Login: NextPage<Props> = (props) => {
  const {} = props

  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-zinc-50">
      <LoginForm />
    </div>
  )
}

export default Login
