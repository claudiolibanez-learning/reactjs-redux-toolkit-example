import { Product } from "./@types"

export const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  ERROR: 'error'
}

export const initialState = {
  data: [] as Product[],
  status: STATUS.IDLE,
}