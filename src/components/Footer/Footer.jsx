import React from 'react'
import { styled } from 'styled-components'

const StyledFooter = styled.footer`
    width: 100%;
    text-align:center;
    min-height: 5%;
    margin: 2rem 0;
`

const Footer = () => {
  return <StyledFooter>Make with ❤️ for the MobProgramming team</StyledFooter>
}

export default Footer