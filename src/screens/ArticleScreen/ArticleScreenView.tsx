import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
// types
import type { Article } from '../../siteContent'

interface ArticleScreenViewProps {
  articleContent: Article | undefined
}

export const ArticleScreenView = React.memo((props: ArticleScreenViewProps) => {
  const { articleContent } = props

  if (!articleContent) {
    return (
      <div className='article-screen-container'>
        <h1>Not found!</h1>
      </div>
    )
  }

  return (
    <div className='article-screen-container'>
      <div className='go-back-container'>
        <FaArrowLeft />
        <Link to='/'>
          go back home
        </Link>
      </div>
      <h1 className='article-title'>{articleContent.title}</h1>
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
