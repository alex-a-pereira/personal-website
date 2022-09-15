import React from 'react'

import { Link as ReactRouterLink } from 'react-router-dom'

import './FlexibleLink.scss'

// TODO: extend props for styling!
interface FlexibleLinkProps {
  url: string
  children: React.ReactNode
}

export const FlexibleLink = ({ children, url }: FlexibleLinkProps) => {
  const isExternalLink = url.includes('http')

  if (isExternalLink) {
    return (
      <a
        target='_blank'
        className='flexible-link'
        href={url}
        rel='noreferrer'
      >
        {children}
      </a>
    )
  }

  return (
    <ReactRouterLink
      to={url}
      className='flexible-link'
    >
      {children}
    </ReactRouterLink>
  )
}
