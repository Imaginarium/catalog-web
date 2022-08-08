import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'types'
import { initialState } from '.'

export const selectBreeds = createSelector(
  [(state: RootState) => state.breeds || initialState],
  breeds => breeds.breeds,
)
