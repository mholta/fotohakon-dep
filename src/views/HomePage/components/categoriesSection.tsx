import React from 'react'
import {
  AllCategoryPageQueryNodes,
  CategoryPageQueryEdge,
} from '../../../pages'
import { Tab, Tabs } from './categories/tabs'

interface CategorySectionProps {
  nodes: AllCategoryPageQueryNodes
}

const CategorySection = ({ nodes }: CategorySectionProps) => {
  return (
    <Tabs>
      {nodes.map((edge: CategoryPageQueryEdge, index: number) => (
        <Tab
          key={'category-' + index}
          label={'category' + index}
          node={edge.node}
        ></Tab>
      ))}
    </Tabs>
  )
}

export default CategorySection
