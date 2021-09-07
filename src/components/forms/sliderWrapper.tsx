import { withTheme } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

interface SliderWrapperProps {
  children: JSX.Element[]
  summary?: boolean
}

const OptionCardsWrapper = ({
  children,
  summary = false,
}: SliderWrapperProps) => {
  return (
    <SliderWrapper summary={summary.valueOf() ?? false}>
      {children}
      <div style={{ width: 0.1 }} />
    </SliderWrapper>
  )
}

interface SliderWrapperProps {
  summary?: boolean
}

const SliderWrapper = withTheme(styled.div<SliderWrapperProps>`
  & > * {
    flex-shrink: 0;
  }

  ${(props) =>
    props.summary
      ? `
      display: flex;
      flex-wrap: wrap;
      overflow: auto;
      margin: 0 -1rem;
      margin-bottom: -1rem;
      padding: 0 1rem;

      & > *:not(:last-child) {
        margin-right: 1rem;
        margin-bottom: 1rem
      }
      `
      : `
      display: flex;
      overflow: auto;
      margin: -2rem -2rem;
      padding: 2rem 2rem;

      & > *:not(:last-child) {
        margin-right: 3rem;
      }

      & > *:nth-last-child(2) {
        margin-right: 1rem;
      }
      
      ${props.theme.breakpoints.up('md')} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin: -2rem;
        padding: 2rem;
        & > * {
          min-width: 0;
        }
        & > *:not(:last-child) {
          margin-right: 0;
        }
  `}
`)

export default OptionCardsWrapper
