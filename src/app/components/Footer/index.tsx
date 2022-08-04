import React from 'react'
import styled from 'styled-components/macro'

export default function Footer() {
  return (
    <Wrapper>
      <Copyright>Copyright &copy; 2022 Miguel Miranda</Copyright>
    </Wrapper>
  )
}

/*

*/

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a237e;
  height: 3rem;
`

const Copyright = styled.p`
  color: white;
`
