import React, { Component } from 'react'

export const Searchbar = props => (
  <form className={'Searchbar ' + props.assignedClasses.join(' ')}>
    <input
      className="form-control"
      type="text"
      placeholder="Enter search term"
      aria-label="Search"
    />

    <button class="btn btn-secondary my-2 my-sm-0 ml-2" type="button">
      Search
    </button>
  </form>
)

Searchbar.defaultProps = {
  assignedClasses: []
}
