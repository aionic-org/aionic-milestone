import React from 'react'

import InputSelect from 'components/UI/Input/Select'

const GitOrganizationList = props => {
  const organizations = props.orgList.map(organization => {
    return { value: organization.id, title: organization.name }
  })

  return (
    <div className="GitOrganizationList">
      <InputSelect
        optionList={organizations}
        name="organization"
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
    </div>
  )
}

GitOrganizationList.defaultProps = {
  orgList: [],
  onChange: () => {},
  defaultValue: ''
}

export default GitOrganizationList
