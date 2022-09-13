import React from 'react'
import './InfoSection.scss'

interface InfoSectionProps {
  title: string
  infoPanels: Array<{
    heading: string,
    paragraphs: string[]
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
              <div key={idx}>
                <h2>{infoPanel.heading}</h2>
                {
                  infoPanel.paragraphs.map((paragraphText, idx) => {
                    return <p key={idx}>{paragraphText}</p>
                  })
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
})

InfoSection.displayName = 'InfoSection'
