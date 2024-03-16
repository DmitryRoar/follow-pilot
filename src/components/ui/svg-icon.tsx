import { SVGProps } from 'react'

export type SocialSvgNames = 'instagram' | 'tiktok' | 'youtube'
export type GeneralSvgNames = 'faq' | 'plus' | 'cross'
type SvgNames = GeneralSvgNames | SocialSvgNames

type PrefixNames = 'general' | 'social'

interface Props {
  height: number
  width: number
  name: SvgNames
  prefix?: PrefixNames
}

// default value social => global
export const SvgIcon = ({
  name,
  prefix = 'general',
  ...props
}: SVGProps<SVGSVGElement> & Props) => (
  <svg {...props}>
    <use href={`/assets/icons/sprites/${prefix}-sprite.svg#${name}`} />
  </svg>
)
