import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

interface ImageProps {
  imageData: any
  maxheight?: string
  absolute?: boolean | number
  bw?: boolean | number
}

const Image = ({
  imageData,
  maxheight,
  absolute = false,
  bw = false,
}: ImageProps) => {
  const gImage = getImage(imageData)

  return (
    <>
      {gImage && (
        <GImage
          image={gImage}
          alt={imageData.title}
          ratio={gImage.width / gImage.height}
          maxheight={maxheight}
          absolute={absolute ? 1 : 0}
          bw={bw ? 1 : 0}
        />
      )}
    </>
  )
}

interface ImgProps extends Partial<ImageProps> {
  ratio: number
  maxheight: string | undefined
}

const GImage = styled(GatsbyImage)<ImgProps>`
  max-width: 100%;
  transition: filter 00ms ease;
  ${(props) =>
    props.maxheight
      ? `max-width: calc(${props.maxheight} * ${props.ratio});`
      : `height: 100%;`}
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
      : ``}

      ${(props) =>
    props.bw
      ? `
      filter: grayscale()
      `
      : ``}
`

export default Image
