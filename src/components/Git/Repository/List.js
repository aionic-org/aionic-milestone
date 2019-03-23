import React from 'react'
import InputSelect from 'components/UI/Input/Select'

const GitRepositoryList = props => {
  const repos = props.repoList.map(repo => {
    return { ...repo, optionTitle: repo.name }
  })

  return (
    <div className="GitRepositoryList">
      <InputSelect
        optionList={repos}
        name="repository"
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        disabled={props.disabled}
      />
    </div>
  )
}

GitRepositoryList.defaultProps = {
  repoList: [],
  defaultValue: ''
}

export default GitRepositoryList
