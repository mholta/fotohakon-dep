import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../assets/Logo.svg'
import ArrowBack from '../assets/ArrowBack.svg'
import { Link } from 'gatsby'

interface LogoTopProps {}

const LogoTop = ({}: LogoTopProps) => {
  return (
    <Header>
      <Link to="/">
        <LogoWrapper>
          <Logo />
          <ArrowBackWrapper>
            <ArrowBack />
          </ArrowBackWrapper>
        </LogoWrapper>
      </Link>
    </Header>
  )
}

const ArrowBackWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  padding: 0.4rem;
  display: flex;
  justify-content: center;
`

const LogoWrapper = styled.div`
  position: relative;

  & > svg {
    opacity: 1;
    transition: opacity 200ms ease;
  }

  &:hover > svg {
    opacity: 0;
  }

  & > div {
    opacity: 0;
    transition: opacity 200ms ease;
  }
  &:hover > div {
    opacity: 1;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 2rem;
`

export default LogoTop
