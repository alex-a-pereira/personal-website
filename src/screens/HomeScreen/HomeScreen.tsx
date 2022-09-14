import React from 'react'
// UI components
import { InfoSection } from '../../components/InfoSection/InfoSection'
// constants
import { homeScreenData } from '../../siteContent'

import './HomeScreen.scss'

export const HomeScreen = () => {
  return (
    <div className='screen-container'>
      {
        homeScreenData.map((infoSection, idx) => {
          return (
            <React.Fragment key={idx}>
              {idx !== 0 && <hr />}
              <InfoSection key={idx} title={infoSection.title} infoPanels={infoSection.infoPanels} />
            </React.Fragment>
          )
        })
      }
    </div>
  )
}
