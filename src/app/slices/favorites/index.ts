import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useInjectReducer } from 'utils/redux-injectors'
import { Favorite, FavoritesState } from './types'

export const initialState: FavoritesState = {
  favorites: [],
}

const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<Favorite>) {
      if (
        state.favorites.findIndex(item => item.id === action.payload.id) === -1
      ) {
        state.favorites.push(action.payload)
        //TODO Is it possible to improve? Use sagas?
        localStorage.setItem('favorites', JSON.stringify(state.favorites))
      }
    },
    removeFromFavorites(state, action: PayloadAction<string>) {
      if (
        state.favorites.findIndex(item => item.id === action.payload) !== -1
      ) {
        state.favorites = state.favorites.filter(
          item => item.id !== action.payload,
        )
        //TODO Is it possible to improve? Use sagas?
        localStorage.setItem('favorites', JSON.stringify(state.favorites))
      }
    },
    //TODO Is it possible to improve? Use sagas?
    retrieveFavorties(state) {
      state.favorites =
        localStorage.getItem('favorites') !== null
          ? JSON.parse(localStorage.getItem('favorites')!!).map(item => {
              const favorite: Favorite = {
                id: item.id,
                name: item.name,
                img: item.img,
              }
              return favorite
            })
          : []
    },
  },
})

export const { actions: favoritesAction, reducer } = slice

export const useFavoritesSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  return { actions: slice.actions }
}
