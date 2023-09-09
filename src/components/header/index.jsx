"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../public/Baycungban.png'
import logoLight from '../../public/BaycungbanLight.png'
import vietnam from '../../public/vietnam.svg'
import unitedState from '../../public/united-states.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ItemHeader from './itemHeader'

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
    // const { active } = useActiveLink(href)
    const path = usePathname()
    return (
        <div className={`w-full  flex justify-between ${path === '/' ? "mt-10" : "bg-[#4D46FA] mt-0 py-5"}`}>
            <div className=' max-w-[1230px] mx-auto w-full flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <Image src={path === '/' ? logo : logoLight} alt='logo' />
                    <Image src={vietnam} alt='vi' className={`rounded-full !h-5 ${language === 'vi' ? 'outline-2 outline !text-[#4D46FA] border-[#4D46FA]' : ''} `} onClick={() => setLanguage('vi')} />
                    <Image src={unitedState} alt='us' className={`rounded-full !h-5 ${language === 'en' ? 'outline-2 outline !text-[#4D46FA] border-[#4D46FA]' : ''} `} onClick={() => setLanguage('en')} />
                </div>
                <ul className='flex gap-8 tracking-[0.7px] font-[500] items-center'>

                    {ItemNavBars.map((item, index) => (
                        <ItemHeader key={index} item={item} />

                    ))}
                </ul>
                <div className={`inline-flex items-center justify-center gap-[10px] px-[16px] py-[10px] relative  rounded-[12px] ${path === '/' ? "bg-[#4d46fa]" : 'bg-white'}`}>
                    <div className={`relative w-fit mt-[-1.00px] [font-family:'SVN-Biennale-SemiBold',_Helvetica] font-semibold  text-[14px] tracking-[0] leading-[normal] ${path === '/' ? 'text-white' : "text-[#4d46fa]"}`}>
                        Booking now
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Header