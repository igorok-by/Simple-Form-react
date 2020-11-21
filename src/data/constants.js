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

export const REGEXPS = {
  [LABELS.NAME]: /^[a-zA-Zа-яА-Я\s-]*$/,

  [LABELS.EMAIL]: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

  [LABELS.PHONE]: /^[\d+()-]*$/,
}
