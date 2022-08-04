import React from 'react'
import styled from 'styled-components/macro'
import Logo from './Logo'
import Nav from './Nav'

export default function Navbar() {
  return (
    <Wrapper>
      <Logo />
      <Nav />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: #1a237e;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 5rem;
  z-index: 2;
`
