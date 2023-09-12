import { usePathname } from 'next/navigation'

// ----------------------------------------------------------------------

export default function useActiveLink(path) {
    const pathname = usePathname()
    // const checkPath = path.startsWith('#')

    const currentPath = path === '/' ? '/' : `${path}`

    const normalActive = pathname === currentPath
    // || (!checkPath && asPath === currentPath);

    const deepActive = (pathname || '').includes(currentPath)
    // || (!checkPath && asPath.includes(currentPath));

    return {
        active: normalActive,
        // isExternalLink: path.includes('http'),
    }
}
