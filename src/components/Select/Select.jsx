import React from 'react'
import Dropdown from 'react-dropdown'
import IconArrow from './IconArrow'

import 'react-dropdown/style.css'
import './Select.scss'

import { LANGS } from '../../data'

const name = 'Язык'
const options = LANGS.map((lang) => ({
  value: lang,
  label: lang,
  className: 'dropdown__menu-item',
}))

const Select = () => {
  return (
    <div className="dropdown-wrapper">
      <p className="dropdown__label">{name}</p>

      <Dropdown
        options={options}
        placeholder={name}
        className="dropdown"
        menuClassName="dropdown__menu"
        controlClassName="dropdown__control"
        placeholderClassName="dropdown__placeholder"
        arrowOpen={<IconArrow />}
        arrowClosed={<IconArrow />}
      />

      <span className="dropdown__message">Выберите {name}</span>
    </div>
  )
}

export default Select
