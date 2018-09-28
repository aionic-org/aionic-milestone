import React from 'react'

import './Form.css'

export const SearchForm = props => (
  <form className={'SearchForm ' + props.assignedClasses.join(' ')}>
    <input
      className="form-control"
      type="text"
      placeholder="Enter search term"
      aria-label="Search"
    />

    <button className="btn btn-secondary my-2 my-sm-0 ml-2" type="button">
      Search
    </button>
  </form>
)

SearchForm.defaultProps = {
  assignedClasses: []
}
