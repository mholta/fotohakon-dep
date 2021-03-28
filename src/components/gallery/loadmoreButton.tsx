import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

interface LoadMoreButtonProps {
  callback: Function
  hide?: boolean
}

const LoadMoreButton = ({ callback, hide = false }: LoadMoreButtonProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView) callback()
  }, [inView])
  return <TriggerElement ref={ref}>{inView ? 'Hallo' : 0}</TriggerElement>
}

const TriggerElement = styled.div`
  height: 40vh;
`

export default LoadMoreButton
