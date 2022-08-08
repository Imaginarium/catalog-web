import React, { useEffect } from 'react'
import CardBreed from './components/CardBreed/CardBreed'
import styled from 'styled-components/macro'
import { useBreedsSlice } from '../../../../slices/breeds'
import { useDispatch, useSelector } from 'react-redux'
import { selectBreeds } from '../../../../slices/breeds/selectors'
import { useNavigate } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'
import { sagaActions } from '../../../../slices/breeds/types'
import { useFavoritesSlice } from '../../../../slices/favorites'
import { selectFavorites } from '../../../../slices/favorites/selectors'
import { CircularProgress } from '@mui/material'
import { useCounterSlice } from '../../slice/counter'
import { selectCount } from '../../slice/counter/selector'

interface Props {
  filteredName: string
}

export default function ListBreeds({ filteredName }: Props) {
  const dispatch = useDispatch()
  const breedActions = useBreedsSlice().actions
  const favoriteActions = useFavoritesSlice().actions
  const counterActions = useCounterSlice().actions

  const breeds = useSelector(selectBreeds)
  const favorites = useSelector(selectFavorites)
  const numItems = useSelector(selectCount)

  const navigate = useNavigate()

  /*
   * Loads breeds on mount
   */
  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_BREEDS_DATA_SAGA })
  }, [breedActions, dispatch])

  /*
   * Loads favorites on mount
   */
  useEffect(() => {
    dispatch(favoriteActions.retrieveFavorties())
  }, [favoriteActions, dispatch])

  /**
   * Adds more elements to the list if scroll has reached threshold and there's items to show
   */
  const loadFunc = () => {
    dispatch(counterActions.increment(10))
  }

  /**
   * Opens the detail page of the specified breed
   */
  function navigateTo(name: string) {
    navigate(`/breed/${name}`)
  }

  /**
   *Manages the favorites state
   *
   * @param id Identifier of the breed to be added to or removed from the favorites
   */
  function manageFavorites(id: string, name: string, img: string) {
    if (favorites.findIndex(item => item.id === id) !== -1) {
      dispatch(favoriteActions.removeFromFavorites(id))
    } else {
      dispatch(favoriteActions.addToFavorites({ id: id, name: name, img: img }))
    }
  }

  /**
   * Transforms the state into displayable components
   *
   * 1. Filters array based searchbar value
   * 2. Gets current number of displayed items (based on InfiniteScroll)
   * 3. Maps Breeds state to JSX elements
   */
  let breedElements: any[] = breeds
    .filter(breed =>
      breed.name.toLowerCase().startsWith(filteredName.toLowerCase()),
    )
    .slice(0, numItems)
    .map(breed => (
      <CardBreed
        key={breed.id}
        breedImage={breed.img}
        breedTitle={breed.name}
        breedDescription={breed.description}
        isFavorite={favorites.findIndex(item => item.id === breed.id) !== -1}
        handleNavigation={() => navigateTo(breed.name)}
        handleFavorites={() => manageFavorites(breed.id, breed.name, breed.img)}
      />
    ))

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadFunc}
      hasMore={numItems < breeds.length}
      threshold={500}
      loader={
        <LoadItems className="loader" key={0}>
          <CircularProgress />
        </LoadItems>
      }
    >
      <Wrapper>
        {breedElements.length > 0 ? breedElements : <CircularProgress />}
      </Wrapper>
    </InfiniteScroll>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding-block: 24px;
`

const LoadItems = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 32px;
`
