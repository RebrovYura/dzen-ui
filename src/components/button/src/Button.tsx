import React from 'react'
import { ButtonProps } from './Button.types'
import { StyledButton } from './Button.styled'

const Button = ({variant = "solid", text, size, isDisabled, onClick, ...props}: ButtonProps) => {
  return (
    <StyledButton disabled={isDisabled} size={size} onClick={onClick} {...props}>{text}</StyledButton>
  )
}

export default Button