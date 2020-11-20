export const LABELS = {
  NAME: 'Имя',
  EMAIL: 'Email',
  PHONE: 'Номер телефона',
  LANG: 'Язык',
  CONDITIONS: 'Условия',
}

export const INPUT_STATE_KEYS = {
  [LABELS.NAME]: 'isValidatedName',
  [LABELS.EMAIL]: 'isValidatedEmail',
  [LABELS.PHONE]: 'isValidatedPhone',
  [LABELS.LANG]: 'isLanguageSelected',
  [LABELS.CONDITIONS]: 'isConditionsChecked',
}

export const PLACEHOLDERS = {
  [LABELS.NAME]: 'Введите ваше имя',
  [LABELS.EMAIL]: 'Введите ваш email',
  [LABELS.PHONE]: 'Введите номер вашего телефона',
}

export const LANGS = ['Русский', 'Английский', 'Китайский', 'Испанский']

export const INITIAL_STATE = {}
