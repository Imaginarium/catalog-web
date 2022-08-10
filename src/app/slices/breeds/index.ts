import { createSlice } from '@reduxjs/toolkit'
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'
import { Breed, BreedsState } from './types'
import { PayloadAction } from '@reduxjs/toolkit'
import { getBreedsSaga } from './saga'

export const initialState: BreedsState = {
  breeds: [],
}

const slice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    getBreeds(state, action: PayloadAction<Breed[]>) {
      state.breeds = action.payload
    },
  },
})

export const { actions: breedsAction, reducer } = slice

export const useBreedsSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: getBreedsSaga })
  return { actions: slice.actions }
}
