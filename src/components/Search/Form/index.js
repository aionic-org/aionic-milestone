import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './Form.css'

class SearchForm extends Component {
  constructor(props) {
    super(props)

    this.state = { searchTerm: '' }
  }

  handleInputChange = e => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.searchTerm.length) {
      this.props.history.push(`/search/${this.state.searchTerm}`)
    }
  }

  render() {
    return (
      <form
        className={'SearchForm ' + this.props.assignedClasses.join(' ')}
        onSubmit={this.handleSubmit}
      >
        <input
          className="form-control"
          type="text"
          placeholder="Enter search term"
          aria-label="Search"
          onChange={this.handleInputChange}
        />

        <button className="btn btn-secondary my-2 my-sm-0 ml-2" type="submit">
          Search
        </button>
      </form>
    )
  }
}

SearchForm.defaultProps = {
  assignedClasses: []
}

export default withRouter(SearchForm)
