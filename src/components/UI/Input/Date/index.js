import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

// hotfix for not loaded css: https://github.com/Hacker0x01/react-datepicker/issues/882
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import './Date.scss'

const InputDate = props => {
  const { startDate, name, updateParent } = props

  const [date, setDate] = useState(startDate)

  const handleChange = date => {
    setDate(date)
    updateParent(date)
  }

  return (
    <div className="InputDate">
      <DatePicker
        className="form-control"
        selected={new Date(date)}
        onChange={handleChange}
        dateFormat="yyyy-MM-dd / hh:mm a"
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={60}
        name={name}
      />
    </div>
  )
}

InputDate.defaultProps = {
  startDate: new Date()
}

export default InputDate
