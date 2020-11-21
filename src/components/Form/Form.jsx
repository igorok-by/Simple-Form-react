import React from 'react'
import { useSelector } from 'react-redux'

import Input from '../Input'
import Select from '../Select'
import Checkbox from '../Checkbox'

import './Form.scss'

import { LABELS } from '../../data'
const { NAME, EMAIL, PHONE } = LABELS

const Form = () => {
  const isDisabled = useSelector((state) =>
    Object.values(state).every((elem) => elem),
  )

  return (
    <form className="form">
      <header className="form__header">
        <h2 className="form__title">Регистрация</h2>
        <p className="form__subtitle">
          Уже есть аккаунт? <a href=" ">Войти</a>
        </p>
      </header>

      <Input title={NAME} />
      <Input title={EMAIL} />
      <Input title={PHONE} />

      <Select />

      <Checkbox />

      <button className="form__submit" type="submit" disabled={!isDisabled}>
        Зарегистрироваться
      </button>
    </form>
  )
}

export default Form
