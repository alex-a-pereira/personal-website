// types
import type { InfoSectionProps } from './components/InfoSection/InfoSection'
// assets
import mightierLogo from './assets/images/mightierLogo.png'
import minimLogo from './assets/images/minim.png'
import chainSortLogo from './assets/images/chainsort.png'
import afPianoLogo from './assets/images/af-piano.png'
import vpinLogo from './assets/images/vpin.png'
import nccLogo from './assets/images/ncc.png'
import umlLogo from './assets/images/uml.png'

export const homeScreenData: InfoSectionProps[] = [
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
        image: vpinLogo,
        links: [
          {
            displayName: 'Read more',
            url: '/articles/VPIN'
          }
        ]
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

interface ArticleSection {
  heading?: string,
  paragraphs?: string[]
}

export interface Article {
  title: string,
  slug: string
  sections?: ArticleSection[]
}

const vpinArticleContent: Article = {
  title: 'VPIN big-data analysis',
  slug: 'VPIN',
  sections: [
    {
      paragraphs: [
        'I had the opportunity to work with a finance professor on an interesting project during my senior year of college. My professor, an ex-software engineer who holds a PhD in Finance, worked with me to convert his code from SAS to Python, Pandas, and Numpy.'
      ]
    },
    {
      heading: 'Markets are Volatile',
      paragraphs: [
        'The theoretical foundation for the VPIN algorithm has its roots in the concept of informed trading, which summarizes the point that "those who have more information will trade more frequently." Can we base our predictions of the future price of an asset on our perception of what information others have?',
        'The method, originally proposed by researchers David Easley and Maureen O\'Hara of Cornell University, and Marcos M. López de Prado of Tudor Investment Corporation. In summary, the method groups time-series data (exchanges of securities) into buckets, and assumes that if a security is traded in high volume or frequently over a short span of time, traders of the security likely have more information than you.'
      ]
    },
    {
      heading: 'Choosing the stack',
      paragraphs: [
        'As I mentioned, my professor had already written the code in SAS to perform the calculation. Everything worked, but there was an out standing problem - we were on a budget and working with a lot of data. Our budget ruled out brute forcing things and paying for large servers. I had proposed a solution using Python, Pandas, Numpy, and Scipy to make things more manageable.',
        'While SAS was objectively a better-optomized tool for running data analysis, it lacks the fundamental intuitivity that Python has. Operations like slicing data and expanding records, were convoluted in SAS but are crucial to the VPIN algorithm. SAS was difficult to use, and resulted in more "test-flights" while prototyping the code. Each run of the SAS script would take days to run!'
      ]
    },
    {
      heading: 'Too much data',
      paragraphs: [
        'We were dealing with ~500GB of raw S&P500 stock market data. This data was unfiltered, formatted as .sas7bdat files, and split across ~360 files for the year we year analyzing. I had to find a way to automate the conversion of this data into a useable format. A requirement was that the data be split into databases on a "per-firm" basis - one database for AAPL and another of MSFT.',
        'SQLite3 ended up being the right tool for this job considering the scope of the project and time (and space) constraints. In other life, I would have chosen a well-optomized single database with fast access to data on a "per-firm" basis.'
      ]
    },
    {
      heading: 'Automating the calculation',
      paragraphs: [
        'Considering that we were still prototyping the project, it was best to split the code into three sections: splitting data into time bars, converting these time bars into volume buckets, and the calculating VPIN based off the volume buckets.'
      ]
    }
  ]
}

export const articles = [
  vpinArticleContent
]
