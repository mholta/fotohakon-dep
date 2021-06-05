import React, { CSSProperties, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

interface LoadMoreButtonProps {
  callback: Function
  sendState?: boolean
  hide?: boolean
  style?: CSSProperties
}

const LoadMoreButton = ({
  callback,
  sendState = false,
  hide = false,
  style,
}: LoadMoreButtonProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (sendState) {
      callback(inView)
      return
    }
    if (inView) callback()
  }, [inView])
  return (
    <TriggerElement ref={ref} style={style ?? {}} hide={hide}>
      {inView ? '' : ''}
    </TriggerElement>
  )
}

interface TriggerElementProps {
  hide?: boolean
}

const TriggerElement = styled.div<TriggerElementProps>`
  height: ${(props) => (props.hide ? '1px' : '40vh')};
`

export default LoadMoreButton
