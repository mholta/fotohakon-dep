import { withTheme } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { SlideIntoView } from '../../../components/animations/slideIn'
import Image from '../../../components/gallery/image'
import MDRenderer from '../../../components/md/MDRenderer'
import { Link } from '../../../components/typography'
import { HomePageQueryNode } from '../../../pages'

interface PresentationSectionProps {
  node: HomePageQueryNode
}

const PresentationSection = ({ node }: PresentationSectionProps) => {
  return (
    <PresentationWrapper>
      <TitleWrapper>
        <SlideIntoView direction="left">
          <Title>{node.presentasjonTittel}</Title>
        </SlideIntoView>
      </TitleWrapper>
      <PresentationGrid>
        <SlideIntoView direction="left">
          <TextCol>
            <TextWrapper>
              <MDRenderer>{node.presentation}</MDRenderer>
            </TextWrapper>
            <CTAWrapper>
              <span style={{ marginRight: '0.3em' }}>Er vi en match? </span>
              <Link to="/bryllup/#booking">Send meg en melding</Link>{' '}
              <span>- det ville vært rått å høre fra dere!</span>
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
  margin: 6em 0;
  padding: 0 4em;

  ${(props) => props.theme.breakpoints.down('md')} {
    margin: 2em 0;
    padding: 0 2em;
  }
`)

const PresentationGrid = withTheme(styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 30em;
  gap: 4em;

  ${(props) => props.theme.breakpoints.down('sm')} {
    gap: 2em;
    grid-template-columns: 1fr 30em;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    grid-template-columns: 1fr 20em;
  }

  ${(props) => props.theme.breakpoints.down('xs')} {
    display: flex;
    flex-direction: column;
  }
`)

const TitleWrapper = styled.div`
  margin-bottom: 1.8rem;
`

const Title = withTheme(styled.h1`
  font-size: 4em;
  font-weight: 300;
  margin: 0;
  line-height: 1.5em;
  position: relative;
  z-index: 2;

  color: ${(props) => props.theme.palette.primary.main};

  ${(props) => props.theme.breakpoints.down('sm')} {
    font-size: 2.8em;
  }
  ${(props) => props.theme.breakpoints.down('xs')} {
    font-size: 2.2em;
  }
`)

const TextCol = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 1.2em;
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

const CTAWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ImageWrapper = withTheme(styled.div`
  padding: 0 5em;

  ${(props) => props.theme.breakpoints.down('md')} {
    padding: 0;
    max-width: 20em;
    margin: 0 auto;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    //   padding: 0 2em;
  }
`)

export default PresentationSection
