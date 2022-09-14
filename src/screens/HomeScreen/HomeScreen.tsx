import React from 'react'
// UI components
import { InfoSection } from '../../components/InfoSection/InfoSection'
// types
import type { InfoSectionProps } from '../../components/InfoSection/InfoSection'
// assets
import mightierLogo from '../../assets/images/mightierLogo.png'
import minimLogo from '../../assets/images/minim.png'
import chainSortLogo from '../../assets/images/chainsort.png'
import afPianoLogo from '../../assets/images/af-piano.png'
import vpinLogo from '../../assets/images/vpin.png'
import nccLogo from '../../assets/images/ncc.png'
import umlLogo from '../../assets/images/uml.png'

import './HomeScreen.scss'

const screenData: InfoSectionProps[] = [
  {
    title: 'ABOUT',
    infoPanels: [
      {
        heading: "Hi, I'm Alex. I'm a full-stack software engineer based near Boston, Massachusetts.",
        paragraphs: [
          "I'm a JavaScript nerd with experience using languages and frameworks such as React Native, Python/Django, and Ruby on Rails. I work every day with tools like AWS (Lambda, API Gateway, etc.), Git, Docker, and MySQL.",
          "Currently I'm helping Mightier as a full-stack engineer. I've been the main coder on projects including automating package fulfillment and building a React Native application to keep parents connected to their kid's progress with Mightier.",
          "Outside of work I'm into 3d-printing, arduino projects, music production, and collecting vintage electronics."
        ]
      }
    ]
  },
  {
    title: 'CAREER',
    infoPanels: [
      {
        heading: 'Mightier',
        paragraphs: [
          'Senior full-stack software engineer. Mightier builds video games to help kids improve their mental and emotional health.'
        ],
        image: mightierLogo,
        links: [
          {
            displayName: 'Learn more',
            url: 'https://www.mightier.com/'
          }
        ]
      },
      {
        heading: 'Minim',
        paragraphs: [
          'Full-stack software engineer. Minim is an AI-driven WiFi management and IoT security platform for internet service providers.'
        ],
        image: minimLogo,
        links: [
          {
            displayName: 'Learn more',
            url: 'https://www.minim.co/solutions/whole-home-wifi'
          }
        ]
      }
    ]
  },
  {
    title: 'PROJECTS',
    infoPanels: [
      {
        heading: 'chainsort',
        paragraphs: [
          'Open-source node module to simplify sorting javascript objects by multiple properties.'
        ],
        image: chainSortLogo,
        links: [
          {
            displayName: 'View chainsort on npm',
            url: 'https://www.npmjs.com/package/chainsort'
          }
        ]
      },
      {
        heading: 'Alternate Frequency Piano',
        paragraphs: [
          'Experimental piano-player for playing with atypical-frequency tunings.'
        ],
        image: afPianoLogo,
        links: [
          {
            displayName: 'Play the piano',
            url: 'https://alternativepiano.com/'
          }
        ]
      },
      {
        heading: 'VPIN Big-Data Analysis',
        paragraphs: [
          '"Volume-Synchronized Probability of Informed Trading" analysis performed on ~500GB of SP500 data.'
        ],
        image: vpinLogo
      }
    ]
  },
  {
    title: 'EDUCATION',
    infoPanels: [
      {
        heading: 'UMass Lowell',
        paragraphs: [
          'Bachelor of Science in Finance - Computer Science Minor'
        ],
        image: umlLogo
      },
      {
        heading: 'Nashua Community College',
        paragraphs: [
          'Associate of Science in General Studies'
        ],
        image: nccLogo
      }
    ]
  }
]

export const HomeScreen = () => {
  return (
    <div className='screen-container'>
      {
        screenData.map((infoSection, idx) => {
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
