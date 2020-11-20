import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Input from '../Input'
import Select from '../Select'
import Checkbox from '../Checkbox'

import './Form.scss'

import { LABELS } from '../../data'

const { NAME, EMAIL, PHONE } = LABELS

const Form = () => {
  const STATE = useSelector((state) => state)
  console.log(STATE)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
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

      <button className="form__submit" type="submit" disabled={false}>
        Зарегистрироваться
      </button>
    </form>
  )
}

export default Form
