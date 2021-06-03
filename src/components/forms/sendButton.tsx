import React from 'react'
import styled from 'styled-components'

interface SubmitButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const SubmitButton = ({ onClick }: SubmitButtonProps) => {
  return <SubmitButtonWrapper onClick={onClick}>Send</SubmitButtonWrapper>
}

const SubmitButtonWrapper = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  font-family: inherit;
  font-size: 1rem;
`

export default SubmitButton
