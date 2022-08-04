import React from 'react'
import styled from 'styled-components/macro'
import { media } from 'styles/media'

interface Props {
  imgUrl: string
}

export default function DetailImage({ imgUrl }: Props) {
  return (
    <Wrapper>
      {imgUrl ? <BreedImage src={imgUrl} /> : 'Image not found!'}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 50vw;
  min-height: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;

  ${media.medium`
    width: 100vw;
    height: 50vw;
  `}
`

const BreedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid black;
`
