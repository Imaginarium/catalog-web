import { Tooltip } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { media } from 'styles/media'

interface Props {
  origin: string
  lifeSpan: string
  weight: string
  hypoallergenic: boolean
}

export default function DetailTraits({
  origin,
  lifeSpan,
  weight,
  hypoallergenic,
}: Props) {
  return (
    <TraitsWrapper>
      <TraitWrapper>
        <Tooltip title="Its place of origin" arrow>
          <Icon className="material-icons">place</Icon>
        </Tooltip>
        {origin}
      </TraitWrapper>
      <TraitWrapper>
        <Tooltip title="Its average lifespan" arrow>
          <Icon className="material-icons">local_hospital</Icon>
        </Tooltip>
        {`${lifeSpan} years`}
      </TraitWrapper>
      <TraitWrapper>
        <Tooltip title="Its average weight" arrow>
          <Icon className="material-icons">scale</Icon>
        </Tooltip>
        {`${weight} kgs`}
      </TraitWrapper>
      {hypoallergenic && (
        <TraitWrapper>
          <Icon className="material-icons">health_and_safety</Icon>
          Hypoallergenic
        </TraitWrapper>
      )}
    </TraitsWrapper>
  )
}

const TraitsWrapper = styled.span`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-block: 8px;
`

const Icon = styled.span`
  margin-right: 4px;
`

const TraitWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 16px;

  ${media.small`
    width: 100vw;
    margin-block: 4px;
  `}
`
