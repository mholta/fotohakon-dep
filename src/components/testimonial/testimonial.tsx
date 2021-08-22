import React from 'react'
import styled from 'styled-components'
import MDRenderer from '../md/MDRenderer'
import { TestimonialNode } from '../../pages/indexx'

import Image from '../gallery/image'
import { useInView } from 'react-intersection-observer'
import { SlideIntoView } from '../animations/slideIn'

interface TestimonialProps {
  node: TestimonialNode
  reverseOrder?: boolean
}

const Testimonial = ({ node, reverseOrder }: TestimonialProps) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  })

  return (
    <MainWrapper
      color={node.color?.hex ?? 'transparent'}
      reverseOrder={reverseOrder}
      ref={ref}
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
          style={{ height: '100%' }}
        >
          <Image imageData={node.image} height="100%" />
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

const MainWrapper = styled.div<TestimonialCardProps>`
  background-color: ${(props) => props.color};
  color: white;
  margin: 14rem 0;
  padding: 4rem 4rem;
  position: relative;
  min-height: 16rem;

  display: flex;
  flex-direction: ${(props) => (props.reverseOrder ? 'row-reverse' : 'row')};
  justify-content: center;
  align-items: stretch;
`

const ImageWrapper = styled.div<TestimonialCardProps>`
  position: relative;

  margin: -7rem 0;

  max-width: 19rem;
  ${(props) => (props.reverseOrder ? 'margin-right' : 'margin-left')}: 4em;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 1.2em;

  & > * > * {
    line-height: 1.6;
  }

  & > * > h2 {
    line-height: 1;
    margin-bottom: 0.7em;
  }
`

export default Testimonial
