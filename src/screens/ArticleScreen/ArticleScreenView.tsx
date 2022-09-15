import React from 'react'
// types
import type { Article } from '../../siteContent'

interface ArticleScreenViewProps {
  articleContent: Article
}

export const ArticleScreenView = React.memo((props: ArticleScreenViewProps) => {
  const { articleContent } = props

  return (
    <div className='article-screen-container'>
      <h1>{articleContent.title}</h1>
      {
        articleContent.sections?.map((section, idx) => {
          return (
            <div key={idx} className='article-section-container'>
              <h2>{section.heading}</h2>
              {
                section.paragraphs?.map((paragraph, idx) => {
                  return (
                    <p key={idx} className='article-paragraph-container'>
                      {paragraph}
                    </p>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
})

ArticleScreenView.displayName = 'ArticleScreenView'
