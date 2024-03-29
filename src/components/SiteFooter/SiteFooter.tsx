import React from 'react'

import './SiteFooter.scss'

export const SiteFooter = React.memo(() => {
  return (
    <div className='site-footer-container'>
      <p>Alex Pereira - Senior Software Engineer</p>
    </div>
  )
})

SiteFooter.displayName = 'SiteHeader'
