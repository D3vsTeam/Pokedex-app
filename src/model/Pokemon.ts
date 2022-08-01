import { pokemonsColors } from "../theme";

export interface Pokemon {
  id?: number,
  name: string;
  url?: string;
  abilities: Ability[]
  base_experience: number
  forms: Form[]
  game_indices: Index[]
  height: number
  held_items: any[]
  is_default: boolean
  location_area_encounters: string
  order: number
  past_types: any[]
  species: Species
  sprites: Sprites
  weight: number
  types: Types[]
}

export interface Ability {
  ability: Ability
  is_hidden: boolean
  slot: number
  url: string
}
export interface Types {
  slot: number
  type: Type
}

export interface Type {
  name: TypeNames
  url: string
}

export type TypeNames = keyof typeof pokemonsColors

export interface Form {
  name: string
  url: string
}

export interface Index {
  game_index: number
  version: Version
}

export interface Version {
  name: string
  url: string
}


export interface VersionGroupDetail {
  level_learned_at: number
  move_learn_method: MoveLearnMethod
  version_group: VersionGroup
}

export interface MoveLearnMethod {
  name: string
  url: string
}

export interface VersionGroup {
  name: string
  url: string
}

export interface Species {
  name: string
  url: string
}

export interface Sprites {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}
