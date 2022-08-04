import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
} from '@mui/material'
import React from 'react'
import styled from 'styled-components/macro'
import { useSnackbar } from 'notistack'

interface Props {
  breedImage: string
  breedTitle: string
  breedDescription: string
  isFavorite: boolean
  handleNavigation: () => void
  handleFavorites: () => void
}

export default function BreedCard({
  breedImage,
  breedTitle,
  breedDescription,
  isFavorite,
  handleNavigation,
  handleFavorites,
}: Props) {
  const { enqueueSnackbar } = useSnackbar()

  /**
   * Manages favorites on icon clicked
   *
   * @param event Event triggered on click
   */
  const manageFavorites = event => {
    event.stopPropagation()
    handleFavorites()
    presentSnackbar()
  }

  /**
   *
   */
  const presentSnackbar = () => {
    const message: string = isFavorite
      ? 'Removed from favorites!'
      : 'Added to favorites!'
    enqueueSnackbar(message, {
      autoHideDuration: 1000,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center',
      },
    })
  }

  return (
    <Card
      sx={{ width: 350, marginBottom: 4, cursor: 'pointer' }}
      onClick={handleNavigation}
    >
      <CardMedia
        component="img"
        height="200"
        image={breedImage}
        alt="Image not found!"
      />
      <CardHeader
        action={
          <IconButton onClick={manageFavorites}>
            <Icon className="material-icons">
              {isFavorite ? 'favorite' : 'favorite_outline'}
            </Icon>
          </IconButton>
        }
        title={breedTitle}
      />
      <CardContent>
        <Description>{breedDescription}</Description>
      </CardContent>
    </Card>
  )
}

const Icon = styled.span`
  color: #ff0000;
`

const fontSize = '1rem'
const lineHeight = 1.1
const linesToShow = 3

const Description = styled.p`
  display: block; /* Fallback for non-webkit */
  display: -webkit-box;
  height: ${fontSize}*${lineHeight}*${linesToShow}; /* Fallback for non-webkit */
  font-size: ${fontSize};
  line-height: ${lineHeight};
  -webkit-line-clamp: ${linesToShow};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
