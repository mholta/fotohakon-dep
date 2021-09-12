import React from 'react'
import Kjeks from './src/components/cookie'
import SaveForLaterButton from './src/components/saveForLater'

export const wrapRootElement = ({ element }) => (
  <>
    {element}
    <Kjeks />
  </>
)
