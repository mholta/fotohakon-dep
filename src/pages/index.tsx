import { withTheme } from '@material-ui/core'
import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import CategoryButton from '../components/categories/categoryButton'
import Footer from '../components/footer'
import SEO from '../components/seo'
import Testimonial from '../components/testimonial/testimonial'
import HomePageHeader from '../views/HomePage/components/headerWrapper'
import PresentationSection from '../views/HomePage/components/presentationSection'

interface IndexPageProps {
  data: any
}

const IndexPage = ({
  data: { contentfulHjem, allContentfulTilbakemeldinger },
}: IndexPageProps) => {
  const homeNode: HomePageQueryNode = contentfulHjem
  const testimonialNodes: TestimonialNode[] =
    allContentfulTilbakemeldinger.nodes

  const weddingPortfolioLink =
    'https://fotohakon.client-gallery.com/category/bryllup'
  const weddingBookingLink = '/bryllup'
  const familyPortfolioLink =
    'https://fotohakon.client-gallery.com/category/familie-par'
  const familyBookingLink = '/familiepar'

  return (
    <HomePageWrapper>
      <SEO
        image={
          homeNode.headerImage?.file?.url
            ? 'https:' + homeNode.headerImage?.file?.url
            : undefined
        }
      />
      <HomePageHeader node={homeNode} />
      <CategoryButtonsWrapper id="hei">
        <CategoryButton
          node={homeNode.bryllupKategori}
          bookingLink={weddingBookingLink}
          portfolioLink={weddingPortfolioLink}
        />
        <CategoryButton
          node={homeNode.familieParKategori}
          bookingLink={familyBookingLink}
          portfolioLink={familyPortfolioLink}
        />
      </CategoryButtonsWrapper>
      <PresentationSection node={homeNode} />
      <div>
        {testimonialNodes.map((testimonial, index) => (
          <Testimonial node={testimonial} reverseOrder={index % 2 === 0} />
        ))}
      </div>
      <CategoryButtonsWrapper small={true}>
        <CategoryButton
          node={homeNode.bryllupKategori}
          bookingLink={weddingBookingLink}
          portfolioLink={weddingPortfolioLink}
          spaceBetween
        />
        <CategoryButton
          node={homeNode.familieParKategori}
          bookingLink={familyBookingLink}
          portfolioLink={familyPortfolioLink}
          spaceBetween
        />
      </CategoryButtonsWrapper>
      {/* <CategorySection nodes={allCategoryNodes} /> */}
      <Footer />
    </HomePageWrapper>
  )
}

const CategoryButtonsWrapper = withTheme(styled.div<{ small?: boolean }>`
  padding: 1rem;
  gap: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 80rem;
  max-height: ${(props) => (props.small ? '20rem' : '100vh')};

  ${(props) => props.theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr;
    max-height: 160vh;
  }
`)

const HomePageWrapper = withTheme(styled.div`
  background-color: ${(props) => props.theme.palette.secondary.main};
  font-size: 1.3vw;

  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 1.5vw;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    font-size: 1.9vw;
  }
  ${(props) => props.theme.breakpoints.down('xs')} {
    font-size: 16px;
  }
`)

export default IndexPage

export const pageQuery = graphql`
  query {
    contentfulHjem(internTittel: { eq: "home" }) {
      internTittel
      presentasjonTittel
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
      bryllupKategori {
        buttonImage {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
          title
        }
        smallButtonImage {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
          title
        }
        buttonText
      }
      familieParKategori {
        buttonImage {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
          title
        }
        smallButtonImage {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
          title
        }
        buttonText
      }
    }

    allContentfulTilbakemeldinger {
      nodes {
        image {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
          title
        }
        feedback {
          raw
        }
        name
        color {
          hex
        }
        cloudSpotLink
      }
    }
  }
`

export interface TestimonialNode {
  image: any
  name: string
  feedback: any
  color: { hex: string }
  cloudSpotLink: string
}
export interface HomePageQueryNode {
  internTittel: string
  presentasjonTittel: string
  presentation: any
  headerImage: any
  profilePicture: any
  bryllupKategori: any
  familieParKategori: any
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
