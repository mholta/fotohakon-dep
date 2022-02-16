import { withTheme } from '@material-ui/core'
import styled from 'styled-components'

interface SectionProps {
  lightGrey?: boolean
  large?: boolean
}

export const Section = withTheme(styled.section<SectionProps>`
  padding: ${(props) => (props.large ? 8 : 4)}rem 2rem;

  background-color: ${(props) =>
    props.lightGrey ? props.theme.palette.grey[200] : 'transparent'};
`)

type ContainerWidth = 'sm' | 'md'

interface ContainerProps {
  width?: ContainerWidth
}

export const Container = styled.div<ContainerProps>`
  max-width: ${(props) => {
    switch (props.width) {
      case 'sm':
        return `300px`
      default:
        return `940px`
    }
  }};
  margin: 0 auto;
`

interface CenterChildProps {
  absolute?: boolean
  fullWidth?: boolean
  bottom?: boolean
  top?: boolean
}

export const CenterChild = styled.div<CenterChildProps>`
  display: grid;
  place-items: center;
  height: 100%;
  ${(props) => (props.absolute ? `position: absolute;` : ``)}
  ${(props) => (props.fullWidth ? `left:0;width:100%;` : ``)}
  ${(props) => (props.bottom ? `bottom:0;` : ``)}
  ${(props) => (props.top ? `top:0;` : ``)}
`
