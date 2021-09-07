import { withTheme } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import MDRenderer from '../md/MDRenderer'

interface StepCardProps {
  markdown: any
}

const StepCard = ({ markdown }: StepCardProps) => {
  return (
    <StepCardWrapper>
      <MDRenderer>{markdown}</MDRenderer>
    </StepCardWrapper>
  )
}

const StepCardWrapper = withTheme(styled.div`
  max-width: 19rem;
  padding: 0.2rem;
  background-color: ${(props) => props.theme.palette.background.default};

  & > h3 {
    font-size: 3.2rem;
    margin-bottom: 0rem;
  }

  & > p {
    font-size: 1rem;
    line-height: 1.6;

    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }
`)

export default StepCard
