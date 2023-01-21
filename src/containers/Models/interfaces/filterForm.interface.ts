import { FILTER_TYPES } from "@modules/shared/constant"

export interface ModelFilterForm {
  filterType: FILTER_TYPES
  likes: FormLikes
}

export type FormLikes = { min: number; max: number }
