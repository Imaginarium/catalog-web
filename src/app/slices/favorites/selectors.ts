import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'types'
import { initialState } from '.'

export const selectFavorites = createSelector(
  [(state: RootState) => state.favorites || initialState],
  favorites =>
    [...favorites.favorites].sort((a, b) => a.name.localeCompare(b.name)),
)
