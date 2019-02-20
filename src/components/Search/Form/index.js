import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import './Form.css'

const SearchForm = props => {
  const { history, assignedClasses } = props
  const [term, setTerm] = useState('')

  const handleInputChange = e => {
    setTerm(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (term.length) {
      history.push(`/search/${term}`)
    }
  }

  return (
    <form className={`SearchForm ${assignedClasses.join(' ')}`} onSubmit={handleSubmit}>
      <div class="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="Search for..."
          aria-label="Search"
          onChange={handleInputChange}
        />
        <div class="input-group-append">
          <button class="btn btn-secondary" type="submit">
            <i class="fas fa-search fa-sm" />
          </button>
        </div>
      </div>
    </form>
  )
}

SearchForm.defaultProps = {
  assignedClasses: []
}

export default withRouter(SearchForm)
