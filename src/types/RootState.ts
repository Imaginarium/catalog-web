// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { BreedsState } from 'app/pages/HomePage/slice/breeds/types'
import { CounterState } from 'app/pages/HomePage/slice/counter/types'
import { FavoritesState } from 'app/pages/HomePage/slice/favorites/types'

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  breeds?: BreedsState
  favorites?: FavoritesState
  counter?: CounterState
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
