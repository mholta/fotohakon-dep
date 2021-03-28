import { AnimatePresence, motion, Variants } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RandomGallery from '../../../components/gallery/randomGallery'
import MDRenderer from '../../../components/md/MDRenderer'
import { CategoryPageQueryNode } from '../../../pages'

interface CategoryProps {
  node: CategoryPageQueryNode
  currentTab: boolean
}

const Category = ({ node, currentTab }: CategoryProps) => {
  const [animateIn, setAnimateIn] = useState<boolean>(false)

  useEffect(() => {
    setAnimateIn(currentTab)
  }, [currentTab])

  return (
    <motion.div
      transition={{ duration: animationDuration }}
      initial="initial"
      animate={animateIn ? 'in' : 'out'}
      variants={categoryTabContentVariant}
    >
      <InfoBlock>
        <MDRenderer>{node.infoseksjon}</MDRenderer>
      </InfoBlock>
      <AnimatePresence>
        {currentTab && (
          <motion.div
            transition={{ delay: 0.8 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <RandomGallery node={node} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const InfoBlock = styled.div`
  max-width: 18rem;
  margin: 0 auto;
  margin-bottom: 6rem;
  text-align: center;

  & > * {
    margin: 1rem 0;
  }
`

export default Category

const animationDuration: number = 0.6
const categoryTabContentVariant: Variants = {
  initial: {
    opacity: 0,
  },
  in: {
    display: 'block',
    scale: 1,
    opacity: 1,
    transition: {
      duration: animationDuration / 2,
      delay: animationDuration / 2 + 0.1,
    },
  },
  out: {
    opacity: 0,
    transition: { duration: animationDuration / 2 },
    transitionEnd: {
      display: 'none',
    },
  },
}
