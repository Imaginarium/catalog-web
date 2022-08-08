import React from 'react'
import styled from 'styled-components/macro'
import iconImg from './assets/ic_launcher_round.png'

interface Props {
  handleNavigation: () => void
}

export default function Logo({ handleNavigation }: Props) {
  return (
    <Wrapper onClick={() => handleNavigation()}>
      <LogoImage src={iconImg} />
      <LogoTitle>CATalog</LogoTitle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
`

const LogoImage = styled.img`
  width: 60px;
`
const LogoTitle = styled.span`
  color: white;
  padding-inline: 10px;
  font-size: 2rem;
`
