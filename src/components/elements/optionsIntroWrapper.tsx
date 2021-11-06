import React from 'react'
import styled from 'styled-components'

export const OptionsIntroWrapper = styled.div`
  & > h2 {
    font-size: 4rem;
  }
`
export const OptionsLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <OptionsLabelWrapper>
      <OptionsLabelHeading>{children}</OptionsLabelHeading>
      <LineWrapper>
        <span></span>
        <span></span>
        <span></span>
      </LineWrapper>
    </OptionsLabelWrapper>
  )
}

const LineWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  transition: transform 200ms ease;
  transform: translateX(0.4em);
  width: 20%;
  --marg: 0.6rem;
  margin-top: calc(-1 * var(--marg));
  margin-bottom: var(--marg);

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

const OptionsLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const OptionsLabelHeading = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 1rem;
`
