import React from 'react'

const CommentForm = props => {
  const { handleSubmit, handleInputChange } = props
  return (
    <div className="CommentForm">
      <form onSubmit={handleSubmit}>
        <textarea className="form-control" name="comment" rows="3" onChange={handleInputChange} />
        <button className="btn btn-md btn-primary mt-2 btn-block btn-sm" type="submit">
          <i className="fas fa-sign-in-alt" /> Submit
        </button>
      </form>
    </div>
  )
}

export default CommentForm
