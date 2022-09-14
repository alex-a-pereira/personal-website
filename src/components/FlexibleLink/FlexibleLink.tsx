import React from 'react'

import {
  Link as ReactRouterLink
} from 'react-router-dom'

// TODO: extend props for styling!
interface FlexibleLinkProps {
  url: string
  children: React.ReactNode
}

export const FlexibleLink = ({ children, url, ...props }: FlexibleLinkProps) => {
  const isExternalLink = url.includes('http')

  if (isExternalLink) {
    return (
      <a
        target='_blank'
        className='panel-link'
        href={url}
        rel='noreferrer'
      >
        {children}
      </a>
    )
  }

  return (
    <div>
      <ReactRouterLink
        to={url}
        {...props}
      >
        {children}
      </ReactRouterLink>
    </div>
  )
}
