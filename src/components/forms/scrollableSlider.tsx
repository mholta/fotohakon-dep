import React from 'react'
import { Frame, Scroll } from 'framer'
import styled from 'styled-components'

interface ScrollableSliderProps {
  children: JSX.Element[]
}

const ScrollableSlider = ({ children }: ScrollableSliderProps) => {
  return (
    <Scroll height={200} width={200}>
      <HorizontalFrame size={300}>{children}</HorizontalFrame>
    </Scroll>
  )
}

const HorizontalFrame = styled(Frame)`
  display: flex;
`

export default ScrollableSlider
