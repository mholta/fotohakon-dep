import { withTheme } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

interface LinkProps {
  fontWeight?: string
  light?: boolean
  marginH?: string
}

export const Link = withTheme(styled(GatsbyLink)<LinkProps>`
  color: inherit;
  font-size: inherit;

  text-decoration: none;
  cursor: pointer;
  display: inline-block;

  font-weight: ${(props) => props.fontWeight ?? 'inherit'};

  position: relative;

  padding: 0.3em 0;
  margin: -0.3em ${(props) => props.marginH ?? 0};

  &::before {
    content: '';
    height: 1px;

    width: 100%;
    --border-color: ${(props) =>
      props.light
        ? props.theme.palette.secondary.main
        : props.theme.palette.secondary.dark};
    background: repeating-linear-gradient(
      90deg,
      var(--border-color),
      var(--border-color) 0.7em,
      transparent 0.7em,
      transparent 1.4em
    );
    position: absolute;
    left: 0;
    bottom: 0;
    transition: width 200ms ease;
  }

  &:hover::before {
  }

  &::after {
    content: '';
    height: 1px;
    width: 0%;
    background-color: ${(props) =>
      props.light ? 'white' : props.theme.palette.primary.dark};
    position: absolute;
    left: 0;
    bottom: 0;
    transition: width 200ms ease;
  }

  &:hover::after {
    width: 100%;
  }
`)
