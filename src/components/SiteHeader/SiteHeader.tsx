import React, { useState } from 'react'
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

export const SiteHeader = React.memo(() => {
  const [hoverText, setHoverText] = useState('')

  return (
    <div className='container'>
      <div>
        <h2 className='heading-text'>Alex Pereira</h2>
        <p className='sub-text'>Full-Stack Software Engineer</p>
      </div>
      {/* icons and text that goes underneath */}
      <div className='icon-container'>
        <div className='icon-aligner'>
          <HoverableIcon
            IconComponent={FaGithub}
            onMouseEnter={() => {
              setHoverText('github')
            }}
            onMouseLeave={() => {
              setHoverText('')
            }}
            onClick={() => {
              window.open('https://github.com/alex-a-pereira', '_blank')
            }}
          />
          <HoverableIcon
            IconComponent={FaLinkedinIn}
            onMouseEnter={() => {
              setHoverText('linkedin')
            }}
            onMouseLeave={() => {
              setHoverText('')
            }}
            onClick={() => {
              window.open('https://www.linkedin.com/in/alex-a-pereira/', '_blank')
            }}
          />
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
