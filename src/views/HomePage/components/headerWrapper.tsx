import React from 'react'
import styled from 'styled-components'
import { HomePageQueryNode } from '../../../pages/indexx'
import { CenterChild } from '../../../components/layout/layout'
import ArrowButton from '../../../components/elements/arrowButton'
import Image from '../../../components/gallery/image'
import Logo from '../../../assets/Logo.svg'
import { withTheme } from '@material-ui/core'
import Nav from '../../../components/nav'

interface HeaderWrapperProps {
  node: HomePageQueryNode
}

const HeaderWrapper = ({ node }: HeaderWrapperProps) => {
  const handleScrollDown = () => {}

  return (
    <MainWrapper>
      <HomePageNavWrapper>
        <Nav noArrow />
      </HomePageNavWrapper>
      <RelativeWrapper>
        <Image imageData={node.headerImage} absolute />

        {/*    <CenterChild absolute fullWidth bottom>
          <ArrowButton direction="down" onClick={handleScrollDown} />
        </CenterChild> */}
      </RelativeWrapper>
    </MainWrapper>
  )
}

const HomePageNavWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const MainWrapper = styled.header`
  padding: 1rem;
  height: 100vh;
`

const RelativeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export default HeaderWrapper
