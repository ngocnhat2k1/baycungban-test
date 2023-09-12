import Header from '@/components/header'
import Image from 'next/image'
import background from '../../public/background.png'

export const metadata = {
    title: 'Bay cung ban',
    description: 'Bay cung ban',
}
export default function RootLayout({ children }) {
    return (
        <>
            {children}
        </>
    )
}
