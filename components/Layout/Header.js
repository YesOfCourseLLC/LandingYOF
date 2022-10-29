import React from 'react'
import DarkMode from '../Components/DarkMode'


const Header = ({ locale, enabled, setEnabled }) => {
  console.log(enabled)
  return (
    <header className={`${enabled && 'bg-black'} flex justify-between items-center h-24`}>
      <nav className={`${enabled === true ? 'bg-black shadow-dark-brand' : 'bg-white'} transition ease-in-out delay-150 fixed flex justify-between w-full pl-8 items-center dark:bg-black shadow-md h-24 z-10 gap-x-2`}>
        <DarkMode locale={locale} enabled={enabled} setEnabled={setEnabled} />
      </nav>
    </header>
  )
}

export default Header