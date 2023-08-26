import React, { ReactNode } from 'react'
import { Container } from './styles'

interface ButtonGroupProps {
  children: ReactNode
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ children }) => {
  return <Container>{children}</Container>
}
