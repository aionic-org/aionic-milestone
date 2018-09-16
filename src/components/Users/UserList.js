import React from 'react'

export const UserList = props => (
  <div className="UserList">
    <select name={props.name} className="form-control">
      {props.userList.map(user => (
        <option value={user.id} selected={user.id === props.selectedUser.id ? 'selected' : ''}>{`${
          user.firstname
        } ${user.lastname}`}</option>
      ))}
    </select>
  </div>
)

UserList.defaultProps = {
  name: 'UserList',
  userList: []
}
