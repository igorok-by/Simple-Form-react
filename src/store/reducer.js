import {
  CLEAN_FILMS_DATA,
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
} from './actionTypes'

import { INITIAL_STATE } from '../data/constants'

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLEAN_FILMS_DATA:
      return {
        ...state,
        films: [],
      }

    case FETCH_FILMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case FETCH_FILMS_SUCCESS:
      const { isValidSearchValue, items, totalResults } = action.payload

      return {
        ...state,
        isValidSearchValue: isValidSearchValue,
        films: [...state.films, ...items],
        totalResults: totalResults,
        loading: false,
        error: null,
      }

    default:
      return state
  }
}

export default reducer
