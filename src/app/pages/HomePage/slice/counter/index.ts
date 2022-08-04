import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useInjectReducer } from 'utils/redux-injectors'
import { CounterState } from './types'

const initialValue = 10

export const initialState: CounterState = {
  counter: initialValue,
}

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.counter += action.payload
    },
    reset(state) {
      state.counter = initialValue
    },
  },
})

export const { actions: counterAction, reducer } = slice

export const useCounterSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  return { actions: slice.actions }
}
