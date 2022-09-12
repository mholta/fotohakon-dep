import React from 'react'
import styled from 'styled-components'
import MDRenderer from '../md/MDRenderer'
import { TestimonialNode } from '../../pages'

import Image from '../gallery/image'
import { useInView } from 'react-intersection-observer'
import { SlideIntoView } from '../animations/slideIn'
import { withTheme } from '@material-ui/core'
import { Link } from 'gatsby'

interface TestimonialProps {
  node: TestimonialNode
  reverseOrder?: boolean
}

const Testimonial = ({ node, reverseOrder }: TestimonialProps) => {
  const { ref } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  })

  return (
    <MainWrapper
      color={node.color?.hex ?? 'transparent'}
      reverseOrder={reverseOrder}
      ref={ref}
      to={node.cloudSpotLink}
    >
      <TextWrapper>
        <SlideIntoView direction={reverseOrder ? 'right' : 'left'}>
          <h2>{node.name}</h2>
          <MDRenderer>{node.feedback}</MDRenderer>
        </SlideIntoView>
      </TextWrapper>
      <ImageWrapper reverseOrder={reverseOrder}>
        <SlideIntoView
          direction={reverseOrder ? 'left' : 'right'}
          style={{ height: '100%', position: 'relative' }}
        >
          {!!node.cloudSpotLink ? (
            <div>
              <div className="link-wrapper">
                <div style={{ width: '8rem' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
              <Image imageData={node.image} height="100%" />
            </div>
          ) : (
            <Image imageData={node.image} height="100%" />
          )}
        </SlideIntoView>
      </ImageWrapper>
    </MainWrapper>
  )
}

interface TestimonialCardProps {
  color?: string
  reverseOrder?: boolean
  inView?: boolean
}

const MainWrapper = withTheme(styled(Link)<TestimonialCardProps>`
  background-color: ${(props) => props.color};
  color: white;
  margin: 14em 0;
  padding: 4em 4em;
  position: relative;
  min-height: 16em;
  display: block;
  text-decoration: none;

  display: flex;
  flex-direction: ${(props) => (props.reverseOrder ? 'row-reverse' : 'row')};
  justify-content: center;
  align-items: stretch;

  ${(props) => props.theme.breakpoints.down('md')} {
    padding: 2em;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  cursor: pointer;
  & .link-wrapper {
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 200ms opacity ease;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  &:hover .link-wrapper {
    opacity: 1;
  }
`)

const ImageWrapper = withTheme(styled.div<TestimonialCardProps>`
  position: relative;
  flex-shrink: 0;

  margin: -7em 0;

  max-width: 19em;
  ${(props) => (props.reverseOrder ? 'margin-right' : 'margin-left')}: 4em;

  ${(props) => props.theme.breakpoints.down('sm')} {
    margin: 2em;
    max-width: 16em;
  }
`)

const TextWrapper = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 1.2em;

  & > * > * {
    font-size: 1em;
    line-height: 1.6;
  }

  & > * > h2 {
    font-size: 2em;
    line-height: 1;
    margin-bottom: 0.3em;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    padding: 2em;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    padding-bottom: 0;
  }
`)

export default Testimonial
