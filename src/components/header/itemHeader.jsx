import useActiveLink from '@/app/hook/useActiveLink'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const ItemHeader = ({ item, key, styleCss }) => {
    const { active } = useActiveLink(item.href)
    const path = usePathname()
    console.log(styleCss);
    return (
        <li key={key} className={` sm:block hover:scale-110  duration-100 text-center px-2  py-2 ${active ? " bg-[#5f58fb] rounded-[100px] !text-white " : ''} ${path === '/' ? "text-black" : "text-white"} ${styleCss}`}>
            <Link href={item.href}>{item.name}</Link>
        </li>
    )
}

export default ItemHeader