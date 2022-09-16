import React, { useCallback } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { useNavigate, Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { cb as cbCodeStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism'
// types
import type { CodeComponent, CodeProps } from 'react-markdown/lib/ast-to-react'

interface ArticleScreenViewProps {
  articleMarkdown: string | undefined
}

const CodeBlock: CodeComponent = ({ node, inline, className, children, ...props }: CodeProps) => {
  const match = /language-(\w+)/.exec(className ?? '')

  if (!match || inline) {
    return <code className={className} {...props}>{children}</code>
  }

  return (
    <SyntaxHighlighter language={match[1]} style={cbCodeStyle}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  )
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
      <ReactMarkdown
        remarkPlugins={[
          gfm
        ]}
        components={{
          code: CodeBlock
        }}
      >
        {articleMarkdown}
      </ReactMarkdown>
    </div>
  )
})

ArticleScreenView.displayName = 'ArticleScreenView'
