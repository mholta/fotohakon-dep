import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

interface ImageProps {
  imageData: any
  maxheight?: string
}

const Image = ({ imageData, maxheight: maxHeight }: ImageProps) => {
  const gImage = getImage(imageData)

  return (
    <>
      {gImage && (
        <GImage
          image={gImage}
          alt={imageData.title}
          ratio={gImage.width / gImage.height}
          maxheight={maxHeight}
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
  ${(props) =>
    props.maxheight ? `width: calc(${props.maxheight} * ${props.ratio});` : ''}
`

export default Image
