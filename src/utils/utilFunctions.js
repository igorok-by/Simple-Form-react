import { REGEXPS, LABELS } from '../data'

export const validateInput = (title, value) =>
  title === LABELS.PHONE && value.match(/\d/g)
    ? REGEXPS[title].test(value) && value.match(/\d/g).length <= 11
    : REGEXPS[title].test(value)
