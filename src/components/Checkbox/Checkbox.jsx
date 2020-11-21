import React, { useCallback } from 'react'
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

  const handleChange = useCallback(
    ({ target: { checked } }) => {
      checked
        ? dispatch(setValidationTrue(title))
        : dispatch(setValidationFalse(title))
    },
    [dispatch],
  )

  return (
    <>
      <input
        className="checkbox"
        type="checkbox"
        id={title}
        onChange={handleChange}
      />
      <label className="checkbox__label" htmlFor={title}>
        <span>
          Принимаю <a href=" ">условия</a> использования
        </span>
      </label>
    </>
  )
}

export default Checkbox
