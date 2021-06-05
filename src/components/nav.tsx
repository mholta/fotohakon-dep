import { withTheme } from '@material-ui/core'
import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Logo.svg'
import ArrowBack from '../assets/ArrowBack.svg'

interface NavProps {
  noArrow?: boolean
}

const Nav = ({ noArrow }: NavProps) => {
  return (
    <NavWrapper>
      <InnerFlexWrapper>
        <MenuLinkWrapper>
          <LeftNavLinksWrapper>
            <div style={{ fontWeight: 'bold' }}>Priser:</div>
            <NavLink to="/bryllup">Bryllupspakker</NavLink>
            <NavLink to="/familiepar">Familie/par-pakker</NavLink>
          </LeftNavLinksWrapper>
          <NavLink to="/kontakt">Andre henvendelser</NavLink>
        </MenuLinkWrapper>
        <LogoAnimationWrapperLink to="/" noArrow={noArrow ?? false}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <ArrowBackWrapper>
            <ArrowBack />
          </ArrowBackWrapper>
        </LogoAnimationWrapperLink>
      </InnerFlexWrapper>
    </NavWrapper>
  )
}

const LeftNavLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > :not(:last-child) {
    margin-bottom: 0.2em;
  }
`

const ArrowBackWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 35%;
  padding: 0.4rem;
  display: flex;
  justify-content: center;
`

const LogoAnimationWrapperLink = styled(Link)<NavProps>`
  position: relative;
  display: flex;
  justify-content: center;
  & > div:first-child {
    opacity: 1;
    transition: opacity 200ms ease;
  }

  & > div:last-child {
    opacity: 0;
    transition: opacity 200ms ease;
  }
  ${(props) =>
    !props.noArrow &&
    `
  &:hover > div:first-child {
    opacity: 0;
  }
  &:hover > div:last-child {
    opacity: 1;
  }`}
`

const InnerFlexWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;

  justify-content: center;
`

const MenuLinkWrapper = styled.div`
  position: absolute;
  width: 100%;

  display: flex;
  align-items: flex-start;

  & > :last-child {
    margin-left: auto;
    margin-right: 0;
  }
`

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  margin-right: 2em;
  position: relative;

  &::after {
    content: '';
    height: 1px;
    width: 0%;
    background-color: black;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: width 200ms ease;
  }
  &:hover::after {
    width: 100%;
  }
`

const NavWrapper = withTheme(styled.nav`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem;

  z-index: 10;
`)

const LogoWrapper = withTheme(styled.div`
  font-size: 2rem;

  color: ${(props) => props.theme.palette.grey[900]};

  height: 3.3em;
  width: 10em;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    height: 20em;
    width: 12em;
    margin-top: -15.3em;
    margin-bottom: -16.1em;
    margin-left: -0.8em;
    margin-right: -0.8em;
  }
`)

export default Nav
