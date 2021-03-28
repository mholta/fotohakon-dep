import { graphql } from 'gatsby'
import React from 'react'
import RandomGallery from '../components/gallery/randomGallery'
import HomePage from '../views/HomePage/HomePage'

interface IndexPageProps {
  data: any
}

const IndexPage = ({
  data: { contentfulHjem, contentfulCategory },
}: IndexPageProps) => {
  const homeNode: HomePageQueryNode = contentfulHjem
  const categoryNode: CategoryPageQueryNode = contentfulCategory
  return (
    <>
      <HomePage node={homeNode} />
      <RandomGallery node={categoryNode} />
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
    }
    contentfulCategory(key: { eq: "wedding" }) {
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
`

export interface HomePageQueryNode {
  internTittel: string
  presentation: any
  headerImages: any[]
}

export interface CategoryPageQueryNode {
  buttonText: string
  infoseksjon: any
  gallery: any[]
}
