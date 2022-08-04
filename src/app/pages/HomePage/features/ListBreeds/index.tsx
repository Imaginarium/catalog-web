import React, { useEffect, useState } from 'react'
import BreedCard from './components/BreedCard'
import styled from 'styled-components/macro'
import { useBreedsSlice } from '../../slice/breeds'
import { useDispatch, useSelector } from 'react-redux'
import { selectBreeds } from '../../slice/breeds/selectors'
import { useNavigate } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'
import { sagaActions } from '../../slice/breeds/types'
import { useFavoritesSlice } from '../../slice/favorites'
import { selectFavorites } from '../../slice/favorites/selectors'
import { CircularProgress } from '@mui/material'
import { useCounterSlice } from '../../slice/counter'
import { selectCount } from '../../slice/counter/selector'

export default function ListBreeds(props) {
  const dispatch = useDispatch()
  const breedActions = useBreedsSlice().actions
  const favoriteActions = useFavoritesSlice().actions
  const counterActions = useCounterSlice().actions

  const breeds = useSelector(selectBreeds)
  const favorites = useSelector(selectFavorites)
  const numItems = useSelector(selectCount)

  console.log(numItems)
  //const [numItems, setNumItems] = useState(10)

  const navigate = useNavigate()

  /*
   * Loads breeds on startup
   */
  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_BREEDS_DATA_SAGA })
  }, [breedActions, dispatch])

  /*
   * Loads favorites on startup
   */
  useEffect(() => {
    dispatch(favoriteActions.retrieveFavorties())
  }, [favoriteActions, dispatch])

  /**
   * Transforms the state into displayable components
   *
   * 1. Filters array based searchbar value
   * 2. Gets current number of displayed items (based on InfiniteScroll)
   * 3. Maps Breeds state to JSX elements
   */
  let breedElements: any[] = breeds
    .filter(breed =>
      breed.name.toLowerCase().startsWith(props.filteredName.toLowerCase()),
    )
    .slice(0, numItems)
    .map(breed => (
      <BreedCard
        key={breed.id}
        breedImage={breed.img}
        breedTitle={breed.name}
        breedDescription={breed.description}
        isFavorite={favorites.findIndex(item => item.id === breed.id) !== -1}
        handleNavigation={() => navigateTo(breed.name)}
        handleFavorites={() => manageFavorites(breed.id, breed.name, breed.img)}
      />
    ))

  /**
   * Adds more elements to the list if scroll has reached threshold and there's items to show
   */
  const loadFunc = () => {
    //setNumItems(prevState => prevState + 10)
    dispatch(counterActions.increment(10))
  }

  /**
   * Opens the detail page of the specified breed
   */
  const navigateTo = (name: string) => {
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

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadFunc}
      hasMore={numItems < breeds.length}
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
