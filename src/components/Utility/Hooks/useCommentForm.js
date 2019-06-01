import { useState } from 'react'

import { Api } from 'services/api'

function useCommentForm(endpoint, updateParent) {
  const [comment, setComment] = useState({})
  const [msg, setMsg] = useState('')

  const handleInputChange = e => {
    const text = e.target.value
    setComment({ text })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (comment.text && comment.text.length) {
      Api.postData(endpoint, { comment })
        .then(res => {
          updateParent()
        })
        .catch(err => {
          setMsg(Api.handleHttpError(err))
        })
    }
  }

  return [msg, handleInputChange, handleSubmit]
}

export default useCommentForm
