import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
// content
import { slugToMarkdownMap } from '../../siteContent'
// UI
import { ArticleScreenView } from './ArticleScreenView'

import './ArticleScreen.scss'

export const ArticleScreen = React.memo(() => {
  const { slug } = useParams()

  const articleMarkdownForScreen = useMemo(() => {
    return slug && slugToMarkdownMap[slug]
  }, [slug])

  return (
    <ArticleScreenView articleMarkdown={articleMarkdownForScreen} />
  )
})

ArticleScreen.displayName = 'ArticleScreen'
