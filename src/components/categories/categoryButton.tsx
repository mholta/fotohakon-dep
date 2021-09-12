import { withTheme } from '@material-ui/core'
import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { SlideIntoView } from '../animations/slideIn'
import Image from '../gallery/image'
import { Link } from '../typography'

interface CategoryNode {
  buttonText: string
  buttonImage: any
}

interface CategoryButtonProps {
  node: CategoryNode
  spaceBetween?: boolean
  portfolioLink: string
  bookingLink: string
}

const CategoryButton = ({
  node,
  spaceBetween,
  portfolioLink,
  bookingLink,
}: CategoryButtonProps) => {
  return (
    <ImageWrapper>
      <ButtonTextWrapper spaceBetween={spaceBetween}>
        <SlideIntoView component={motion.h2} direction="none">
          {node.buttonText}
        </SlideIntoView>
        <CTAWrapper spaceBetween={spaceBetween}>
          <SlideIntoView direction="none">
            <Link light={true} to={portfolioLink}>
              Portfolio
            </Link>
          </SlideIntoView>
          <SlideIntoView direction="none">
            <Link light={true} to={bookingLink}>
              Fortell meg mer og se priser
            </Link>
          </SlideIntoView>
        </CTAWrapper>
      </ButtonTextWrapper>
      <Image imageData={node.buttonImage} absolute />
    </ImageWrapper>
  )
}

const CTAWrapper = withTheme(styled.div<{ spaceBetween?: boolean }>`
  color: white;
  font-size: 1.6em;
  font-family: inherit;

  ${(props) =>
    props.spaceBetween
      ? ``
      : `
      position: absolute;
      bottom: 1em;`}

  display: flex;
  flex-direction: column;
  align-items: center;

  & > :not(:last-child) {
    margin-bottom: 0.5em;
  }

  & > * {
    text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3),
      0px 2px 24px rgba(0, 0, 0, 0.2);
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    //font-size: 1em;
  }
`)

const ImageWrapper = styled.div`
  position: relative;
`

const ButtonTextWrapper = withTheme(styled.div<{ spaceBetween?: boolean }>`
  ${(props) =>
    props.spaceBetween
      ? `
      position: relative;
      justify-content: space-evenly;
      `
      : `
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    
    `}

  z-index: 5;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${(props) => props.theme.breakpoints.down('sm')} {
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    font-size: 0.9em;
  }
  ${(props) => props.theme.breakpoints.down('xs')} {
    font-size: 0.8em;
  }
  & > h2 {
    font-weight: 400;
    font-size: 3.6em;
    color: white;
    text-align: center;
    text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5),
      0px 2px 24px rgba(0, 0, 0, 0.3);
  }
`)

export default CategoryButton
