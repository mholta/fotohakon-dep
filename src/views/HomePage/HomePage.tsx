import React from 'react'
import { Container } from '../../components/layout/layout'
import { HomePageQueryNode } from '../../pages/indexx'
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
