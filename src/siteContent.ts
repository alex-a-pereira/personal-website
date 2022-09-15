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
          'Senior full-stack software engineer. Mightier builds video games to help kids improve their mental health and emotional regulation skills.',
          'I work with TypeScript, React-Native, Python/Django, and AWS Serverless Infrastructure to build complex full-stack systems.',
          'I\'ve taken responsibility to lead many tech initiatives to implement tools that help our growing team work more efficiently and deliver higher-quality code to customers faster.'
        ],
        image: mightierLogo,
        links: [
          {
            displayName: 'What I do at Mightier',
            url: '/articles/mightier-summary'
          },
          {
            displayName: 'More about how Mightier helps families',
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

interface ArticleSubSection {
  heading?: string
  paragraphs?: string[]
  // TODO: better typing lol
  links?: InfoSectionProps['infoPanels'][0]['links']
}

interface ArticleSection {
  heading?: string,
  paragraphs?: string[]
  subSections?: ArticleSubSection[]
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

const mightierSummaryArticle: Article = {
  title: 'My role at Mightier',
  slug: 'mightier-summary',
  sections: [
    {
      paragraphs: [
        'As a senior full-stack engineer on a small team, I\'ve had the opportunity to work on a lot of cool projects.',
        'My team is responsible delivering web and mobile applications to customers, as well as implementing tools to empower other teams across the company.'
      ]
    },
    {
      heading: 'Web and Mobile Applications',
      paragraphs: [
        'My team works closely with the product team to deliver applications for our customers.',
        'I\'ve had the opportunity to lead architectural and deployment efforts on a few projects.'
      ],
      subSections: [
        {
          heading: 'Mightier Parent - a React Native mobile app',
          paragraphs: [
            'Mightier Parent is a cross-platform mobile app for our customers to use to help track progress while using Mightier\'s game application. We built this using bare React Native as Expo was too limited for some of our use cases.',
            'We\'ve given the product and content teams full control over what content is displayed in the app using a hosted CMS (Strapi).',
            'Ive lead architectural decisions and refactor efforts to keep the codebase easy to navigate and improve turnaround time on new features.'
          ],
          links: [
            {
              displayName: 'Learn more about Mightier Parent',
              url: 'https://www.mightier.com/parent-app/'
            }
          ]
        }
      ]
    },
    {
      heading: 'Developer Experience Initiatives',
      paragraphs: [
        'I\'ve lead a number of initatives to help my team work better and deliver high-quality code to customers faster.'
      ],
      subSections: [
        {
          heading: 'Mightier Parent - TypeScript migration',
          paragraphs: [
            'Mightier Parent originally had all of its React code written in vanilla JavaScript. We quickly recognized that the lack of typing was causing significant development overhead and leading to avoidable bugs.',
            'I lead the effort to implement TypeScript transpilation and allow for a smooth transition from JS to TS.'
          ],
          links: [
            {
              displayName: 'Read more about how TypeScript helped our team',
              url: '/articles/parent-app-typescript-migration'
            }
          ]
        },
        {
          heading: 'Wranging Serverless Infrastructure using AWS CDK',
          paragraphs: [
            'Aute magna excepteur elit nostrud. Aute esse ut reprehenderit deserunt. Velit sunt est proident exercitation ut. Voluptate est est quis veniam mollit. Lorem ea consequat adipisicing laboris et laborum cupidatat commodo exercitation ex. Incididunt quis dolor minim in tempor et elit cupidatat Lorem est sit ex ea.',
            'Consectetur do fugiat anim laboris consectetur reprehenderit. Sint ipsum anim id nostrud aliquip veniam quis aliquip do mollit sit exercitation cupidatat. Magna id nostrud anim pariatur ea culpa quis officia officia officia.'
          ]
        },
        {
          heading: 'React Native Over-The-Air Updates',
          paragraphs: [
            'Lorem Lorem ex qui officia veniam qui et sit velit tempor ipsum id et sit. Anim culpa minim reprehenderit incididunt ut ut elit quis adipisicing enim excepteur deserunt Lorem in. Veniam irure labore commodo est exercitation do magna dolor incididunt eiusmod nostrud. Nulla sunt dolor nisi enim occaecat consectetur minim eu anim ullamco id nulla est. Lorem nisi consequat adipisicing anim nisi id esse aute.'
          ]
        }
      ]
    },
    {
      heading: 'Cross-Team tools',
      paragraphs: [
        'We operate with the paradigm that customer-experience, product, marketing, and game developers should never rely on web-engineers to bring new content live, so we\'ve built many systems to support'
      ]
    }
  ]
}

const typescriptMigrationArticle: Article = {
  title: 'Mightier Parent App TypeScript Migration',
  slug: 'parent-app-typescript-migration',
  sections: [
    {
      heading: 'Why did we need TypeScript?',
      paragraphs: [
        'When the codebase for Mightier Parent was created, the decision was made to use vanilla JavaScript for our React code. For a few months this decision felt alright - we were able get a proof-of-concept into testing and version 1.0 released to App Stores quickly without additional overhead.',
        'However, we were rapidly added features to meet deadlines, and as the codebase grew quickly it became difficult to navigate. We were writing code with avoidable bugs, and it seemed like every component had a ton of unnecessary null-checks.'
      ]
    }
  ]
}

export const articles = [
  vpinArticleContent,
  mightierSummaryArticle,
  typescriptMigrationArticle
]
