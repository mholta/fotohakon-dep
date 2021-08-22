import { withTheme } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { SlideIntoView } from '../animations/slideIn'
import MDRenderer from '../md/MDRenderer'

interface StepCardProps {
  markdown: any
}

const StepCard = ({ markdown }: StepCardProps) => {
  return (
    <SlideIntoView>
      <StepCardWrapper>
        <MDRenderer>{markdown}</MDRenderer>
      </StepCardWrapper>
    </SlideIntoView>
  )
}

const StepCardWrapper = withTheme(styled.div`
  max-width: 28rem;
  padding: 0.2rem;

  background-color: ${(props) => props.theme.palette.background.default};

  & > h3 {
    font-size: 3rem;
    margin-bottom: 0.1em;
  }

  & > p {
    font-size: 1.1rem;
    line-height: 1.6;

    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }
`)

export default StepCard
