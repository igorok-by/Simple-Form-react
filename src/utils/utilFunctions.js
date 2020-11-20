import { LABELS } from '../data'

const { NAME, EMAIL, PHONE } = LABELS

export const validateInput = (title, value) => {
  switch (title) {
    case NAME:
      if (value) return true
      break
    case EMAIL:
      if (value) return true
      break
    case PHONE:
      if (value) return true
      break
    default:
      return
  }
}
