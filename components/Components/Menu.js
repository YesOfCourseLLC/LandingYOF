import { Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router';
import { Fragment } from 'react'
import en from '../../locales/en'
import es from '../../locales/es'

export default function CircleMenu({ locale }) {
    const router = useRouter()
    const len = locale === 'en-US' ? en : es;
    return (
        <div className="top-6 absolute w-auto text-right">
            <Menu as="div" className="relative inline-block text-left z-20">
                <div className='z-20 relative'>
                    <Menu.Button className="inline-flex items-center justify-center bg-primary-blue rounded-full h-12 w-12 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-10 h-10">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="flex flex-col justify-center absolute z-10 -top-16 -left-28 h-56 w-56 origin-top-right divide-y divide-gray-100 rounded-full bg-primary-blue shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="border-none pl-4 py-1 mt-8">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`text-white group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {len.home}
                                    </button>
                                )}
                            </Menu.Item>
                            </div>
                            <div className="border-none pl-5 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`text-white group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {len.services}
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="border-none pl-10 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                    onClick={() => router.push('/bookme')}
                                        className={`text-white group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        Book Me
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}