import { REGEXPS, LABELS } from '../data'

export const validateInput = (title, value) => {
  console.log(
    'phone',
    REGEXPS[title].test(value) &&
      value.match(/\d/g) &&
      value.match(/\d/g).length <= 11,
    'other',
    REGEXPS[title].test(value),
  )

  return title === LABELS.PHONE && value.match(/\d/g)
    ? REGEXPS[title].test(value) && value.match(/\d/g).length <= 11
    : REGEXPS[title].test(value)
}
