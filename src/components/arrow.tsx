import React from 'react'
import styled from 'styled-components'

type Direction = 'down' | 'up' | 'left' | 'right'

interface ArrowProps {
  direction: Direction
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Arrow = ({ direction, onClick }: ArrowProps) => {
  return (
    <RotateWrapper direction={direction} onClick={onClick}>
      <LineWrapper>
        <span></span>
        <span></span>
        <span></span>
      </LineWrapper>
    </RotateWrapper>
  )
}

const RotateWrapper = styled.button<ArrowProps>`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  ${(props) => {
    switch (props.direction) {
      case 'down':
        return `
          transform: rotateZ(90deg);
          `
      case 'up':
        return `
            transform: rotateZ(-90deg);
        `
      case 'left':
        return `
          transform: rotateZ(180deg);
        `
    }
  }}
`

const LineWrapper = styled.div<Partial<ArrowProps>>`
  width: 5em;
  height: 3em;
  font-size: 1rem;
  position: relative;
  display: flex;
  align-items: center;

  & > span:nth-child(1) {
    width: 100%;
    height: 2px;
    background-color: black;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  & > span:nth-child(2),
  & > span:nth-child(3) {
    position: absolute;
    right: 0;
    width: 2em;
    height: 2px;
    background-color: black;
    transition: transform 200ms ease;
    transform-origin: right;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  & > span:nth-child(2) {
    transform: translateY(0.04em) translateX(0.01em) rotateZ(45deg);
  }
  & > span:nth-child(3) {
    transform: translateY(-0.04em) translateX(0.01em) rotateZ(-45deg);
  }
`

export default Arrow
