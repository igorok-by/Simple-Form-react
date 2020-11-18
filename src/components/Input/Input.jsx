import React from 'react'
// import classNames from 'classnames'
import './Input.scss'
import { LABELS } from '../../data'

const { EMAIL, PHONE } = LABELS

const Input = ({ name }) => {
  let placeholder

  switch (name) {
    case EMAIL:
      placeholder = 'Введите ваш email'
      break
    case PHONE:
      placeholder = 'Введите номер вашего телефона'
      break
    default:
      placeholder = 'Введите ваше имя'
      break
  }

  return (
    <div className="input-wrapper">
      <label className="input__label" htmlFor={name}>
        {name}
      </label>
      <input
        className="input"
        id={name}
        type="text"
        placeholder={placeholder}
      />
      <span className="input__message">Введено не корректное значение</span>
    </div>
  )
}

export default Input
