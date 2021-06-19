import { ButtonBase, withTheme } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import MDRenderer from '../md/MDRenderer'
import CheckMarkIcon from '../../assets/checkmark.svg'

interface SelectCardProps {
  node: any
  selected?: boolean
  onClick?: Function
  summary?: boolean
}

const SelectionCard = ({
  node,
  selected,
  onClick,
  summary,
}: SelectCardProps) => {
  const [hover, setHover] = useState<boolean>(false)
  return (
    <CardWrapper
      selected={selected ? 1 : 0}
      disableRipple
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      summary={summary ? 1 : 0}
    >
      {(summary ? 1 : 0) ? (
        <h4>{node.title}</h4>
      ) : (
        <>
          <CheckMark selected={selected ? 1 : 0} hover={hover}>
            <CheckMarkIcon />
          </CheckMark>
          <MDRenderer>{node.content}</MDRenderer>
        </>
      )}
    </CardWrapper>
  )
}

interface SelectProps {
  selected?: boolean
  hover?: boolean
  summary?: boolean
}

const CheckMark = withTheme(
  styled.div<SelectProps>`
    transition: opacity 200ms ease, color 200ms ease;
    opacity: ${(props) => (props.selected || props.hover ? 1 : 0)};
    color: ${(props) => props.theme.palette.grey[props.selected ? 900 : 400]};
    position: absolute;
    top: -2.2rem;
    right: -0.2rem;
  `
)

const CardWrapper = withTheme(
  styled(ButtonBase)<SelectProps>`
    transition: border-color 200ms ease, transform 200ms ease;
    border: ${(props) => (props.summary ? 3 : 6)}px solid
      ${(props) => props.theme.palette.grey[props.selected ? 900 : 400]};
    padding: ${(props) => (props.summary ? 0.6 : 2)}rem;
    position: relative;
    background-color: transparent;
    cursor: pointer;
    text-align: left;
    ${(props) => !props.summary && 'flex: 1;'}
    min-width: ${(props) => (props.summary ? 2 : 20)}rem;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-size: 1rem;

    &:active {
      transform: scale(0.98);
    }

    & > :last-child {
      margin-top: auto;
    }
    & > :not(:last-child) {
      margin-bottom: 0.8rem;
    }

    & > h4 {
      margin-top: 0;
      font-size: ${(props) => (props.summary ? 1.2 : 1.8)}rem;
    }
    & > ul {
      padding-left: 1rem;
    }
  `
)

export default SelectionCard
