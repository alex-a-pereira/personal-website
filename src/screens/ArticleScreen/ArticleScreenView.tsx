import React, { useCallback, useState, useMemo } from 'react'
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

  const [isBackLinkHovered, setIsBackLinkHovered] = useState(false)

  const onMouseEnter = useCallback(() => { setIsBackLinkHovered(true) }, [])
  const onMouseLeave = useCallback(() => { setIsBackLinkHovered(false) }, [])

  const backLinkClassName = useMemo(() => {
    return isBackLinkHovered ? 'purple' : ''
  }, [isBackLinkHovered])

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
        <FaArrowLeft className={backLinkClassName} />
        <a
          onClick={onGoBackClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={backLinkClassName}
        >
          go back
        </a>
        <Link to='/' />
      </div>
      <MarkdownRenderer>
        {articleMarkdown}
      </MarkdownRenderer>
    </div>
  )
})

ArticleScreenView.displayName = 'ArticleScreenView'
