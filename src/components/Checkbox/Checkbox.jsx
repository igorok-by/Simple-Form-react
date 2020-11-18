import React from 'react'
import './Checkbox.scss'

const Checkbox = () => {
  return (
    <>
      <input className="checkbox" type="checkbox" id="checkbox" />
      <label className="checkbox__label" htmlFor="checkbox">
        Принимаю <a href=" ">условия</a> использования
      </label>
    </>
  )
}

export default Checkbox
