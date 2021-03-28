import { graphql } from 'gatsby'
import React from 'react'
import CategorySection from '../views/HomePage/components/categoriesSection'
import HomePage from '../views/HomePage/HomePage'

interface IndexPageProps {
  data: any
}

const IndexPage = ({
  data: { contentfulHjem, allContentfulCategory },
}: IndexPageProps) => {
  const homeNode: HomePageQueryNode = contentfulHjem
  const allCategoryNodes: AllCategoryPageQueryNodes =
    allContentfulCategory.edges
  allContentfulCategory.edges
  return (
    <>
      <HomePage node={homeNode} />
      <CategorySection nodes={allCategoryNodes} />
    </>
  )
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
      profilePicture {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        title
      }
    }
    allContentfulCategory {
      edges {
        node {
          buttonImage {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            title
          }
          buttonText
          infoseksjon {
            raw
          }
          gallery {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            title
          }
        }
      }
    }
  }
`

export interface HomePageQueryNode {
  internTittel: string
  presentation: any
  headerImages: any[]
  profilePicture: any
}

export interface CategoryPageQueryNode {
  buttonText: string
  infoseksjon: any
  gallery: any[]
  buttonImage: any
}
export interface CategoryPageQueryEdge {
  node: CategoryPageQueryNode
}

export type AllCategoryPageQueryNodes = CategoryPageQueryEdge[]
