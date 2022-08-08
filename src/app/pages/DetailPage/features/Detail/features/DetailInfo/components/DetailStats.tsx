import React from 'react'
import styled from 'styled-components'
import Rating from './Rating'

interface Props {
  adaptability: number
  affectionLevel: number
  childFriendly: number
  dogFriendly: number
  energyLevel: number
  healthIssues: number
  intelligence: number
  sheddingLevel: number
  socialNeeds: number
  strangerFriendly: number
  vocalisation: number
}

export default function DetailStats({
  adaptability,
  affectionLevel,
  childFriendly,
  dogFriendly,
  energyLevel,
  healthIssues,
  intelligence,
  sheddingLevel,
  socialNeeds,
  strangerFriendly,
  vocalisation,
}: Props) {
  return (
    <Wrapper>
      <StatName>Adaptability</StatName>
      <Rating value={adaptability} />

      <StatName>Affection Level</StatName>
      <Rating value={affectionLevel} />

      <StatName>Child Friendly</StatName>
      <Rating value={childFriendly} />

      <StatName>Dog Friendly</StatName>
      <Rating value={dogFriendly} />

      <StatName>Energy Level</StatName>
      <Rating value={energyLevel} />

      <StatName>Health Issues</StatName>
      <Rating value={healthIssues} />

      <StatName>Intelligence</StatName>
      <Rating value={intelligence} />

      <StatName>Shedding Level</StatName>
      <Rating value={sheddingLevel} />

      <StatName>Social Needs</StatName>
      <Rating value={socialNeeds} />

      <StatName>Stranger Friendly</StatName>
      <Rating value={strangerFriendly} />

      <StatName>Vocalisation</StatName>
      <Rating value={vocalisation} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template: auto / max-content auto;
`

const StatName = styled.span``
