import React from 'react'
import styled from 'styled-components'
import { HomePageQueryNode } from '../../../pages'
import { CenterChild } from '../../../components/layout/layout'
import ArrowButton from '../../../components/elements/arrowButton'
import Image from '../../../components/gallery/image'
import Logo from '../../../assets/Logo.svg'

interface HeaderWrapperProps {
  node: HomePageQueryNode
}

const HeaderWrapper = ({ node }: HeaderWrapperProps) => {
  const handleScrollDown = () => {}

  return (
    <MainWrapper>
      <RelativeWrapper>
        <LogoWrapper absolute fullWidth top>
          <Logo />
        </LogoWrapper>
        <Image imageData={node.headerImage} absolute />

        {/*    <CenterChild absolute fullWidth bottom>
          <ArrowButton direction="down" onClick={handleScrollDown} />
        </CenterChild> */}
      </RelativeWrapper>
    </MainWrapper>
  )
}

const LogoWrapper = styled(CenterChild)`
  top: 2rem;
  z-index: 10;
`

const MainWrapper = styled.header`
  padding: 1rem;
`

const RelativeWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 67%;
`

export default HeaderWrapper
