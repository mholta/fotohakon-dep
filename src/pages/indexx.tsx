import { graphql } from 'gatsby'
import React from 'react'
import Footer from '../components/footer'
import SEO from '../components/seo'
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
      <SEO
        image={
          homeNode.headerImage?.file?.url
            ? 'https:' + homeNode.headerImage?.file?.url
            : undefined
        }
      />
      <HomePage node={homeNode} />
      <CategorySection nodes={allCategoryNodes} />
      <Footer />
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
      headerImage {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        title
        file {
          url
        }
      }
      profilePicture {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        title
      }
    }
    allContentfulCategory {
      edges {
        node {
          link
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
  headerImage: any
  profilePicture: any
}

export interface CategoryPageQueryNode {
  buttonText: string
  infoseksjon: any
  gallery: any[]
  buttonImage: any
  link: string
}
export interface CategoryPageQueryEdge {
  node: CategoryPageQueryNode
}

export type AllCategoryPageQueryNodes = CategoryPageQueryEdge[]
