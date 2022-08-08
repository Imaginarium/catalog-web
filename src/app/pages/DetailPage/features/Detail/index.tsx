import { IconButton } from '@mui/material'
import Modal from '@mui/material/Modal'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { media } from 'styles/media'
import { styled as styledMUI } from '@mui/material/styles'
import { Breed } from 'app/slices/breeds/types'
import DetailImage from './features/DetailImage/DetailImage'
import DetailInfo from './features/DetailInfo/DetailInfo'

interface Props {
  selectedBreed: Breed
}

export default function Detail({ selectedBreed }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => window.scrollTo(0, 0), [])

  /**
   * Opens the fullscreen backdrop
   */
  const handleOpen = () => {
    // TODO Why is Modal/Backdrop not stopping scroll?
    document.documentElement.style.overflowY = 'hidden'
    setOpen(true)
  }

  /**
   * Closes the fullscreen backdrop
   */
  const handleClose = () => {
    // TODO Why is Modal/Backdrop not stopping scroll?
    document.documentElement.style.overflowY = 'auto'
    setOpen(false)
  }

  return (
    <>
      <Wrapper>
        <DetailImage imgUrl={selectedBreed.img} />
        <FullscreenButton onClick={handleOpen}>
          <Icon className="material-icons">fullscreen</Icon>
        </FullscreenButton>
        <DetailInfo breedInfo={selectedBreed} />
      </Wrapper>
      <Modal open={open} onClick={handleClose}>
        <FullscreenImage>
          <img src={selectedBreed.img} alt="Not found!" />
        </FullscreenImage>
      </Modal>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;

  ${media.medium`
    flex-wrap: wrap;
  `}
`

const FullscreenImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 60vw;
  max-height: 100vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Icon = styled.span``

const FullscreenButton = styledMUI(IconButton)({
  position: 'absolute',
  marginBlock: '10px',
  left: '45vw',
  color: 'black',

  '@media (max-width: 1024px)': {
    left: '95vw',
  },

  '@media (max-width: 600px)': {
    left: '90vw',
  },
})
