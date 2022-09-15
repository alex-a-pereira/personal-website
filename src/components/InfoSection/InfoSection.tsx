import React from 'react'

import { FlexibleLink } from '../FlexibleLink/FlexibleLink'

import './InfoSection.scss'

interface LinkConfig {
  displayName: string
  url: string
}

export interface InfoSectionProps {
  title: string
  infoPanels: Array<{
    heading: string,
    paragraphs: string[]
    // TODO: figure out asset typing
    image?: any
    links?: LinkConfig[]
  }>
}

export const InfoSection = React.memo((props: InfoSectionProps) => {
  return (
    <div className='section-container'>
      {/* header */}
      <div className='title-container'>
        <h1>{props.title}</h1>
      </div>
      {/* content */}
      <div className='body-container'>
        {
          props.infoPanels.map((infoPanel, idx) => {
            return (
              <div key={idx} className='info-panel-container'>
                {infoPanel.image && (
                  <div className='img-container'>
                    <img src={infoPanel.image} />
                  </div>
                )}
                <div className='info-panel-text-container'>
                  <h2>{infoPanel.heading}</h2>
                  <div>
                    {
                      infoPanel.paragraphs.map((paragraphText, idx) => {
                        return <p key={idx}>{paragraphText}</p>
                      })
                    }
                  </div>
                  {
                    infoPanel.links != null && (
                      <div className='links-container'>
                        {
                          infoPanel.links.map((linkConfig, idx) => {
                            return (
                              <FlexibleLink key={idx} url={linkConfig.url}>
                                {linkConfig.displayName}
                              </FlexibleLink>
                            )
                          })
                        }
                      </div>
                    )
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
})

InfoSection.displayName = 'InfoSection'
