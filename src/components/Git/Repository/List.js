import React from 'react'
import InputSelect from 'components/UI/Input/Select'

const GitRepositoryList = props => {
  const { repoList, onChange, disabled, defaultValue } = props

  const repos = repoList.map(repo => {
    return { ...repo, optionTitle: repo.name }
  })

  return (
    <div className="GitRepositoryList">
      <InputSelect
        optionList={repos}
        name="repository"
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  )
}

GitRepositoryList.defaultProps = {
  repoList: [],
  defaultValue: ''
}

export default GitRepositoryList
