import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import './Bar.css'

const SearchBar = props => {
  const { history, location, assignedClasses } = props
  const [term, setTerm] = useState('')

  const path = location.pathname.split('/')
  const termFromUrl = path[1] === 'search' ? path[2] : ''

  const handleInputChange = e => {
    setTerm(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    const _term = term || document.querySelector('.SearchBar input').value

    if (_term.length) {
      history.push(`/search/${_term}`)
    }
  }

  return (
    <form className={`SearchBar ${assignedClasses.join(' ')}`} onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="Enter task title..."
          aria-label="Search"
          onChange={handleInputChange}
          defaultValue={termFromUrl}
        />
        <div className="input-group-append">
          <button className="btn btn-secondary" type="submit">
            <i className="fas fa-search fa-sm" />
          </button>
        </div>
      </div>
    </form>
  )
}

SearchBar.defaultProps = {
  assignedClasses: []
}

export default withRouter(SearchBar)
