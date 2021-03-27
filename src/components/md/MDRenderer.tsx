import React from 'react'
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import styled from 'styled-components'

interface MDRendererProps {
  children: RenderRichTextData<ContentfulRichTextGatsbyReference> | null
}

const MDRenderer = ({ children }: MDRendererProps) => {
  return <>{children ? renderRichText(children, options) : ''}</>
}

const Bold = styled.span`
  font-weight: bold;
`

const P = styled.p``

const H1 = styled.h1``

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <P>{children}</P>,
    [BLOCKS.HEADING_1]: (node: any, children: any) => <H1>{children}</H1>,
  },
}

export default MDRenderer
