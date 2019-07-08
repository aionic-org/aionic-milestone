import React from 'react'

import InputSelect from 'components/UI/Input/Select'

const GitOrganizationSelect = props => {
  const organizations = props.orgList.map(organization => {
    return { value: organization.id, title: organization.name }
  })

  return (
    <div className="GitOrganizationSelect">
      <InputSelect
        optionList={organizations}
        name="organization"
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
    </div>
  )
}

GitOrganizationSelect.defaultProps = {
  orgList: [],
  onChange: () => {},
  defaultValue: ''
}

export default GitOrganizationSelect
