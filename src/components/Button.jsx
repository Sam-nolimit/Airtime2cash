import React from 'react'
import { ButtonStyle } from '../styles/ButtonStyle'

const Button = ({text, clickHandle, flag, radius, width, btnState}) => {

  return (
    <ButtonStyle flag={flag} type="button" onClick={clickHandle} style={{borderRadius:`${radius}`, width:`${width}px`}} disabled={btnState}>{text}</ButtonStyle>
  )
}

export default Button