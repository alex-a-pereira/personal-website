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
// markdown articles
import mightierSummaryArticle1 from './articles/mightierSummaryArticle.md'
import vpinArticle from './articles/vpin.md'
import typescriptArticle from './articles/parentAppTS.md'

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
          heading: 'Wranging serverless infrastructure using CloudFormation',
          paragraphs: [
            'We\'ve been implementing serverless infrastructure in order to reduce AWS costs and set ourselves up for success as we scale. However, the benefits of serverless come at a price - infrastructure changes were all in the web UI with no commit history or code review. It was difficult to find services, manage Lambda function code changes, and cleanly implement permissions.'
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
        'We operate with the paradigm that customer-experience, product, marketing, and game developers should never rely on web-engineers to bring new content live.'
      ],
      subSections: [
        {
          heading: 'Content Management System',
          paragraphs: [
            'I worked on a system to feed dynamic content to our web and mobile app clients so that content updates are decoupled from code changes.',
            'We used Strapi, and open-source CMS, and served the content over CloudFront to ensure quick loading times to clients.'
          ]
        },
        {
          heading: 'Content Management System',
          paragraphs: [
            'I worked on a system to feed dynamic content to our web and mobile app clients so that content updates are decoupled from code changes.'
          ]
        }
      ]
    }
  ]
}

export const articles = [
  mightierSummaryArticle
]

export const slugToMarkdownMap: Record<string, string> = {
  'mightier-summary': mightierSummaryArticle1,
  VPIN: vpinArticle,
  'parent-app-typescript-migration': typescriptArticle
}
