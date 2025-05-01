import React from 'react'

function Footer() {
  return (
    <footer className='bg-black p-4 w-full absolute -bottom-200 lg:-bottom-300 flex justify-between'>
      <h3 className='text-white'>AL Markets &copy;</h3>
      <p className='text-white'>{ new Date().getFullYear() }</p>
    </footer>
  )
}

export default Footer;