import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

interface ImageProps {
  imageData: any
  maxheight?: string
  absolute?: boolean | number
  bw?: boolean | number
  darken?: number
  height?: string
}

const Image = ({
  imageData,
  maxheight,
  absolute = false,
  bw = false,
  darken = 0,
  height,
}: ImageProps) => {
  const gImage = getImage(imageData)

  return (
    <AbosluteWrapper absolute={absolute ? 1 : 0} height={height}>
      {gImage && (
        <GImage
          image={gImage}
          alt={imageData.title}
          ratio={gImage.width / gImage.height}
          maxheight={maxheight}
          absolute={absolute ? 1 : 0}
          bw={bw ? 1 : 0}
          darken={darken}
        />
      )}
    </AbosluteWrapper>
  )
}

interface ImgProps extends Partial<ImageProps> {
  ratio: number
  maxheight: string | undefined
  height?: string
}

const AbosluteWrapper = styled.div<Partial<ImgProps>>`
  ${(props) =>
    props.absolute
      ? `
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width:100%;
    object-fit: fill;
    `
      : `
    height: ${props.height ?? 'auto'}`}
`

const GImage = styled(GatsbyImage)<ImgProps>`
  max-width: 100%;
  transition: filter 200ms ease;
  position: relative;
  ${(props) =>
    props.maxheight
      ? `max-width: calc(${props.maxheight} * ${props.ratio});`
      : `height: 100%;`}

  ${(props) =>
    props.bw
      ? `
      filter: grayscale();
      `
      : ``}

    ${(props) =>
    `

    &::after {
      transition: opacity 200ms ease;
      content:'';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width:100%;
      z-index: 1;
      background-color: black;
      opacity: ${props.darken};
    }

    `}
`

export default Image
