import React, { useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
// UI components
import { MarkdownRenderer } from '../../components/MarkdownRenderer/MarkdownRenderer'

interface ArticleScreenViewProps {
  articleMarkdown: string | undefined
}

export const ArticleScreenView = React.memo((props: ArticleScreenViewProps) => {
  const { articleMarkdown } = props

  const navigate = useNavigate()

  const onGoBackClick = useCallback(() => {
    navigate(-1)
  }, [navigate])

  if (!articleMarkdown) {
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
      <MarkdownRenderer>
        {articleMarkdown}
      </MarkdownRenderer>
    </div>
  )
})

ArticleScreenView.displayName = 'ArticleScreenView'
