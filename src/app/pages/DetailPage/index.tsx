import Navbar from 'app/components/Navbar'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components/macro'
import { useParams } from 'react-router-dom'
import { useBreedsSlice } from '../../slices/breeds'
import { useDispatch, useSelector } from 'react-redux'
import { selectBreeds } from '../../slices/breeds/selectors'
import Footer from 'app/components/Footer'
import { sagaActions } from '../../slices/breeds/types'
import Detail from './features/Detail'
import { NotFoundPage } from 'app/components/NotFoundPage'

export function DetailPage() {
  const dispatch = useDispatch()
  const { actions } = useBreedsSlice()

  const breeds = useSelector(selectBreeds)

  /**
   * URL parameters
   */
  const params = useParams()

  /**
   * Gets the breed passed as parameter
   */
  const breed = breeds.filter(breed => breed.name === params['name'])

  /*
   * Loads breeds on mount
   */
  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_BREEDS_DATA_SAGA })
  }, [actions, dispatch])

  return (
    <>
      {breed.length === 1 ? (
        <>
          <Helmet>
            <title>Detail Page</title>
            <meta
              name="description"
              content="A Boilerplate application detail page"
            />
          </Helmet>
          <Navbar />
          <Wrapper>
            <Detail selectedBreed={breed[0]} />
          </Wrapper>
          <Footer />
        </>
      ) : (
        <>
          <NotFoundPage />
        </>
      )}
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
