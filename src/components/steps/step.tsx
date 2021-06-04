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
  max-width: 20rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.palette.background.paper};

  & > h3 {
    font-size: 2.6rem;
    margin-bottom: 0.8rem;
  }
`)

export default StepCard
