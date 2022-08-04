import { IconButton, Tooltip } from '@mui/material'
import { Breed } from 'app/pages/HomePage/slice/breeds/types'
import { useFavoritesSlice } from 'app/pages/HomePage/slice/favorites'
import { selectFavorites } from 'app/pages/HomePage/slice/favorites/selectors'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { media } from 'styles/media'
import DetailStats from './DetailStats'
import DetailTraits from './DetailTraits'

interface Props {
  breedInfo: Breed
}

export default function DetailInfo({ breedInfo }: Props) {
  const dispatch = useDispatch()
  const { actions } = useFavoritesSlice()

  const favorites = useSelector(selectFavorites)

  /*
   * Loads favorites on startup
   */
  useEffect(() => {
    dispatch(actions.retrieveFavorties())
  }, [actions, dispatch])

  /**
   * Dispatchs actions to the store to manage favorites' state
   */
  const handleFavorites = () => {
    if (isInFavorites()) {
      dispatch(actions.removeFromFavorites(breedInfo.id))
    } else {
      dispatch(
        actions.addToFavorites({
          id: breedInfo.id,
          name: breedInfo.name,
          img: breedInfo.img,
        }),
      )
    }
  }
  /**
   * Checks whether the selected breed has been added to the favorites
   *
   * @returns true if breed in favorties, false otherwise
   */
  const isInFavorites = () => {
    return favorites.findIndex(item => item.id === breedInfo.id) !== -1
  }

  return (
    <Wrapper>
      <NameWrapper>
        <Name>{breedInfo.name}</Name>
        <IconButton
          onClick={handleFavorites}
          sx={{ marginInline: '16px', color: 'black' }}
        >
          <Tooltip
            title={
              isInFavorites()
                ? 'Click to remove from favorites!'
                : 'Click to add to favorites!'
            }
            arrow
          >
            <Icon className="material-icons">
              {isInFavorites() ? 'favorite' : 'favorite_outline'}
            </Icon>
          </Tooltip>
        </IconButton>
      </NameWrapper>

      <DetailTraits
        origin={breedInfo.origin}
        lifeSpan={breedInfo.lifeSpan}
        weight={breedInfo.weight}
        hypoallergenic={breedInfo.hypoallergenic}
      />
      <Description>{breedInfo.description}</Description>
      <DetailStats
        adaptability={breedInfo.adaptability}
        affectionLevel={breedInfo.affectionLevel}
        childFriendly={breedInfo.childFriendly}
        dogFriendly={breedInfo.dogFriendly}
        energyLevel={breedInfo.energyLevel}
        healthIssues={breedInfo.healthIssues}
        intelligence={breedInfo.intelligence}
        sheddingLevel={breedInfo.sheddingLevel}
        socialNeeds={breedInfo.socialNeeds}
        strangerFriendly={breedInfo.strangerFriendly}
        vocalisation={breedInfo.vocalisation}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 50vw;
  padding: 16px;

  ${media.medium`
  width: 100vw;
  `}
`

const NameWrapper = styled.span`
  display: flex;
  align-items: center;
`

const Name = styled.p`
  font-size: 2rem;
`

const Icon = styled.span`
  color: red;
`

const Description = styled.p`
  padding-block: 16px;
`
