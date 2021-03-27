import { graphql } from 'gatsby'
import React from 'react'
import HomePage from '../views/HomePage/HomePage'

interface IndexPageProps {
  data: any
}

const IndexPage = ({ data: { contentfulHjem } }: IndexPageProps) => {
  const node: HomePageQueryNode = contentfulHjem
  return <HomePage node={node} />
}

export default IndexPage

export const pageQuery = graphql`
  query {
    contentfulHjem(internTittel: { eq: "home" }) {
      internTittel
      presentation {
        raw
      }
      headerImages {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        title
      }
    }
  }
`

export interface HomePageQueryNode {
  internTittel: string
  presentation: any
  headerImages: any[]
}
