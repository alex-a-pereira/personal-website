import React from 'react'
import ReactMarkdown from 'react-markdown'
// markdown plugins
import gfm from 'remark-gfm'
// syntax highlighting on codeblocks
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { cb as cbCodeStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism'
// UI components
import { FlexibleLink } from '../FlexibleLink/FlexibleLink'
// types
import type { CodeComponent, CodeProps } from 'react-markdown/lib/ast-to-react'

import './MarkdownRenderer.scoped.scss'

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

interface MarkdownRendererProps {
  children: string
}

export const MarkdownRenderer = React.memo(({ children }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[gfm]}
      components={{
        code: CodeBlock,
        a: ({ children, href }) => {
          return <FlexibleLink url={href as string}>{children}</FlexibleLink>
        }
      }}
      className='markdown-renderer'
    >
      {children}
    </ReactMarkdown>
  )
})

MarkdownRenderer.displayName = 'MarkdownRenderer'
