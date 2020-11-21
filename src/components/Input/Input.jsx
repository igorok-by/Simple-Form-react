import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'

import './Input.scss'

import {
  setValidationTrue,
  setValidationFalse,
} from '../../store/actionCreators'
import { PLACEHOLDERS, INPUT_STATE_KEYS } from '../../data'
import { validateInput } from '../../utils'

const Input = ({ title }) => {
  const dispatch = useDispatch()
  const isValidatedInput = useSelector(
    (state) => state[INPUT_STATE_KEYS[title]],
  )
  const [inputValue, setInputValue] = useState('')

  const handleChange = ({ target: { value }, target }) => {
    target && setInputValue(value)

    value && validateInput(title, value)
      ? dispatch(setValidationTrue(title))
      : dispatch(setValidationFalse(title))
  }

  const inputWrapperClasses = classNames('input-wrapper', {
    'input-wrapper--error': inputValue && !isValidatedInput,
  })

  return (
    <div className={inputWrapperClasses}>
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
      />
      <span className="input__message">Введено не корректное значение</span>
    </div>
  )
}

export default Input
