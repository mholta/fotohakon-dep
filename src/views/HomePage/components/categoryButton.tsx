import { withTheme } from '@material-ui/core'
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
    <TabImageButton className={className} onClick={onClick}>
      <ImageWrapper>
        <ButtonTextWrapper>
          <h2>{node.buttonText}</h2>
        </ButtonTextWrapper>
        <Image
          imageData={node.buttonImage}
          absolute
          darken={activeTab ? 0 : 0.6}
        />
      </ImageWrapper>
    </TabImageButton>
  )
}

const TabImageButton = styled.div`
  border: none;
  border-radius: 0;
  margin: 0;
  padding: 0;

  cursor: pointer;
  max-width: 100%;
  display: inline-block;

  transition: all 400ms ease-in-out;
  margin: 0 2rem;

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
`

const ButtonTextWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;

  & > h2 {
    font-weight: bold;
    font-size: 2rem;
    color: white;
    text-shadow: 0px 2px 10px rgba(0, 0, 0, 1), 0px 2px 24px rgba(0, 0, 0, 1);
  }
`

export default CategoryTabButton
