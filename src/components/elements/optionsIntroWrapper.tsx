import React from 'react'
import styled from 'styled-components'

export const OptionsIntroWrapper = styled.div`
  & > h2 {
    font-size: 4rem;
  }
`
export const OptionsLabel = ({ children }: { children: React.ReactNode }) => {
  return <OptionsLabelHeading>{children}</OptionsLabelHeading>
}

const OptionsLabelHeading = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 1rem;
`
