import React, { Component } from 'react'

import ReactMarkdown from 'react-markdown'

import './Markdown.css'

class InputMarkdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editMode: false
    }
  }

  toggleEditMode = (e, cb) => {
    e.persist()

    this.setState(
      {
        editMode: !this.state.editMode
      },
      () => {
        if (typeof cb === 'function') {
          cb(e)
        }
      }
    )
  }

  render() {
    const { content, name, rows, onBlurCb } = this.props

    const output = this.state.editMode ? (
      <div className="EditMode form-group">
        <textarea
          name={name}
          className="form-control"
          rows={rows}
          defaultValue={content}
          autoFocus={true}
          onBlur={e => {
            this.toggleEditMode(e, onBlurCb)
          }}
        />
      </div>
    ) : (
      <div className="PreviewMode form-group" style={{ cursor: 'text' }}>
        <ReactMarkdown source={content} />
      </div>
    )

    return (
      <div className="InputMarkdown">
        <p
          className="text-muted font-weight-bold text-right"
          onClick={this.toggleEditMode}
          style={{ cursor: 'pointer' }}
        >
          Edit
        </p>
        <hr className="featurette-divider" />
        {output}
        <hr className="featurette-divider" />
      </div>
    )
  }
}

InputMarkdown.defaultProps = {
  rows: 5,
  onBlurCb: () => {}
}

export default InputMarkdown
