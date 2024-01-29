import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
  const {currentUser} = useSelector ((state) => state.user)
  return (
    <div>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4 w-1/2 mx-auto'>
        <img src={currentUser.avatar} alt="profile" className='rounded-full h-24 w-24 oject-cover cursor-pointer self-center mt-2'/>
      <input type="text" placeholder='username' id="username"
       className='border p-3 rounded-lg'/>
          <input type="email" placeholder='email' id="email"
       className='border p-3 rounded-lg'/>
          <input type="text" placeholder='password' id="password"
       className='border p-3 rounded-lg'/>
       <button className='bg-slate-700 text-white rounded-lg
        p-3 hover:opacity-90 disabled:opacity-75'>UPDATE</button>
      </form>
      <div className="flex justify-between mt-5 w-1/2 mx-auto">
        <span className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}
