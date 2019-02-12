import React from 'react'

import UserDetails from './index'
import Fetcher from 'components/Utility/Fetcher'

const UserDetailsContainer = props => (
  <Fetcher url="userRole">
    {roles => (
      <div className="UserDetailsContainer">
        <UserDetails user={props.user} roles={roles} handleInputChange={props.handleInputChange} />
      </div>
    )}
  </Fetcher>
)

export default UserDetailsContainer
