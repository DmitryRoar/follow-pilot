'use client'

import { useScrollDirection } from 'hooks/direction.hook'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { GeneralSvgNames, SvgIcon } from 'ui/svg-icon'

const LINKS = [
  { text: 'Instagram', href: '/' },
  { text: 'Tiktok', href: '/tiktok' },
  { text: 'youtube', href: '/youtube' },
  { text: 'faq', href: '/faq', icon: 'faq' },
  { text: 'support', href: '/support', icon: 'faq' },
]

export const Header = () => {
  const scrollDirection = useScrollDirection()
  const pathname = usePathname()
  const [isWhiteBg, setIsWhiteBg] = useState([])

  useEffect(() => {
    const whiteBgStorage = JSON.parse(
      localStorage.getItem('white-bg') as string
    )
    if (whiteBgStorage) {
      setIsWhiteBg(whiteBgStorage.includes(pathname))
    }
  }, [pathname])

  return (
    <header
      className={`fixed p-4 shadow-lg flex items-center justify-between w-full ${
        isWhiteBg ? 'text-dark' : 'text-white'
      } transition-all duration-500 ${
        scrollDirection === 'down' ? '-top-24' : 'top-0'
      }`}
    >
      <div>
        <Link href='/'>
          <img src='/next.svg' alt='logo' className='h-8' />
        </Link>
      </div>

      <nav>
        <ul className='flex items-center gap-4'>
          {LINKS.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                className={`uppercase text-xs tracking-widest ${
                  isWhiteBg
                    ? 'hover:text-[#30313380]'
                    : 'hover:text-[#ffffff80]'
                } ${
                  pathname === link.href
                    ? isWhiteBg
                      ? 'text-[#30313380]'
                      : 'text-[#ffffff80]'
                    : ''
                } ${link.icon ? 'flex items-center' : ''}`}
              >
                {link.icon && (
                  <SvgIcon
                    name={link.icon as GeneralSvgNames}
                    width={24}
                    height={24}
                  />
                )}
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
