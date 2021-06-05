import React from 'react'
import styled from 'styled-components'

interface SliderWrapperProps {
  children: JSX.Element[]
  summary?: boolean
}

const Slider = ({ children, summary = false }: SliderWrapperProps) => {
  return (
    <SliderWrapper summary={summary ? true : false}>{children}</SliderWrapper>
  )
}

interface SliderWrapperProps {
  summary?: boolean
}

const SliderWrapper = styled.div<SliderWrapperProps>`
  display: flex;
  overflow: auto;

  & > * {
    flex-shrink: 0;
  }

  ${(props) =>
    props.summary
      ? `
      margin: 0;
  padding: 0;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
  `
      : `
  margin: -3rem;
  padding: 3rem;

  & > *:not(:last-child) {
    margin-right: 3rem;
  }
  `}
`

export default Slider
