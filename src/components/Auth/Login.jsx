import React from 'react'

function Login() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-900'>

        <div className='border  p-10 rounded-md border-gray-300'>
            <form className='flex flex-col gap-4 w-80 bg-gradient'>
                <input className='text-white outline-none bg-transparent border-2 border-blue-400 text-xl py-3 px-5 rounded-full placeholder:text-gray-350' type="email" placeholder='Enter your email' />
                <input className='text-white outline-none bg-transparent border-2 border-blue-400 text-xl py-3 px-5 rounded-full placeholder:text-gray-350' type="password" placeholder='Enter your password' />
            </form>
            <div className='flex justify-center'>
            <button className= 'mt-7 text-white outline-none  bg-emerald-600 text-xl py-1 px-7 rounded-full placeholder:text-white'>
                Log in
            </button>
            </div>
        </div>
    </div>
  )
}

export default Login;