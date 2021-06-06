import React from 'react'
import styled from 'styled-components'

interface IndexPageProps {}

const IndexPage = ({}: IndexPageProps) => {
  return (
    <KommerWrapper>
      <h1>Kommer ...</h1>
    </KommerWrapper>
  )
}

const KommerWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-size: 4rem;
  }
`

export default IndexPage
export interface HomePageQueryNode {
  internTittel: string
  presentation: any
  headerImage: any
  profilePicture: any
}

export interface CategoryPageQueryNode {
  buttonText: string
  infoseksjon: any
  gallery: any[]
  buttonImage: any
  link: string
}
export interface CategoryPageQueryEdge {
  node: CategoryPageQueryNode
}

export type AllCategoryPageQueryNodes = CategoryPageQueryEdge[]
