import React from 'react'

export const UsersList = props => (
  <div className="UsersList">
    <select name={props.name} className="form-control">
      {props.userList.map(user => (
        <option
          value={user.id}
          key={user.id}
          selected={user.id === props.selectedUser.id ? 'selected' : ''}
        >{`${user.firstname} ${user.lastname}`}</option>
      ))}
    </select>
  </div>
)

UsersList.defaultProps = {
  name: 'UsersList',
  userList: []
}
