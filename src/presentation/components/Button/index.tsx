import React from 'react'
import { Container } from './styles'

type ButtonProps = {
  color?: 'secondary' | 'primary'
  onClick?: () => void
  children?: React.ReactNode
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  children,
  onClick,
  disabled,
  ...props
}) => {
  return (
    <Container disabled={disabled} onClick={onClick} color={color} {...props}>
      {children}
    </Container>
  )
}
