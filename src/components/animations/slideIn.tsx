import {
  ForwardRefComponent,
  HTMLMotionProps,
  motion,
  Transition,
  Variants,
} from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'

type Direction = 'left' | 'right' | 'none'

interface VariantProps {
  direction: Direction
  treshold: number
  rotateDeg: number
}

interface TransitionProps {
  duration: number
}

interface Point {
  x: number
  y: number
}

const calculatePoints = (treshold: number, rotateDeg: number): Point => {
  const rad = Math.round((Math.PI / 180) * rotateDeg * 100) / 100
  const sin = Math.sin(rad)
  const cos = Math.cos(rad)

  const x = Math.round(-treshold * cos * 10) / 10
  const y = Math.round(-treshold * sin * 10) / 10

  return { x, y }
}

const getVariants = ({
  direction,
  treshold,
  rotateDeg,
}: VariantProps): Variants => {
  if (direction)
    switch (direction) {
      case 'left':
        rotateDeg += 0
        break
      case 'right':
        rotateDeg += 180
        break
    }

  let p: Point = { x: -treshold, y: 0 }

  if (direction === 'none') p = { x: 0, y: 0 }
  else if (rotateDeg) p = calculatePoints(treshold, rotateDeg)

  return {
    hidden: { opacity: 0, x: p.x, y: p.y },
    visible: { opacity: 1, x: 0, y: 0 },
  }
}

const getTransition = ({ duration }: TransitionProps): Transition => {
  return {
    duration: duration,
    type: 'tween',
  }
}

interface SlideInProps extends Partial<VariantProps>, Partial<TransitionProps> {
  children: React.ReactChild[] | React.ReactChild
  parentInView?: boolean
  style?: React.CSSProperties
  component?: ForwardRefComponent<HTMLDivElement, HTMLMotionProps<any>>
}

export const SlideIntoView = ({
  children,
  direction,
  treshold,
  rotateDeg,
  duration,
  parentInView,
  style,
  component,
}: SlideInProps) => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true })

  const variantsProps: VariantProps = {
    direction: direction ?? 'left',
    treshold: (treshold ?? 4) * 3,
    rotateDeg: rotateDeg ?? 0,
  }

  const transitionProps: TransitionProps = {
    duration: (duration ?? 400) / 1000,
  }

  const variants: Variants = getVariants(variantsProps)
  const transition: Transition = getTransition(transitionProps)

  const Component = component ?? motion.div

  return (
    <Component
      variants={variants}
      transition={transition}
      initial="hidden"
      animate={
        (parentInView !== undefined ? parentInView : inView)
          ? 'visible'
          : 'hidden'
      }
      ref={ref}
      style={style}
    >
      {children}
    </Component>
  )
}
