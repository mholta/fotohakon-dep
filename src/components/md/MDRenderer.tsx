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
const H2 = styled.h2``
const H3 = styled.h3``

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <P>{children}</P>,
    [BLOCKS.HEADING_1]: (node: any, children: any) => <H1>{children}</H1>,
    [BLOCKS.HEADING_2]: (node: any, children: any) => <H2>{children}</H2>,
    [BLOCKS.HEADING_3]: (node: any, children: any) => <H3>{children}</H3>,
  },
}

export default MDRenderer
