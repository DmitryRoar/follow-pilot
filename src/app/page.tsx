'use client'

import { Card } from '@/components/templates/card'
import Link from 'next/link'

const GRADIENT =
  'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'

const ITEMS = [
  { title: 'instagram follower', href: '/product/instagram-follower' },
  {
    title: 'instagram',
    addon: 'premium',
    href: '/product/instagram-follower-premium',
  },
  { title: 'instagram likes', href: '/product/instagram-likes' },
  { title: 'instagram comments', href: '/product/instagram-kommentare' },
  { title: 'instagram views', href: '/product/instagram-views' },
  { title: 'instagram impressions', href: '/product/instagram-impressions' },
]

export default function Home() {
  return (
    <div>
      <div
        className='h-half-screen'
        style={{
          background: GRADIENT,
        }}
      >
        <div className='flex flex-col items-center justify-center h-full text-white'>
          <h1 className='text-4xl'>Oster SALE!</h1>
          <h1 className='text-4xl'>Bis zu 50 % Rabatt auf alle Artikel!</h1>
        </div>
      </div>

      <div className='relative top-[-120px] flex flex-wrap text-white mx-12 justify-center'>
        {ITEMS.map((item, idx) => (
          <Link href={item.href} key={idx}>
            <Card
              gradient={GRADIENT}
              media='instagram'
              title={item.title}
              addon={item.addon}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
