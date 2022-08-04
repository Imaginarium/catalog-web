export interface Favorite {
  id: string
  name: string
  img: string
}

export interface FavoritesState {
  favorites: Favorite[]
}
