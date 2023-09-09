import useActiveLink from '@/app/hook/useActiveLink'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const ItemHeader = (item, key) => {
    const { active } = useActiveLink(item.item.href)
    const path = usePathname()
    return (
        <li className={`hover:scale-110  duration-100 text-center ${active ? "px-[15px] py-[10px] bg-[#5f58fb] rounded-[100px] text-white " : ''} ${path === '/' ? "text-black" : "text-white"}`}>
            <Link href={item.item.href}>{item.item.name}</Link></li>
    )
}

export default ItemHeader