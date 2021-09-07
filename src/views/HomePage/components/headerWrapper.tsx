import React from 'react'
import styled from 'styled-components'
import { HomePageQueryNode } from '../../../pages'
import Image from '../../../components/gallery/image'
import Nav from '../../../components/nav'
import Arrow from '../../../components/arrow'
import scrollTo from 'gatsby-plugin-smoothscroll'

interface HeaderWrapperProps {
  node: HomePageQueryNode
}

const HomePageHeader = ({ node }: HeaderWrapperProps) => {
  const handleScrollDown = () => {}

  return (
    <MainWrapper>
      <HomePageNavWrapper>
        <Nav white />
      </HomePageNavWrapper>
      <RelativeWrapper>
        <Image imageData={node.headerImage} absolute />

        {/*    <CenterChild absolute fullWidth bottom>
          <ArrowButton direction="down" onClick={handleScrollDown} />
        </CenterChild> */}
        <ArrowButton>
          <Arrow
            direction="down"
            onClick={() => {
              scrollTo('#section')
            }}
          />
        </ArrowButton>
      </RelativeWrapper>
    </MainWrapper>
  )
}

const ArrowButton = styled.div`
  position: absolute;
  bottom: 2rem;
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
