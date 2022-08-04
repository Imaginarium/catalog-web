export interface Breed {
  id: string
  img: string
  name: string
  origin: string
  lifeSpan: string
  weight: string
  hypoallergenic: boolean
  description: string
  adaptability: number
  affectionLevel: number
  childFriendly: number
  dogFriendly: number
  energyLevel: number
  healthIssues: number
  intelligence: number
  sheddingLevel: number
  socialNeeds: number
  strangerFriendly: number
  vocalisation: number
  wikipediaUrl: string
}

export interface BreedsState {
  breeds: Breed[]
}

export const sagaActions = {
  FETCH_BREEDS_DATA_SAGA: 'FETCH_BREEDS_DATA_SAGA',
}
