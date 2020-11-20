import { SET_VALIDATION_TRUE, SET_VALIDATION_FALSE } from './actionTypes'
import { LABELS, INPUT_STATE_KEYS } from '../data'

const { NAME, EMAIL, PHONE, LANG, CONDITIONS } = LABELS

const initialState = {
  [INPUT_STATE_KEYS[NAME]]: false,
  [INPUT_STATE_KEYS[EMAIL]]: false,
  [INPUT_STATE_KEYS[PHONE]]: false,
  [INPUT_STATE_KEYS[LANG]]: false,
  [INPUT_STATE_KEYS[CONDITIONS]]: false,
}

const reducer = (state = initialState, action = {}) => {
  const { title } = action

  switch (action.type) {
    case SET_VALIDATION_TRUE:
      return title ? { ...state, [INPUT_STATE_KEYS[title]]: true } : state

    case SET_VALIDATION_FALSE:
      return title ? { ...state, [INPUT_STATE_KEYS[title]]: false } : state

    default:
      return state
  }
}

export default reducer
