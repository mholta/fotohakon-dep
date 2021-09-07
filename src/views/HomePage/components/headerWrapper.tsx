import React from 'react'
import styled from 'styled-components'
import { HomePageQueryNode } from '../../../pages'
import Image from '../../../components/gallery/image'
import Nav from '../../../components/nav'
import scrollTo from 'gatsby-plugin-smoothscroll'
import ArrowButton from '../../../components/elements/arrowButton'

interface HeaderWrapperProps {
  node: HomePageQueryNode
}

const HomePageHeader = ({ node }: HeaderWrapperProps) => {
  return (
    <MainWrapper>
      <HomePageNavWrapper>
        <Nav />
      </HomePageNavWrapper>
      <RelativeWrapper>
        <Image imageData={node.headerImage} absolute />

        {/*    <CenterChild absolute fullWidth bottom>
          <ArrowButton direction="down" onClick={handleScrollDown} />
        </CenterChild> */}
        <ArrowButtonWrapper>
          <ArrowButton
            onClick={() => scrollTo('#hei')}
            variant="light"
            direction="down"
          />
        </ArrowButtonWrapper>
      </RelativeWrapper>
    </MainWrapper>
  )
}

const ArrowButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 20;
  cursor: pointer;
`

const HomePageNavWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const MainWrapper = styled.header`
  height: 100vh;
`

const RelativeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

export default HomePageHeader
