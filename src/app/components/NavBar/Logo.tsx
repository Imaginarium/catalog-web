import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components/macro'
import iconImg from './assets/ic_launcher_round.png'

export default function Logo() {
  const navigate = useNavigate()

  return (
    <Wrapper onClick={() => navigate('/')}>
      <LogoImage src={iconImg} />
      <Title>CATalog</Title>
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
const Title = styled.span`
  color: white;
  padding-inline: 10px;
  font-size: 2rem;
`
