import React, { useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { FlexibleLink } from '../../components/FlexibleLink/FlexibleLink'
// types
import type { Article } from '../../siteContent'

interface ArticleScreenViewProps {
  articleContent: Article | undefined
}

export const ArticleScreenView = React.memo((props: ArticleScreenViewProps) => {
  const { articleContent } = props

  const navigate = useNavigate()

  const onGoBackClick = useCallback(() => {
    navigate(-1)
  }, [navigate])

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
        <a onClick={onGoBackClick}>go back</a>
        <Link to='/' />
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
              {
                section.subSections?.map((subSection, idx) => {
                  return (
                    <div className='article-sub-section' key={idx}>
                      {subSection.heading && <h3>{subSection.heading}</h3>}
                      {
                        subSection.paragraphs?.map((paragraph, idx) => {
                          return (
                            <p key={idx} className='article-subsection-paragraph'>
                              {paragraph}
                            </p>
                          )
                        })
                      }
                      {
                        subSection.links != null && (
                          <div className='links-container'>
                            {subSection.links?.map((linkConfig, idx) => {
                              return (
                                <FlexibleLink key={idx} url={linkConfig.url}>
                                  {linkConfig.displayName}
                                </FlexibleLink>
                              )
                            })}
                          </div>
                        )
                      }
                    </div>
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
