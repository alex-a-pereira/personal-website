import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
// content
import { articles } from '../../siteContent'
// UI
import { ArticleScreenView } from './ArticleScreenView'

import './ArticleScreen.scss'

export const ArticleScreen = React.memo(() => {
  const { slug } = useParams()

  const articleForScreen = useMemo(() => {
    return articles.find(article => article.slug === slug)
  }, [slug])

  if (!articleForScreen) {
    return (
      <div>
        <h1>Not found!</h1>
      </div>
    )
  }

  return (
    <ArticleScreenView articleContent={articleForScreen} />
  )
})

ArticleScreen.displayName = 'ArticleScreen'
