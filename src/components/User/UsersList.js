import React from 'react'

export const UsersList = props => (
  <div className="UsersList">
    <select
      name={props.name}
      className="form-control"
      defaultValue={props.selectedUser.id}
      onChange={props.onChange}
    >
      {props.userList.map(user => (
        <option value={user.id} key={user.id}>{`${user.firstname} ${user.lastname}`}</option>
      ))}
    </select>
  </div>
)

UsersList.defaultProps = {
  name: 'UsersList',
  userList: []
}
