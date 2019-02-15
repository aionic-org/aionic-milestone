import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

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
      <input
        className="form-control"
        type="text"
        placeholder="Enter search term"
        aria-label="Search"
        onChange={handleInputChange}
      />
      <button className="btn btn-secondary my-2 my-sm-0 ml-2" type="submit">
        Search
      </button>
    </form>
  )
}

SearchForm.defaultProps = {
  assignedClasses: []
}

export default withRouter(SearchForm)
