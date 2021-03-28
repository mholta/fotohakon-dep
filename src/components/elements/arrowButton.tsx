import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core'

interface ArrowButtonProps {
  direction?: ArrowDirection
  variant?: Variant
  onClick?: any
}

type ArrowDirection = 'top' | 'right' | 'down' | 'left'
type Variant = 'light'

const ArrowButton = ({
  direction = 'left',
  variant = 'light',
  onClick,
}: ArrowButtonProps) => {
  return (
    <ScrollDown direction={direction} variant={variant} onClick={onClick}>
      <ArrowForwardIosIcon />
    </ScrollDown>
  )
}
const ScrollDown = styled(IconButton)<ArrowButtonProps>`
  color: #fff;
  z-index: 3;
  & > * {
    transform: ${(props) => {
      switch (props.direction) {
        case 'top':
          return 'rotateZ(270deg)'
        case 'right':
          return 'rotateZ(0deg)'
        case 'down':
          return 'rotateZ(90deg)'
        case 'left':
          return 'rotateZ(180deg)'
      }
    }};
  }
`

export default ArrowButton
