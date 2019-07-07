import React from 'react'
import InputSelect from 'components/UI/Input/Select'

const UserList = props => {
  const users = props.userList.map(user => {
    return { id: user.id, title: `${user.firstname} ${user.lastname}` }
  })

  return (
    <div className="UserList">
      <InputSelect
        optionList={users}
        name={props.name}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
    </div>
  )
}

UserList.defaultProps = {
  userList: [],
  onChange: () => {},
  defaultValue: ''
}

export default UserList
