import { graphql } from 'gatsby'
import React from 'react'
import Footer from '../../components/footer'
import Nav from '../../components/nav'
import PortfolioPage, { PortfolioNode } from '../../components/portfolioPage'
import SEO from '../../components/seo'

interface BookingPageProps {
  data: any
}

const WeddingPortfolioPage = ({
  data: { contentfulCategory },
}: BookingPageProps) => {
  const portfolioNode: PortfolioNode = contentfulCategory
  console.log(portfolioNode)

  return (
    <>
      <SEO
        title="Portfolio bryllup"
        image={
          portfolioNode.seoBilde?.file?.url
            ? 'https:' + portfolioNode.seoBilde?.file?.url
            : undefined
        }
      />

      <Nav />
      <PortfolioPage
        portfolioNode={portfolioNode}
        title="Portfolio · Bryllup"
        nextPage="/bryllup"
      />
      <Footer />
    </>
  )
}

export default WeddingPortfolioPage

export const pageQuery = graphql`
  query {
    contentfulCategory(key: { eq: "wedding" }) {
      seoBilde {
        file {
          url
        }
      }
      key
      gallery {
        title
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        updatedAt
      }
    }
  }
`
