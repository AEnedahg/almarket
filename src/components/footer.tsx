import React from 'react'

function Footer() {
  return (
    <footer className='bg-black mt-20 w-screen absolute -bottom-750 lg:-bottom-1250 p-4'>
      <div className='flex justify-between *:text-white'>
        <h4 className='text-white'>AL Market</h4>
        <p>AL Market&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer