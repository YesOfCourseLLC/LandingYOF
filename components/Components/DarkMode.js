import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import CircleMenu from '../Components/Menu'
import SetLenguage from './SetLenguage'

const DarkMode = ({ locale, enabled, setEnabled }) => {

  return (
    <>
      <div>
        <Switch
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
          className={`${enabled ? 'bg-white' : 'bg-sky-100/50'}
            relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-9 bg-black' : 'translate-x-0 bg-white'}
              flex justify-center items-center pointer-events-none h-[34px] w-[34px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
          >
            {
              enabled ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
              </svg>
              )
                : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>)
            }
          </span>
        </Switch>
      </div>
      <SetLenguage enabled={enabled} />
      <div className='w-full flex justify-end items-center overflow-x-clip pr-8'>
        <CircleMenu locale={locale} />
      </div>
    </>
  )
}

export default DarkMode