import React, { useState } from 'react'
import DarkMode from '../Components/DarkMode'


const Header = ({ enabled, setEnabled }) => {
  return (
    <header className={`${enabled && 'bg-black'} flex justify-between items-center h-24`}>
      <nav className={`${enabled && 'bg-black shadow-cyan-900 shadow-md'} fixed flex justify-between w-full bg-white pl-8 items-center dark:bg-black h-24 shadow-gray-200 shadow-md z-10`}>
        <DarkMode enabled={enabled} setEnabled={setEnabled} />
      </nav>
    </header>
  )
}

export default Header