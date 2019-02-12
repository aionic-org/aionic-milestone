import React, { useState } from 'react'

import ReactMarkdown from 'react-markdown'

import './Markdown.css'

const InputMarkdown = props => {
  const { content, name, rows, onBlurCb } = props
  const [edit, setEdit] = useState(false)

  const toggleEdit = (e, cb) => {
    setEdit(!edit)

    if (typeof cb === 'function') {
      cb(e)
    }
  }

  const output = edit ? (
    <div className="EditMode form-group">
      <textarea
        name={name}
        className="form-control"
        rows={rows}
        defaultValue={content}
        autoFocus={true}
        onBlur={e => {
          toggleEdit(e, onBlurCb)
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
        onClick={toggleEdit}
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

InputMarkdown.defaultProps = {
  rows: 5,
  onBlurCb: () => {}
}

export default InputMarkdown
