import { withTheme } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import Image from '../gallery/image'

interface StepImageProps {
  imageData: any
  variant: Variant
}

export enum Variant {
  TopLeft = 'TopLeft',
  TopRight = 'TopRight',
}

const StepImage = ({ imageData, variant }: StepImageProps) => {
  return (
    <StepImageWrapper>
      <RectTop variant={variant} />
      <RectBottom variant={variant} />
      <Image imageData={imageData} />
    </StepImageWrapper>
  )
}

interface RectProps {
  variant: Variant
}

const RectTop = withTheme(styled.div<RectProps>`
  height: 1.4rem;
  background-color: ${(props) => props.theme.palette.secondary.main};
  position: absolute;
  z-index: 3;
  top: 1rem;
  ${(props) => {
    switch (props.variant) {
      case Variant.TopLeft:
        return `
            width: 3.8rem;
            left: -0.2rem;
            transform: rotateZ(-38deg);
            `
      case Variant.TopRight:
        return `
            width: 4rem;
            right: -0.3rem;
            transform: rotateZ(43deg);
        `
      default:
        return ``
    }
  }}

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    height: 98%;
    width: 102%;
    top: -0rem;
    left: -0.06rem;
    background-color: ${(props) => props.theme.palette.secondary.light};
    transform: rotateZ(-2deg);
  }
`)

const RectBottom = withTheme(styled.div<RectProps>`
  height: 1.4rem;
  background-color: ${(props) => props.theme.palette.secondary.main};
  position: absolute;
  z-index: 3;
  bottom: 1.2rem;
  ${(props) => {
    switch (props.variant) {
      case Variant.TopLeft:
        return `
            width: 4rem;
            right: -0.2rem;
            transform: rotateZ(-30deg);
            `
      case Variant.TopRight:
        return `
            width: 4.2rem;
            left: -0.2rem;
            transform: rotateZ(34deg);
        `
      default:
        return ``
    }
  }}

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    height: 98%;
    width: 102%;
    top: -0rem;
    left: -0.06rem;
    background-color: ${(props) => props.theme.palette.secondary.light};
    transform: rotateZ(1deg);
  }
`)

const StepImageWrapper = styled.div`
  display: inline-block;
  max-width: 16rem;
  position: relative;
  padding: 1rem;
  z-index: 1;
`

export default StepImage
