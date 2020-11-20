import { SET_VALIDATION_TRUE, SET_VALIDATION_FALSE } from './actionTypes'

const setValidationTrue = (title) => ({
  type: SET_VALIDATION_TRUE,
  title,
})

const setValidationFalse = (title) => ({
  type: SET_VALIDATION_FALSE,
  title,
})

export { setValidationTrue, setValidationFalse }
