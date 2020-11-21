import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Dropdown from 'react-dropdown'
import IconArrow from './IconArrow'

import 'react-dropdown/style.css'
import './Select.scss'

import { setValidationTrue } from '../../store/actionCreators'
import { LANGS, LABELS } from '../../data'

const title = LABELS.LANG
const options = LANGS.map((lang) => ({
  value: lang,
  label: lang,
  className: 'dropdown__menu-item',
}))

const Select = () => {
  const dispatch = useDispatch()

  const handleChange = useCallback(() => {
    dispatch(setValidationTrue(title))
  }, [dispatch])

  return (
    <div className="dropdown-wrapper">
      <p className="dropdown__label">{title}</p>

      <Dropdown
        options={options}
        placeholder={`Выберите ${title}`}
        className="dropdown"
        menuClassName="dropdown__menu"
        controlClassName="dropdown__control"
        placeholderClassName="dropdown__placeholder"
        arrowOpen={<IconArrow />}
        arrowClosed={<IconArrow />}
        onChange={handleChange}
      />
    </div>
  )
}

export default Select
