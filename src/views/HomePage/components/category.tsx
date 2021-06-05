import { AnimatePresence, motion, Variants } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { Button } from '../../../components/elements/button'
import RandomGallery from '../../../components/gallery/randomGallery'
import MDRenderer from '../../../components/md/MDRenderer'
import { CategoryPageQueryNode } from '../../../pages'

interface CategoryProps {
  node: CategoryPageQueryNode
  currentTab: boolean
}

const Category = ({ node, currentTab }: CategoryProps) => {
  const [animateIn, setAnimateIn] = useState<boolean>(false)
  const [showActionButton, setShowActionButton] = useState<boolean>(false)
  const [allLoaded, setAllLoaded] = useState<boolean>(false)
  const hideShowActionButton = (inView: boolean) => {
    console.log(inView)
    if (showActionButton !== inView) setShowActionButton(inView)
  }

  /* Display action button when viewing photos */
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 200,
    trackVisibility: true,
  })

  useEffect(() => {
    if (inView !== showActionButton) {
      hideShowActionButton(inView)
    }
  }, [inView])

  useEffect(() => {
    setShowActionButton(allLoaded)
  }, [allLoaded])
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
        <Button to={'/' + node.link}>Fortell meg mer og se priser</Button>
      </InfoBlock>
      <AnimatePresence>
        {showActionButton && (
          <ActionButtonWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Button to={'/' + node.link}>Fortell meg mer og se priser</Button>
          </ActionButtonWrapper>
        )}
      </AnimatePresence>
      <div ref={ref}>
        <AnimatePresence>
          {currentTab && (
            <motion.div
              transition={{ delay: 0.8 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <RandomGallery node={node} callback={setAllLoaded} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

const ActionButtonWrapper = styled(motion.div)`
  position: fixed;
  z-index: 110;
  bottom: 0;
  padding-bottom: 2rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  & > * {
    box-shadow: 0px 1px 20px rgba(255, 255, 255, 0.2),
      0px 1px 40px rgba(255, 255, 255, 0.3);
  }
`
const InfoBlock = styled.div`
  max-width: 24rem;
  margin: 0 auto;
  margin-bottom: 6rem;
  text-align: center;

  & > h3 {
    font-size: 2.2rem;
    margin-bottom: 1.6rem;
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
