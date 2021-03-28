import React from 'react'
import styled from 'styled-components'
import { HomePageQueryNode } from '../../../pages'
import HeaderSlider from './headerSlider'
import { CenterChild } from '../../../components/layout/layout'
import ArrowButton from '../../../components/elements/arrowButton'

interface HeaderWrapperProps {
  node: HomePageQueryNode
}

const HeaderWrapper = ({ node }: HeaderWrapperProps) => {
  const handleScrollDown = () => {}

  return (
    <MainWrapper>
      <RelativeWrapper>
        <HeaderSlider node={node} speed={2} autoplay />
        <CenterChild absolute fullWidth bottom>
          <ArrowButton direction="down" onClick={handleScrollDown} />
        </CenterChild>
      </RelativeWrapper>
    </MainWrapper>
  )
}

const MainWrapper = styled.header`
  padding: 1rem;
`

const RelativeWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 67%;
`

export default HeaderWrapper
