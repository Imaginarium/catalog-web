import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'types'
import { initialState } from '.'

export const selectCount = createSelector(
  [(state: RootState) => state.counter || initialState],
  counter => counter.counter,
)
