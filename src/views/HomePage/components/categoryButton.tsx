import { ButtonBase } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import Image from '../../../components/gallery/image'
import { CategoryPageQueryNode } from '../../../pages'

interface CategoryTabButtonProps {
  node: CategoryPageQueryNode
  className: string
  onClick: any
  activeTab: boolean
}

const CategoryTabButton = ({
  node,
  className,
  onClick,
  activeTab,
}: CategoryTabButtonProps) => {
  return (
    <TabImageButton className={className} onClick={onClick} disableRipple>
      <ImageWrapper>
        <Image imageData={node.buttonImage} absolute bw={!activeTab} />
        <ButtonText> {node.buttonText}</ButtonText>
      </ImageWrapper>
    </TabImageButton>
  )
}

const TabImageButton = styled(ButtonBase)`
  max-width: 100%;
  transition: all 400ms ease-in-out;
  &:hover {
    transform: scale(1.02);
    box-shadow: 1px 0px 10rem rgba(0, 0, 0, 0.1);
    z-index: 100;
  }
  &:active {
    transform: scale(0.98);
    z-index: 100;
  }
`

const ImageWrapper = styled.div`
  width: 16rem;
  padding-bottom: 67%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonText = styled.div`
  position: relative;
  z-index: 5;
`

export default CategoryTabButton
