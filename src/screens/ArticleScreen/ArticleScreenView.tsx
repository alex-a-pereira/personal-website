import React from 'react'
// types
import type { Article } from '../../siteContent'

interface ArticleScreenViewProps {
  articleContent: Article
}

export const ArticleScreenView = React.memo((props: ArticleScreenViewProps) => {
  const { articleContent } = props

  return (
    <div>
      <h1>{articleContent.title}</h1>
    </div>
  )
})

ArticleScreenView.displayName = 'ArticleScreenView'
