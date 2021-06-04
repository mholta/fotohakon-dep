import React from 'react'
import styled from 'styled-components'

interface SliderWrapperProps {
  children: JSX.Element[]
  summary?: boolean
}

const Slider = ({ children, summary }: SliderWrapperProps) => {
  return <SliderWrapper>{children}</SliderWrapper>
}

interface SliderWrapperProps {
  summary?: boolean
}

const SliderWrapper = styled.div<SliderWrapperProps>`
  display: flex;
  overflow: auto;
  margin: -3rem;
  padding: 3rem 0;
  padding-left: 3rem;
  & > * {
    margin-right: 3rem;
  }
`

export default Slider
