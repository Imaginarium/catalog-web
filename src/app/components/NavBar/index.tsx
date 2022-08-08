import { useCounterSlice } from 'app/pages/HomePage/slice/counter'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components/macro'
import Logo from './features/Logo'
import Nav from './features/Nav'

export default function Navbar() {
  const dispatch = useDispatch()
  const { actions } = useCounterSlice()

  const navigate = useNavigate()

  /**
   * Handles navigation on the header
   *
   * @param name Optional - name of the selected breed
   */
  const navigateTo = (name?: string) => {
    if (name) {
      // TODO Why is Modal/Backdrop not stopping scroll?
      document.documentElement.style.overflowY = 'auto'
      navigate(`/breed/${name}`)
    } else {
      /* If no name is specfied return to home page
       * reseting the Infinite Scroll state
       */
      dispatch(actions.reset())
      navigate('/')
      window.scrollTo(0, 0)
    }
  }

  return (
    <Wrapper>
      <Logo handleNavigation={navigateTo} />
      <Nav handleNavigation={navigateTo} />
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
