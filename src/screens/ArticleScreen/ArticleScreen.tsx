import React, { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
// content
import { articles } from '../../siteContent'
// UI
import { ArticleScreenView } from './ArticleScreenView'
import firstArticle from '../../articles/first.md'

import './ArticleScreen.scss'

const markdown = 'Just a link: https://reactjs.com.'

export const ArticleScreen = React.memo(() => {
  return (
    <ReactMarkdown>
      {firstArticle}
    </ReactMarkdown>
  )

  // const { slug } = useParams()

  // const articleForScreen = useMemo(() => {
  //   return articles.find(article => article.slug === slug)
  // }, [slug])

  // return (
  //   <ArticleScreenView articleContent={articleForScreen} />
  // )
})

ArticleScreen.displayName = 'ArticleScreen'
