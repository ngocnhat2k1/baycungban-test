import useActiveLink from '@/app/hook/useActiveLink'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const ItemHeader = (item, key) => {
    const { active } = useActiveLink(item.item.href)
    const path = usePathname()
    return (
        <li className={`hidden sm:block hover:scale-110  duration-100 text-center px-1  py-2 ${active ? " bg-[#5f58fb] rounded-[100px] text-white " : ''} ${path === '/' ? "text-black" : "text-white"}`}>
            <Link href={item.item.href}>{item.item.name}</Link></li>
    )
}

export default ItemHeader