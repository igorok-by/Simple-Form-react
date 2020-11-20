import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './Input.scss'

import {
  setValidationTrue,
  setValidationFalse,
} from '../../store/actionCreators'
import { PLACEHOLDERS } from '../../data'
import { validateInput } from '../../utils'

const Input = ({ title }) => {
  // const STATE = useSelector((state) => state)

  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleChange = ({ target }) => {
    target && setInputValue(target.value)
  }

  const handleBlur = ({ target: { value } }) => {
    value && validateInput(title, value) && dispatch(setValidationTrue(title))

    !value && dispatch(setValidationFalse(title))
  }

  return (
    <div className="input-wrapper">
      <label className="input__label" htmlFor={title}>
        {title}
      </label>
      <input
        className="input"
        placeholder={PLACEHOLDERS[title]}
        type="text"
        id={title}
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <span className="input__message">Введено не корректное значение</span>
    </div>
  )
}

export default Input
