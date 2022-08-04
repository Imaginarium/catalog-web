import Footer from 'app/components/Footer'
import Navbar from 'app/components/Navbar'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components/macro'
import ListBreeds from './features/ListBreeds'
import Searchbar from './features/Searchbar'

export function HomePage() {
  const [filterName, setFilterName] = useState('')

  const updateFilteredName = event => {
    setFilterName(event.target.value)
  }

  useEffect(() => {
    // TODO Needs to scroll to top
    console.log('Entrei')
    //window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Navbar />
      <Wrapper>
        <Searchbar handleInput={updateFilteredName} initialValue={filterName} />
        <ListBreeds filteredName={filterName} />
      </Wrapper>
      <Footer />
    </>
  )
}

const Wrapper = styled.div`
  margin-top: 5rem; // Because header is fixed, so need to add "filler" space

  // TODO not working properly with mobile devices
  // So footer stays at the bottom if not enough content

  min-height: -moz-calc(100vh - 8rem);
  min-height: -o-calc(100vh - 8rem);
  min-height: -webkit-calc(100vh - 8rem);
  min-height: calc(100vh - 8rem);
`
