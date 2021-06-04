import { withTheme } from '@material-ui/core'
import { Link } from 'gatsby'
import styled from 'styled-components'

export const Button = withTheme(styled(Link)`
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
