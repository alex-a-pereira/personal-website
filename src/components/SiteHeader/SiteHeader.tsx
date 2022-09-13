import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

import './SiteHeader.scss'

export const SiteHeader = React.memo(() => {
  return (
    <div className='container'>
      <div>
        <h2 className='heading-text'>Alex Pereira</h2>
        <p className='sub-text'>Full-Stack Software Engineer</p>
      </div>
      <div className='icon-container'>
        <FaGithub size={20} className='icon' />
        <FaLinkedinIn size={20} className='icon' />
      </div>
    </div>
  )
})

SiteHeader.displayName = 'SiteHeader'
