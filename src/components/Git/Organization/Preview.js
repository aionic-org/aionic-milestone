import React, { useState } from 'react'

import { Api } from 'services/api'

import Spinner from 'components/UI/Spinner'

const GitOrganizationPreview = props => {
  const { org, handleDelete, handleSync } = props

  const [isLoading, setIsLoading] = useState(false)
  const [msg, setMsg] = useState(null)

  const deleteOrganization = () => {
    Api.deleteData(`git/organization/${org.id}`)
      .then(res => {
        handleDelete(org)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const syncOrganization = () => {
    setIsLoading(true)
    Api.putData(`git/organization/${org.id}`, { name: org.name })
      .then(res => {
        setIsLoading(false)
        handleSync(org, res)
      })
      .catch(err => {
        setIsLoading(false)
        setMsg(Api.handleHttpError(err))
        console.log(err)
      })
  }

  return (
    <div target="_blank" className="GitOrganizationPreview  card">
      <div className="card-body">
        <h5 className="card-title">{org.name}</h5>
        <p className="card-text">{org.description ? org.description : '- no description -'}</p>
        <button className="btn btn-primary btn-sm" onClick={syncOrganization}>
          {isLoading ? <Spinner onBtn={true} /> : 'Synchronize'}
        </button>

        <button className="btn btn-danger btn-sm ml-2" onClick={deleteOrganization}>
          Remove
        </button>

        <a href={org.htmlUrl} target="_blank" className="card-link ml-3">
          Open
        </a>

        {msg ? (
          <p className="card-text mt-2">
            <small className="text-danger">{msg}</small>
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default GitOrganizationPreview
