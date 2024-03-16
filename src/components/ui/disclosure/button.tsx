'use client'

import { PropsWithChildren, useContext, useState } from 'react'
import { SvgIcon } from 'ui/svg-icon'
import { DisclosureContext } from './provider'

export const DisclosureButton = ({ children }: PropsWithChildren) => {
  const ICON_SIZE = 24
  const { isOpen, toggleHandler } = useContext(DisclosureContext)

  const [isFocused, setIsFocused] = useState(false)

  const mouseEnterHandler = () => {
    setIsFocused(true)
  }

  const mouseLeaveHandler = () => {
    setIsFocused(false)
  }

  return (
    <div
      onClick={toggleHandler}
      className={`flex items-center justify-between select-none text-xs py-7 cursor-pointer tracking-widest ${
        isOpen ? 'text-blue' : 'text-[#303133]'
      }`}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {children}

      <button
        className={`ease-in-out duration-300 p-2 ${
          isFocused ? 'rounded-full bg-warn' : ''
        }`}
      >
        {isOpen ? (
          <SvgIcon name='cross' height={ICON_SIZE} width={ICON_SIZE} />
        ) : (
          <SvgIcon name='plus' height={ICON_SIZE} width={ICON_SIZE} />
        )}
      </button>
    </div>
  )
}
