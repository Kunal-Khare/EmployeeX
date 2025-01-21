import React from 'react'

function Login() {
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='border p-10 rounded-md'>
            <form>
                <input type="email" placeholder='Enter your email' />
                <input type="password" placeholder='Enter your password' />
            </form>
        </div>
    </div>
  )
}

export default Login