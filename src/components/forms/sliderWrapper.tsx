import { withTheme } from '@material-ui/core'
import React, { useRef } from 'react'
import styled from 'styled-components'
import { easeOutCubic } from '../animations/easings'

interface SliderWrapperProps {
  children: JSX.Element[]
  summary?: boolean
  title: string
}

const OptionCardsWrapper = ({
  children,
  summary = false,
  title,
}: SliderWrapperProps) => {
  const sliderRef = useRef<HTMLDivElement>()
  const scrollLength = 500
  const ms = 300

  const slideLeft = () => {
    if (!sliderRef?.current) return
    slide(sliderRef.current, scrollLength, ms)
  }

  const slideRight = () => {
    if (!sliderRef?.current) return
    slide(sliderRef.current, -scrollLength, ms)
  }

  const slide = (element: HTMLDivElement, length: number, time: number) => {
    let run = true
    const pxPerFrame: number = (length / time) * 20
    let lengthScrolled: number = 0
    let percentage: number = 0
    let percentagePerFrame: number = pxPerFrame / length

    const stopDelta: number = 1

    let req: number

    const animate = () => {
      if (Math.abs(length) - Math.abs(lengthScrolled) < stopDelta) {
        run = false
      }

      if (!run) return cancelAnimationFrame(req)

      element.scrollLeft += easeOutCubic(percentage) * pxPerFrame

      /* Update state */
      lengthScrolled += pxPerFrame
      percentage += percentagePerFrame
      req = requestAnimationFrame(animate)
    }

    req = requestAnimationFrame(animate)
  }

  return (
    <>
      <OptionsLabelWrapper>
        <OptionsLabelHeading>{title}</OptionsLabelHeading>
        {!summary && (
          <LinesWrapper>
            <LineWrapper
              onClick={slideRight}
              style={{ transform: 'rotateZ(180deg)' }}
            >
              <span></span>
              <span></span>
              <span></span>
            </LineWrapper>
            <LineWrapper onClick={slideLeft}>
              <span></span>
              <span></span>
              <span></span>
            </LineWrapper>
          </LinesWrapper>
        )}
      </OptionsLabelWrapper>

      <SliderWrapper ref={sliderRef} summary={summary.valueOf() ?? false}>
        {children}
        <div style={{ width: 0.1 }} />
      </SliderWrapper>
    </>
  )
}

const LinesWrapper = withTheme(styled.div`
  display: flex;
  width: 30%;

  ${({ theme }) => theme.breakpoints.up('md')} {
    display: none;
  }
`)

const LineWrapper = styled.div`
  cursor: pointer;

  position: relative;
  display: flex;
  flex: 1;
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

const OptionsLabelHeading = withTheme(styled.h2`
  font-size: 2.6rem;
  margin-bottom: 1rem;

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 2rem;
  }
`)

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
