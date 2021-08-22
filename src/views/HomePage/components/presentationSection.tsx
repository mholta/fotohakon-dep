import { withTheme } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { SlideIntoView } from '../../../components/animations/slideIn'
import Image from '../../../components/gallery/image'
import MDRenderer from '../../../components/md/MDRenderer'
import { Link } from '../../../components/typography'
import { HomePageQueryNode } from '../../../pages/indexx'

interface PresentationSectionProps {
  node: HomePageQueryNode
}

const PresentationSection = ({ node }: PresentationSectionProps) => {
  return (
    <PresentationWrapper>
      <PresentationGrid>
        <TitleWrapper>
          <SlideIntoView direction="left">
            <Title>{node.presentasjonTittel}</Title>
          </SlideIntoView>
        </TitleWrapper>
        <SlideIntoView direction="left">
          <TextCol>
            <TextWrapper>
              <MDRenderer>{node.presentation}</MDRenderer>
            </TextWrapper>
            <CTAWrapper>
              <span>Er vi en match? </span>
              <Link to="/kontakt">Send meg en forespørsel!</Link>
            </CTAWrapper>
          </TextCol>
        </SlideIntoView>
        <SlideIntoView direction="right">
          <ImageWrapper>
            <Image imageData={node.profilePicture} />
          </ImageWrapper>
        </SlideIntoView>
      </PresentationGrid>
    </PresentationWrapper>
  )
}

const PresentationWrapper = withTheme(styled.div`
  margin: 6rem 0;
  padding: 0 4rem;
`)

const PresentationGrid = withTheme(styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 30rem;
  gap: 4rem;
`)

const TitleWrapper = styled.div`
  grid-column: 1 / 3;
`

const Title = withTheme(styled.h1`
  font-size: 4rem;
  font-weight: 300;
  margin: 0;
  line-height: 1;
  position: relative;
  z-index: 2;

  color: ${(props) => props.theme.palette.primary.main};
`)

const TextCol = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 1.2rem;
  font-weight: 200;
  color: ${(props) => props.theme.palette.primary.main};

  position: relative;
`)

const TextWrapper = withTheme(styled.div`
  & > * {
    margin: 1.7em 0;
    line-height: 1.6;
  }
`)

const CTAWrapper = styled.div``

const ImageWrapper = styled.div`
  padding: 0 5rem;
`

export default PresentationSection
