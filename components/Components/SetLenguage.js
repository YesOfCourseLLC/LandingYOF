import React, { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { useRouter } from 'next/router'

const SetLenguage = ({ enabled }) => {

    const [clicked, setClicked] = useState(false)
    const router = useRouter()

    useEffect(() => {
       if(clicked === false) {
            router.push('/', '/', { locale: 'en-US' })
        } else {
            router.push('/', '/', { locale: 'nl' })
        }   
    }, [clicked])
    
    return (
        <>
            <div>
                <Switch
                    checked={clicked}
                    onChange={() => setClicked(!clicked)}
                    className={`${enabled ? 'bg-white' : 'bg-sky-100/50'}
            relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >   
                    <p className={`${clicked && 'opacity-100'} opacity-0 absolute text-2xl ml-1`}>EN</p>
                    <span className="sr-only">Use setting</span>
                    <span
                        aria-hidden="true"
                        className={`${clicked ? 'translate-x-9 bg-black' : 'translate-x-0'}
              flex justify-center items-center pointer-events-none h-[34px] w-[34px] transform rounded-full bg-black shadow-lg ring-0 transition duration-200 ease-in-out`}
                    >
                        <figure>
                            <img src='/images/circle-24.png' />
                        </figure>
                    </span>
                    <p className={`${clicked && 'opacity-0'} opacity-100 absolute text-2xl ml-10`}>ES</p>
                </Switch>
            </div>
        </>
    )
}

export default SetLenguage