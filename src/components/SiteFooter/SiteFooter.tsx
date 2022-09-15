import React from 'react'

import './SiteFooter.scss'

export const SiteFooter = React.memo(() => {
  return (
    <div className='site-footer-container'>
      <p>Alex Pereira - Software Engineer</p>
    </div>
  )
})

SiteFooter.displayName = 'SiteHeader'
