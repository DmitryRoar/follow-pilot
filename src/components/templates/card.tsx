import { SocialSvgNames, SvgIcon } from 'ui/svg-icon'

type Props = {
  media: SocialSvgNames
  title: string
  gradient: string
  addon?: string
  addonColor?: string
}

export const Card = ({ title, gradient, addon, addonColor, media }: Props) => {
  return (
    <div
      className='w-60 h-60 p-1 cursor-pointer'
      style={{ background: gradient }}
    >
      <div className='bg-dark p-6 flex flex-col h-full w-full'>
        <div className='mb-4 flex-1'>
          <div className='flex flex-col justify-center items-center text-3xl tracking-wider capitalize font-bold'>
            {title.split(' ').map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
          {addon && (
            <p
              className={`text-xl uppercase text-center font-bold ${
                addonColor
                  ? addonColor
                  : 'from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'
              } `}
            >
              {addon}
            </p>
          )}
        </div>
        <div>
          <SvgIcon
            className='mx-auto'
            prefix='social'
            name={media}
            width={50}
            height={50}
            color='text-white'
          />
        </div>
      </div>
    </div>
  )
}
