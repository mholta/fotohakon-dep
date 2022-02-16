import React from 'react'
import styled from 'styled-components'
import { HomePageQueryNode } from '../../../pages'
import Image from '../../../components/gallery/image'
import Nav from '../../../components/nav'
import scrollTo from 'gatsby-plugin-smoothscroll'
import ArrowButton from '../../../components/elements/arrowButton'
import { withTheme } from '@material-ui/core'
import { CenterChild } from '../../../components/layout/layout'

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

        <CenterChild absolute>
          <h1 style={{ color: 'white' }}>{/* bryllupsbilder for livet */}</h1>
        </CenterChild>
        {/*   <ArrowButton direction="down" onClick={handleScrollDown} /> */}

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

const RelativeWrapper = withTheme(styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  ${(props) => props.theme.breakpoints.down('sm')} {
    & > div:first-child > *:first-child {
      width: 200%;
      max-width: 200%;
      left: -80%;
    }
    & > div:first-child {
      overflow: hidden;
    }
  }
`)

export default HomePageHeader
