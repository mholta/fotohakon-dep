import { withTheme } from '@material-ui/core'
import { Link } from 'gatsby'
import styled from 'styled-components'

type ButtonSizes = 'small' | 'medium'

interface ButtonProps {
  size?: ButtonSizes
}

export const NewButton = withTheme(styled(Link)<ButtonProps>`
  font-family: 'Source Sans Pro, Helvetica';

  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.5rem;
  text-decoration: none;
  color: white;

  border: 3px solid #fff;
  background-color: rgba(255, 255, 255, 0.22);
  border-radius: 10rem;
  padding: 0.3rem 1rem;

  transition: transform 200ms ease;

  cursor: pointer;
  position: relative;

  overflow: hidden;

  &:hover {
    transform: scale(1.02);
  }
`)

export const Button = withTheme(styled(Link)<ButtonProps>`
  display: inline-block;
  font-size: 1rem;
  margin-top: 2rem;
  text-decoration: none;
  color: white;

  border: 2px solid ${(props) => props.theme.palette.grey[900]};
  background-color: ${(props) => props.theme.palette.grey[900]};
  border-radius: 10rem;
  padding: 0.5rem 1.5rem;

  transition: transform 200ms ease;

  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`)
