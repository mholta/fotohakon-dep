import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Container, Section } from '../../../../components/layout/layout'
import { CategoryPageQueryNode } from '../../../../pages'
import Category from '../category'
import CategoryTabButton from '../categoryButton'

interface TabsProps {
  children: Child[]
}

interface Child {
  props: ChildProps
}

interface ChildProps {
  label: string
  node: CategoryPageQueryNode
}

export const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label)
  const handleActiveTab = useCallback((label) => setActiveTab(label), [])

  const tabs = children.map((child: Child) => (
    <CategoryTabButton
      onClick={(e: any) => {
        e.preventDefault()
        handleActiveTab(child.props.label)
      }}
      className={
        child.props.label === activeTab
          ? ['tabs__tab', 'tabs__tab-active'].join(' ')
          : 'tabs__tab'
      }
      activeTab={child.props.label === activeTab}
      key={child.props.label}
      node={child.props.node}
    />
  ))

  return (
    <div>
      <Section>
        <TabsWrapper className="tabs__box">{tabs}</TabsWrapper>
      </Section>
      <Section>
        <Container style={{ minHeight: '200vh' }}>
          {children.map((child: Child, index: number) => (
            <Category
              key={'category-content-' + index}
              node={child.props.node}
              currentTab={child.props.label === activeTab}
            />
          ))}
        </Container>
      </Section>
    </div>
  )
}

const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -2rem;
  margin-bottom: 2rem;
  & > * {
    margin: 0 2rem;
  }
`

export const Tab = ({ children }: any) => {
  return <>{children}</>
}
