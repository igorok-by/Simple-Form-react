import React from 'react'
import { useDispatch } from 'react-redux'

import './Checkbox.scss'

import {
  setValidationTrue,
  setValidationFalse,
} from '../../store/actionCreators'
import { LABELS } from '../../data'

const title = LABELS.CONDITIONS

const Checkbox = () => {
  const dispatch = useDispatch()

  const handleChange = ({ target: { checked } }) => {
    checked
      ? dispatch(setValidationTrue(title))
      : dispatch(setValidationFalse(title))
  }

  return (
    <>
      <input
        className="checkbox"
        type="checkbox"
        id={title}
        onChange={handleChange}
      />
      <label className="checkbox__label" htmlFor={title}>
        Принимаю <a href=" ">условия</a> использования
      </label>
    </>
  )
}

export default Checkbox
