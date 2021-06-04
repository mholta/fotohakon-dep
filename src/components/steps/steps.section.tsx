import React from 'react'
import styled from 'styled-components'
import { WeddingPageQueryNode } from '../../pages/bryllup'
import { Container, Section } from '../layout/layout'
import Line from '../../assets/StepsLine.svg'
import StepCard from './step'
import StepImage, { Variant } from './steps.image'
import { withTheme } from '@material-ui/core'

interface StepsSectionProps {
  weddingPageNode: WeddingPageQueryNode
}

const StepsSection = ({ weddingPageNode }: StepsSectionProps) => {
  return (
    <StepsSectionWrapper>
      <Section style={{ position: 'relative', overflow: 'visible' }}>
        <StepsContainer>
          <StepImageOneWrapper>
            <StepImage
              imageData={weddingPageNode.imageOne}
              variant={Variant.TopRight}
            />
          </StepImageOneWrapper>
          <ContentGrid>
            <StepCard markdown={weddingPageNode.stepOne} />
            <StepCard markdown={weddingPageNode.stepTwo} />
            <StepCard markdown={weddingPageNode.stepThree} />
          </ContentGrid>
          <StepImageTwoWrapper>
            <StepImage
              imageData={weddingPageNode.imageTwo}
              variant={Variant.TopLeft}
            />
          </StepImageTwoWrapper>
        </StepsContainer>
      </Section>
      <LineWrapper>
        <Line />
      </LineWrapper>
    </StepsSectionWrapper>
  )
}

const StepsContainer = withTheme(styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`)

const StepImageOneWrapper = withTheme(styled.div`
  position: absolute;
  top: -1rem;
  right: 10vw;
  z-index: 2;

  ${(props) => props.theme.breakpoints.down('sm')} {
    position: relative;
    align-self: center;
    top: auto;
    right: auto;
  }
`)

const StepImageTwoWrapper = withTheme(styled.div`
  position: absolute;
  bottom: 0rem;
  left: 10vw;
  z-index: 2;

  ${(props) => props.theme.breakpoints.down('sm')} {
    position: relative;
    align-self: center;
    bottom: auto;
    left: auto;
  }
`)

const ContentGrid = withTheme(styled.div`
  display: flex;
  flex-direction: column;

  margin: 3rem 0;

  & > *:not(:last-child) {
    margin-bottom: 8rem;
  }

  & > :nth-child(1) {
    align-self: flex-start;
  }
  & > :nth-child(2) {
    align-self: center;
  }
  & > :nth-child(3) {
    align-self: flex-end;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    & > *:not(:last-child) {
      margin-bottom: 3rem;
    }

    & > :nth-child(1),
    & > :nth-child(3) {
      align-self: center;
    }
  }
`)

const StepsSectionWrapper = styled.div`
  position: relative;
`

const LineWrapper = withTheme(styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: rgba(0, 0, 0, 0.4);
  opacity: 1;
  transition: opacity 1s 0.5s ease;

  ${(props) => props.theme.breakpoints.down('sm')} {
    opacity: 0;
  }
`)

export default StepsSection
