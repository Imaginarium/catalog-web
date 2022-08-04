import React from 'react'
import styled from 'styled-components'
import { Rating as RatingMUI } from '@mui/material'

export default function Rating(props) {
  return (
    <Wrapper>
      <StyledRating
        name="read-only"
        value={props.value}
        icon={<FilledIcon className="material-icons">pets</FilledIcon>}
        emptyIcon={<EmptyIcon className="material-icons">pets</EmptyIcon>}
        readOnly
      />
    </Wrapper>
  )
}

const Wrapper = styled.div``

const StyledRating = styled(RatingMUI)({
  marginInline: '16px',
  '& .MuiRating-icon': {
    paddingInline: '24px',
  },
  '& .MuiRating-iconFilled': {
    color: '#000000',
  },

  '@media (max-width: 600px)': {
    '& .MuiRating-icon': {
      paddingInline: '8px',
    },
  },
})

const FilledIcon = styled.span`
  color: #000000;
`

const EmptyIcon = styled.span`
  color: #b0b0b0;
`
