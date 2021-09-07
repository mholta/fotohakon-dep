import React, { useState } from 'react'
import styled from 'styled-components'

interface SubmitButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  buttonText?: string
  fontSize?: number
}

const SubmitButton = ({ onClick, buttonText, fontSize }: SubmitButtonProps) => {
  const [hover, setHover] = useState<boolean>(false)

  return (
    <SubmitButtonWrapper
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ fontSize: (fontSize ?? 4) / 4 + 'rem' }}
    >
      <LineWrapper hover={hover}>
        <span></span>
        <span></span>
        <span></span>
      </LineWrapper>
      <SubmitText hover={hover}>{buttonText ?? 'Send'}</SubmitText>
    </SubmitButtonWrapper>
  )
}

interface HoverProps {
  hover?: boolean
}

const LineWrapper = styled.div<HoverProps>`
  position: relative;
  display: flex;
  align-items: center;
  transition: transform 200ms ease;
  transform: translateX(${(props) => (props.hover ? '0.4em' : '0')});

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
    ${(props) =>
      props.hover &&
      `
      transform: translateY(0.04em) translateX(0.01em) rotateZ(45deg);
      `}
  }
  & > span:nth-child(3) {
    ${(props) =>
      props.hover &&
      `
      transform: translateY(-0.04em) translateX(0.01em) rotateZ(-45deg);
    `}
  }
`

const SubmitText = styled.div<HoverProps>`
  font-size: 4em;
  font-weight: 600;
  transition: transform 200ms ease;

  ${(props) =>
    props.hover &&
    `
      transform: translateX(-0.04em);
      `}
`

const SubmitButtonWrapper = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  font-family: inherit;
  font-size: 1rem;

  width: 100%;

  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2em;
  cursor: pointer;
  align-items: center;
  transition: transform 200ms ease;

  &:active {
    transform: scale(0.98);
  }
`

export default SubmitButton
