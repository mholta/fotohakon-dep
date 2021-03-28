import React from 'react'
import { HomePageQueryNode } from '../../pages'
import HeaderWrapper from './components/headerWrapper'
import PresentationSection from './components/presentationSection'

interface HomePageProps {
  node: HomePageQueryNode
}

const HomePage = ({ node }: HomePageProps) => {
  return (
    <>
      <HeaderWrapper node={node} />
      <PresentationSection node={node} />
    </>
  )
}

export default HomePage
