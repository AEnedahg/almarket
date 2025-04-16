import React from 'react'

function Footer() {
  return (
    <footer className='bg-primary mt-20 w-screen absolute -bottom-400'>
      <div className='flex justify-between *:text-white'>
        <h4 className='text-white'>AL Market</h4>
        <p>AL Market&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer