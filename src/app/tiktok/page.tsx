'use client'

import { Card } from '@/components/templates/card'
import Link from 'next/link'

const GRADIENT = 'linear-gradient(to bottom,#69c9d0 0,#ee1d52 100%)'

const ITEMS = [
  { title: 'TikTok views', href: '/product/instagram-follower' },
  {
    title: 'TikTok Likes',
    href: '/product/instagram-follower-premium',
  },
  { title: 'TikTok follower', href: '/product/instagram-likes' },
]

const Tiktok = () => {
  return (
    <div className='flex-shrink-0'>
      <div
        className='h-half-screen'
        style={{
          background: GRADIENT,
        }}
      >
        <div className='flex flex-col items-center justify-center h-full text-white'>
          <h1 className='text-4xl'>Jetzt auch TikTok Reichweite!</h1>
          <h1 className='text-4xl'>Bis zu 50 % reduziert!</h1>
        </div>
      </div>

      <div className='relative top-[-120px] flex flex-wrap text-white mx-12 justify-center'>
        {ITEMS.map((item, idx) => (
          <Link href={item.href} key={idx}>
            <Card gradient={GRADIENT} media='tiktok' title={item.title} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Tiktok
