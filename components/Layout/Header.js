import React from 'react'
import DarkMode from '../Components/DarkMode'


const Header = ({ locale, enabled, setEnabled }) => {
  return (
    <header className={`${enabled && 'bg-black'} flex justify-between items-center h-24`}>
      <nav className={`${enabled && 'bg-black shadow-dark-brand'} fixed flex justify-between w-full bg-white pl-8 items-center dark:bg-black shadow-gray-200 shadow-md h-24 z-10 gap-x-2`}>
        <DarkMode locale={locale} enabled={enabled} setEnabled={setEnabled} />
      </nav>
    </header>
  )
}

export default Header