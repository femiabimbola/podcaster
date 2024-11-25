import { SignUpButton } from '@clerk/nextjs'
import React from 'react'

const SignUp = () => {
  return (
    <div className='flex-center glassmorphism-auth h-screen w-full'>
      <SignUpButton />
    </div>
  )
}

export default SignUp