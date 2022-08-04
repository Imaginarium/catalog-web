import { createSlice } from '@reduxjs/toolkit'
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'
import { BreedsState } from './types'
import { PayloadAction } from '@reduxjs/toolkit'
import { getBreedsSaga } from './saga'

export const initialState: BreedsState = {
  breeds: [],
}

const slice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    getBreeds(state, action: PayloadAction<any[]>) {
      state.breeds = action.payload.map(breed => ({
        id: breed.id,
        img: breed.image ? breed.image.url : '',
        name: breed.name,
        origin: breed.origin,
        lifeSpan: breed.life_span,
        weight: breed.weight.metric,
        hypoallergenic: breed.hypoallergenic === 1 ? true : false,
        description: breed.description,
        adaptability: breed.adaptability,
        affectionLevel: breed.affection_level,
        childFriendly: breed.child_friendly,
        dogFriendly: breed.dog_friendly,
        energyLevel: breed.energy_level,
        healthIssues: breed.health_issues,
        intelligence: breed.intelligence,
        sheddingLevel: breed.shedding_level,
        socialNeeds: breed.social_needs,
        strangerFriendly: breed.stranger_friendly,
        vocalisation: breed.vocalisation,
        wikipediaUrl: breed.wikipedia_url ? breed.wikipedia_url : '',
      }))
    },
  },
})

export const { actions: breedsAction, reducer } = slice

export const useBreedsSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: getBreedsSaga })
  return { actions: slice.actions }
}
