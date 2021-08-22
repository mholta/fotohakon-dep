import React from 'react'
import styled from 'styled-components'
import { WeddingPageQueryNode } from '../../pages/bryllup'
import Line from '../../assets/StepsLine.svg'
import StepCard from './step'
import StepImage, { Variant } from './steps.image'
import { withTheme } from '@material-ui/core'

interface StepsSectionProps {
  weddingPageNode: WeddingPageQueryNode
}

const StepsSection = ({ weddingPageNode }: StepsSectionProps) => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <StepImageOneWrapper>
          <StepImage
            imageData={weddingPageNode.imageOne}
            variant={Variant.TopRight}
          />
        </StepImageOneWrapper>
        <StepsGrid>
          <StepCard markdown={weddingPageNode.stepOne} />
          <StepCard markdown={weddingPageNode.stepTwo} />
          <StepCard markdown={weddingPageNode.stepThree} />
        </StepsGrid>
        <StepImageTwoWrapper>
          <StepImage
            imageData={weddingPageNode.imageTwo}
            variant={Variant.TopLeft}
          />
        </StepImageTwoWrapper>
      </InnerWrapper>
      <LineWrapper>
        <Line />
      </LineWrapper>
    </OuterWrapper>
  )
}

const InnerWrapper = withTheme(styled.div`
  padding: 0 6rem;
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

const StepsGrid = withTheme(styled.div`
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

const OuterWrapper = styled.div`
  position: relative;
  overflow: visible;
  padding: 4rem 1rem;
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
