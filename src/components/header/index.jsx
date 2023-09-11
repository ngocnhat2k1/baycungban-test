"use client"

import Image from 'next/image'
import React, { use, useEffect, useState } from 'react'
import logo from '../../public/Baycungban.png'
import logoLight from '../../public/BaycungbanLight.png'
import vietnam from '../../public/vietnam.svg'
import unitedState from '../../public/united-states.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ItemHeader from './itemHeader'
import useActiveLink from '@/app/hook/useActiveLink'

const ItemNavBars = [
    {
        name: 'Promotion',
        href: '#',
    },
    {
        name: 'Flight Schedule',
        href: '/flight-schedule',
    },
    {
        name: 'About us',
        href: '#',
    },
    {
        name: 'Payment Guide',
        href: '#',
    },
]

const Header = () => {
    const [language, setLanguage] = useState('vi')
    const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false)
    const path = usePathname()
    const refMenuMobile = React.useRef(null)


    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isOpenMenuMobile && refMenuMobile.current && !refMenuMobile.current.contains(e.target)) {
                setIsOpenMenuMobile(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    })

    return (
        <div className={`w-full  flex justify-between ${path === '/' ? "mt-10" : "bg-[#4D46FA] mt-0 py-5"}`}>
            <div className='  lg:max-w-[1230px] md:max-w-[800px] xs:max-w-md max-w-xs mx-auto w-full flex justify-between items-center'>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <Link href={'/'}>
                        <Image src={path === '/' ? logo : logoLight} alt='logo' />
                    </Link>
                    <Image src={vietnam} alt='vi' className={`rounded-full !h-5 ${language === 'vi' ? 'outline-2 outline !text-[#4D46FA] border-[#4D46FA]' : ''} `} onClick={() => setLanguage('vi')} />
                    <Image src={unitedState} alt='us' className={`rounded-full !h-5 ${language === 'en' ? 'outline-2 outline !text-[#4D46FA] border-[#4D46FA]' : ''} `} onClick={() => setLanguage('en')} />
                </div>
                <ul className='flex gap-2 md:gap-5 tracking-[0.7px] font-[500] items-center sm:px-8'>

                    {ItemNavBars.map((item, index) => (
                        <ItemHeader key={index} item={item} />

                    ))}
                </ul>
                <div className={`hidden sm:inline-flex h-fit  items-center justify-center gap-[10px] lg:px-4 lg:py-4 md:px-3 md:py-[10px] relative  rounded-[12px] ${path === '/' ? "bg-[#4d46fa]" : 'bg-white'}`}>
                    <div className={`relative w-max mt-[-1.00px] cursor-pointer font-semibold lg:text-[14px] md:text-[12px] tracking-[0] leading-[normal] ${path === '/' ? 'text-white' : "text-[#4d46fa]"}`}>
                        Booking now
                    </div>
                </div>
                <div onClick={() => { setIsOpenMenuMobile(!isOpenMenuMobile) }} className='sm:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5h16Zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3h16Zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3h16Z" /></g></svg>
                </div>
                {
                    isOpenMenuMobile && (
                        <div ref={refMenuMobile} className='absolute top-0 left-0 w-full h-fit bg-white z-50 overflow-hidden'>
                            <div className='flex flex-col items-center min-w-[70vw] fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden bg-[#f4f2f9] dark:bg-dark/90 dark:text-light rounded-2xl gap-2 z-10 overflow-y-hidden shadow-[0px_4px_30px_#4d47fa2a] justify-center '>
                                <div className='w-full flex justify-end p-4 pb-0' onClick={() => setIsOpenMenuMobile(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="#4d46fa" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z" /></svg>
                                </div>
                                <ul className='hover:bg-primary hover:text-white mx-auto px-8 ease-in hover:opacity-75 text-primary pb-10 font-bold gap-4 flex flex-col'>
                                    {ItemNavBars.map((item, index) => (
                                        <li key={index} className={` px-2 py-1 ${path === item.href ? "bg-[#5f58fb] rounded-[100px] text-white " : ""}`}>{item.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )

                }

            </div>

        </div>
    )
}

export default Header