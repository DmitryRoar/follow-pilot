'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Footer = () => {
  const pathname = usePathname()

  return (
    <footer className='bg-dark-accent text-white p-8'>
      {pathname === '/' && <PaymentMethods />}
      <div className='text-sm flex flex-col gap-8 font-light'>
        <div className='flex items-center gap-8'>
          <p>© 2018-2024 FollowerPilot</p>
          <ul className='flex items-center gap-4'>
            <li className='hover:text-blue duration-150'>
              <Link href='/'>Impressum</Link>
            </li>
            <li className='hover:text-blue duration-150'>
              <Link href='/'>Datenschutz</Link>
            </li>
            <li className='hover:text-blue duration-150'>
              <Link href='/'>Widerruf & AGB</Link>
            </li>
            <li className='hover:text-blue duration-150'>
              <Link href='/'>Support</Link>
            </li>
          </ul>
        </div>
        <div>
          <p>
            Hinweis: followerpilot.de wird in keinster Weise von den sozialen
            Netzwerken unterstützt oder betrieben und steht in keinerlei
            Verbindung zu Instagram, YouTube oder TikTok. Diese Namen sind
            eingetragene Marken der jeweiligen Unternehmen.
          </p>
        </div>
      </div>
    </footer>
  )
}

const PAYMENT_IMAGES = [
  'paypal',
  'sofort',
  'apple-pay',
  'google-pay',
  'mastercard',
  'visa',
  'american-express',
]

const PaymentMethods = () => {
  return (
    <div className='flex justify-center items-center gap-8 w-full mb-12'>
      {PAYMENT_IMAGES.map((imageName, idx) => (
        <img
          className='h-8'
          src={`/assets/icons/payments/${imageName}.svg`}
          key={idx}
        />
      ))}
    </div>
  )
}
