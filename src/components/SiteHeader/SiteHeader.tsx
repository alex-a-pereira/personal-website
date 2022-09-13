import React, { useState, useCallback } from 'react'
import { FaGithub, FaLinkedinIn, FaArrowRight } from 'react-icons/fa'

import type { IconType } from 'react-icons'

import './SiteHeader.scss'

interface HoverableIconProps {
  IconComponent: IconType
  onMouseEnter: () => void
  onMouseLeave: () => void
  onClick: () => void
}

const HoverableIcon = React.memo((props: HoverableIconProps) => {
  return (
    <div
      className='icon-background'
      onMouseEnter={() => {
        props.onMouseEnter()
      }}
      onMouseLeave={() => {
        props.onMouseLeave()
      }}
      onClick={props.onClick}
    >
      <props.IconComponent size={20} className='icon' />
    </div>
  )
})

HoverableIcon.displayName = 'HoverableIcon'

interface IconListItem {
  IconComponent: IconType
  hoverText: string
  url: string
}

const iconList: IconListItem[] = [
  {
    IconComponent: FaGithub,
    hoverText: 'github',
    url: 'https://github.com/alex-a-pereira'
  },
  {
    IconComponent: FaLinkedinIn,
    hoverText: 'linkedin',
    url: 'https://www.linkedin.com/in/alex-a-pereira/'
  }
]

export const SiteHeader = React.memo(() => {
  const [hoverText, setHoverText] = useState('')

  const resetHoverText = useCallback(() => { setHoverText('') }, [])

  return (
    <div className='container'>
      <div>
        <h2 className='heading-text'>Alex Pereira</h2>
        <p className='sub-text'>Full-Stack Software Engineer</p>
      </div>
      {/* icons and text that goes underneath */}
      <div className='icon-container'>
        <div className='icon-aligner'>
          {
            iconList.map((iconProps, idx) => {
              return (
                <HoverableIcon
                  key={idx}
                  IconComponent={iconProps.IconComponent}
                  onMouseEnter={() => { setHoverText(iconProps.hoverText) }}
                  onMouseLeave={resetHoverText}
                  onClick={() => { window.open(iconProps.url, '_blank') }}
                />
              )
            })
          }
        </div>
        <div className='hover-text-container'>
          {
            hoverText !== ''
              ? (
                <>
                  <p className='hover-text'>{hoverText}</p>
                  <FaArrowRight />
                </>
                )
              : null
          }
        </div>
      </div>
    </div>
  )
})

SiteHeader.displayName = 'SiteHeader'
