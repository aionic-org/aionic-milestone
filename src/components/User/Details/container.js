import React from 'react';

import Fetcher from 'components/Utility/Fetcher';

import UserDetails from './index';

const UserDetailsContainer = (props) => (
  <Fetcher url="user-roles">
    {(roles) => (
      <div className="UserDetailsContainer">
        <UserDetails user={props.user} roles={roles} handleInputChange={props.handleInputChange} />
      </div>
    )}
  </Fetcher>
);

export default UserDetailsContainer;
