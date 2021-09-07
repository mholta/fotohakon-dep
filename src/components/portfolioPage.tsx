import { navigate } from 'gatsby-link'
import React, { useRef } from 'react'
import styled from 'styled-components'
import SubmitButton from './forms/sendButton'
import RandomGallery from './gallery/randomGallery'
import { Container } from './layout/layout'
import { Link } from './typography'

export interface PortfolioNode {
  gallery: any[]
  seoBilde: any
}

interface PortfolioPageProps {
  portfolioNode: PortfolioNode
  nextPage: string
  title: string
}

const PortfolioPage = ({
  portfolioNode,
  nextPage,
  title,
}: PortfolioPageProps) => {
  const dragConstraintsRef = useRef<HTMLDivElement>(null)
  return (
    <div>
      <Section>
        <h1>{title}</h1>
      </Section>
      <Section ref={dragConstraintsRef}>
        <RandomGallery
          node={portfolioNode}
          dragConstraints={dragConstraintsRef}
        />
      </Section>
      <CallToActionWrapper>
        <Container>
          <Link to={nextPage}>Priser og booking</Link>
        </Container>
      </CallToActionWrapper>
    </div>
  )
}

const Section = styled.section`
  padding: 2rem;
  overflow: hidden;
  text-align: center;
`

const CallToActionWrapper = styled.div`
  position: sticky;
  bottom: 0;
  padding: 1.3rem;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(1, 1, 1, 0.1);
  text-align: center;
`

export default PortfolioPage
