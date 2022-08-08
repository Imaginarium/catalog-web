import React from 'react'
import styled from 'styled-components'
import { TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import { styled as styledMUI } from '@mui/material/styles'

export default function Searchbar(props) {
  return (
    <Wrapper>
      <SearchbarEl
        type="search"
        variant="outlined"
        label="Search by Breed Name"
        placeholder="Text"
        autoComplete="off"
        onChange={props.handleInput}
        value={props.initialValue}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className="material-icons">search</SearchIcon>
            </InputAdornment>
          ),
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const SearchIcon = styled.span``

const SearchbarEl = styledMUI(TextField)({
  width: '40vw',
  margin: '16px',

  '@media (max-width: 600px)': {
    width: '350px',
  },
})
